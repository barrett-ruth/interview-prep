import 'katex/dist/katex.min.css'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import ContainerWithMostWater from '~/posts/twoPointers/containerWithMostWater'

const Home = () => (
  <>
    <h1>swe interview prep</h1>
    <Link to='/two-pointers'>
      <h2>two pointers</h2>
    </Link>
  </>
)

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/two-pointers' element={<ContainerWithMostWater />} />
      </Routes>
    </Router>
  )
}

export default App
