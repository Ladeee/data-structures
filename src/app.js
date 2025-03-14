import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Hashmap from './components/hashmap'
import LinkedList from './components/linked-list'
import Trees from './components/trees'
import StacksQueues from './components/stacks-queues'
import Heaps from './components/heaps'
import Recursion from './components/recursion-dp'
import SearchSort from './components/sorting-searching'
import Graph from './components/graphs'
import './app.css'

export default function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="routes">
                <h1>Data structure </h1>
                <h1 className="data">&</h1>
                <h1>algorithms</h1>
                <p>Check the console</p>
              </div>
            }
          />
          <Route path="/hash" element={<Hashmap />} />
          <Route path="/linked-list" element={<LinkedList />} />
          <Route path="/trees" element={<Trees />} />
          <Route path="/stacks-queues" element={<StacksQueues />} />
          <Route path="/heaps" element={<Heaps />} />
          <Route path="/graph" element={<Graph />} />
          <Route path="/recursion" element={<Recursion />} />
          <Route path="/search-sort" element={<SearchSort />} />
        </Routes>
      </Router>
    </div>
  )
}
