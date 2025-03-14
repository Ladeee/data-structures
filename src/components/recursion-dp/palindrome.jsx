//QUESTION: Get a string of words that is the same from left to right, or right to left

export default function Dp() {
  let s = ["a", "b", "a", "c", "d", "m", "a", "d", "a", "m"];
  let palindromes = new Set();

  function Palin(left, right) {
    //Checks the arrays from left to right, and right to left and join the corresponding letters
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      let currentPalindrome = s.slice(left, right + 1).join("");
      if (currentPalindrome.length > 1) {
        palindromes.add(currentPalindrome); // Store palindrome
      }
      left--;
      right++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    Palin(i, i);     // Odd-length palindromes
    Palin(i, i + 1); // Even-length palindromes
  }

  return (
    <div>
      <h4>Palindromes Found</h4>
      {Array.from(palindromes).map((pal, index) => (
        <p key={index}>{pal}</p>
      ))}
    </div>
  );
}