import Code from '~/components/Code'
import Eq from '~/components/Equation'

import calculate from './snippets/calculate.py?raw'
import initialize from './snippets/initialize.py?raw'
import move_left from './snippets/move_left.py?raw'
import move_right from './snippets/move_right.py?raw'
import _return from './snippets/return.py?raw'
import solution from './snippets/solution.py?raw'
import _while from './snippets/while.py?raw'

// TODO: add footnote component
// package.json fix .prettierignore
// - format everything (description section)
// - navigation
// - MDX
// - why area initialized to 0
// - brute force
// - cpp features (tabbed in state, update prism)
// back button

function ContainerWithMostWater() {
  return (
    <>
      <h1>Container With Most Water</h1>
      <a
        href='https://leetcode.com/problems/container-with-most-water/description/'
        target='_blank'
      >
        <h2>Problem Statement</h2>
      </a>
      Given an array of non-negative integers <Eq math='height' />, where{' '}
      <Eq math='height[i]' /> represents the height of the{' '}
      <Eq math='i^{\text{th}}' /> column, return the maximum amount of water any
      container can store. A container is bounded by its two columns and the
      floor.
      <h2>Understanding the Problem</h2>
      Given some pointers <Eq math='0\leq l<r<length(height)' />, the
      corresponding container forms a rectangular area defined by some width and
      length:
      <ul>
        <li>
          The width is the difference of those pointers, <Eq math='r - l' />.
        </li>
        <li>
          The length is the smallest height of columns <Eq math='l' /> and{' '}
          <Eq math='r' />, <Eq math='\min(height[l], height[r])' />.
        </li>
        Any water that could be stored above this height would "stream off" the
        sides of the container and not contribute to the total area.
      </ul>
      Thus, the overall area is the following units of water:
      <Eq
        center
        math='area = width \times height = (r - l) \times \min(height[l], height[r])'
      />
      <h2>Intuition</h2>
      The problem is asking us to maximize this area. While this can trivially
      be performed by enumerating all pairs in <Eq math='O(length(height)^2)' />{' '}
      time, the key insight in finding an efficient solution lies in exploiting
      the problem constraints.
      <p>
        While a lot of problems are easiest understood conceptually, this one is
        an optimization problem at its core:
      </p>
      <Eq center math='\max\{(r - l) \times \min(height[l], height[r])\}' />
      <p>
        Consider the widest container with pointers{' '}
        <Eq math='l_0=0, r_0=len(height)-1' /> and area <Eq math='A_0' />.
      </p>
      <p>
        Also consider another container of smaller width with positions{' '}
        <Eq math='l_1,r_1' /> and area <Eq math='A_1' />.
      </p>
      <ul>
        <li>
          If this second container has a smaller minimum height, then both
          <ul>
            <li>
              <Eq math='r_1-l_1<r_0-l_0' />
            </li>
            <li>
              <Eq math='min(height[l_1],height[r_1])<min(height[l_0],height[r_0])' />
            </li>
          </ul>
          The second container's width and height are smaller—
          <Eq math='A_1<A_0' />
          —and this container should not be considered.
        </li>
        <li>
          An equal minimum height, and still <Eq math='A_1<A_0' /> because the
          second container's width is smaller.
        </li>
        <li>
          A larger minimum height, and it could be that <Eq math='A_1>A_0' />
          —this container should be considered.
        </li>
      </ul>
      <p>
        Using this mathematical intuition, the number of considerable containers
        can be narrowed down significantly in comparison to the brute-force{' '}
        <Eq math='O(length(height)^2)' /> approach. Starting with the widest
        container, new containers with minimum heights smaller than the current
        bounding height can be skipped.
      </p>
      <h2>Solving the Problem</h2>
      <p>
        Using the two pointers technique and the aforementioned logic, the
        solution nearly writes itself.
      </p>
      <p>
        First, initialize the pointers <Eq math='l,r' /> to the widest positions
        and return value <Eq math='area' />:
      </p>
      <Code code={initialize} />
      <p>Until the pointers meet,</p>
      <Code code={_while} />
      <p>calculate this iteration's container width, height, and area:</p>
      <Code code={calculate} />
      <p>
        Recalling the intuition, the area of any container is bounded by its
        width and the smaller of its column heights. If the height at either
        pointer is smaller than the current minimum, the resulting area will
        also be smaller. Thus, both pointers should advance until their height
        is taller than the previous bounding one (in this case,{' '}
        <Eq math='min\_height' />
        ).
      </p>
      <div>
        <p>Move the left pointer forward until that's the case:</p>
        <Code code={move_left} />
        <p>And do the same for the right:</p>
        <Code code={move_right} />
        <p>
          The <Eq math='l < r' /> condition is also included since there may
          never be a larger height—in that case, no more iterations are needed.
        </p>
      </div>
      <p>Finally, return the area:</p>
      <Code code={_return} />
      <p>Here's the solution in all:</p>
      <Code code={solution} />
      <h2>Time & Space Complexity</h2>
      <p>
        This solution follows the typical monotonic two pointers approach. The
        left/right pointers are incremented/decremented by 1 until they meet,
        which takes exactly <Eq math='length(height)' /> iterations.
      </p>
      <p>
        Thus, the overall time complexity is{' '}
        <Eq math='\Theta(length(height))' />.
      </p>
      <p>
        Only variables and constant-time calculations are used&mdash;the space
        complexity is <Eq math='\Theta(1)' />.
      </p>
    </>
  )
}

export default ContainerWithMostWater
