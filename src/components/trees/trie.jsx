//QUESTION: Search for the prefix of each word in the original sentences,
// and replace those words with the prefix to form a sentence

import { useEffect, useState } from 'react'

export default function Trie() {
  const [originalSentence, setOriginalSentence] = useState('')
  const [replacedWord, setReplacedWord] = useState('')

  useEffect(() => {
    function TrieFunction() {
      //initialize root
      const root = {}

      // This function adds a word to the trie. It starts from the root and checks each 
      // letter in the word. If a letter doesn't exist in the current node, it creates an empty 
      // object for it. Then, it moves to the next letter. Once all letters are added, it stores
      //  the full word at the last node.
      function insertWord(word) {
        let node = root
        for (const letter of word) {
          if (!node[letter]) {
            node[letter] = {}
          }
          node = node[letter]
        }
        node.word = word
      }

      //This function finds a word. if the word doesn't exist in the trie, it returns the original word,
      //and if found, it returns the shortest root node, otherwise it keeps searching
      function findRoot(word) {
        let node = root
        for (const letter of word) {
          if (!node[letter]) return word
          node = node[letter]
          if (node.word) return node.word
        }
        return word
      }
      return { insertWord, findRoot, root }
    }

    const myTrie = TrieFunction()
    const dictionary = ['cat', 'bat', 'rat']
    dictionary.forEach((word) => myTrie.insertWord(word))

    // Original sentence
    const sentence = 'the cattle was rattled by the battery'
    setOriginalSentence(sentence)

    // Split the words for easy replacement, then join it back after the replacement is done
    //I'm replacing the words with the roots here
    const words = sentence.split(' ')
    const modified = words.map((word) => myTrie.findRoot(word)).join(' ')

    setReplacedWord(modified)
  }, [])

  return (
    <div>
      <h2>Trie assessment: Replacement</h2>
      <p>
        <strong>Original Sentence:</strong> {originalSentence}
      </p>
      <p>
        <strong>Modified Sentence:</strong> {replacedWord}
      </p>
    </div>
  )
}
