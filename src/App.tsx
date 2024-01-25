import '@fontsource/fira-mono'
import '@fontsource/fira-mono/700.css'
import 'katex/dist/katex.min.css'

import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import TwoPointers from '~/twoPointers'
import ContainerWithMostWater from '~/twoPointers/containerWithMostWater/index.mdx'

function Home() {
  return (
    <>
      <h1 style={{ marginTop: '100px' }}>swe interview prep</h1>
      <Link to='/two-pointers'>
        <h2>two pointers</h2>
      </Link>
    </>
  )
}

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/two-pointers' element={<TwoPointers />} />
          <Route
            path='/two-pointers/container-with-most-water'
            element={<ContainerWithMostWater />}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
