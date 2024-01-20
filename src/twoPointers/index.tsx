import { Link } from 'react-router-dom'

function TwoPointers() {
  return (
    <>
      <div className='breadcrumb'>
        <Link to='/'>~</Link>
      </div>
      <h1>Two Pointers</h1>
      {/* <Link to='/two-pointers/overview'> */}
      {/*   <h2>Technique Overview</h2> */}
      {/* </Link> */}
      <Link to='/two-pointers/container-with-most-water'>
        <h2>Container With Most Water</h2>
      </Link>
    </>
  )
}

export default TwoPointers
