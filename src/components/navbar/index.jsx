import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
  return (
    <nav>
      <Link to="/" className="logo" id="link">
        <p>
          Data <span className="and">&</span>
        </p>
        <p className="algo">Algorithms</p>
      </Link>
      <div className="nav-list">
        <Link id="link" to="/hash">
          <p>Hashmap</p>
        </Link>
        <Link id="link" to="/linked-list">
          <p>Linked-list</p>
        </Link>
        <Link id="link" to="/trees">
          <p>Trees</p>
        </Link>
        <Link id="link" to="/stacks-queues">
          <p>Stack&queries</p>
        </Link>
        <Link id="link" to="/heaps">
          <p>Heap</p>
        </Link>
        <Link id="link" to="/graph">
          <p>Graph</p>
        </Link>
        <Link id="link" to="/search-sort">
          <p>Search&sort</p>
        </Link>
        <Link id="link" to="/recursion">
          <p>Recursion&DP</p>
        </Link>
      </div>
    </nav>
  )
}
