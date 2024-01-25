import Breadcrumb from './Breadcrumb'

function About() {
  return (
    <>
      <Breadcrumb />
      <img
        src='pfp.webp'
        alt='profile picture'
        width='175px'
        height='175px'
        loading='lazy'
        style={{ padding: '50px 0 25px 0' }}
      />
      <p>
        Hello, my name is Barrett Ruth. I am a second-year student at the
        University of Virginia, majoring in Computer Science, Economics, and
        Statistics. Over the next few years, I will be seeking internships and
        jobs at the intersection of these three disciplines, from financial
        modeling to software engineering.
      </p>
      <p>
        Consequently, I will be extensively practicing on platforms like
        LeetCode, HackerRank, and TopCoder to enhance my algorithmic thinking.
        The effectiveness of these platforms as metrics for an individual's
        thought process is debatable, but one thing is certain&mdash;they get a
        bad wrap.
      </p>
      <p>
        This editorial serves as both a problem-solving guide and a record of my
        progress.
      </p>
      <p>
        I do not consider myself talented in data structures and algorithms.
        However, I believe that people often overcomplicate problems. I hope
        this editorial can present alternative perspectives and new intuitions
        to faciliate easier, quicker, and deeper learning.
      </p>
    </>
  )
}

export default About
