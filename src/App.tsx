import '@fontsource/fira-mono'
import '@fontsource/fira-mono/700.css'
import 'katex/dist/katex.min.css'

import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import About from '~/components/About'
import Breadcrumb from '~/components/Breadcrumb'
import TwoPointers from '~/twoPointers'
import ContainerWithMostWater from '~/twoPointers/containerWithMostWater/index.mdx'
import TwoPointersOverview from '~/twoPointers/overview.mdx'

function Home() {
  return (
    <>
      <Breadcrumb />
      <h1>interview prep</h1>
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
            path='/two-pointers/overview'
            element={<TwoPointersOverview />}
          />
          <Route
            path='/two-pointers/container-with-most-water'
            element={<ContainerWithMostWater />}
          />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
