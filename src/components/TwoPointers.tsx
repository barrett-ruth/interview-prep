import Code from './Code'
import Equation from './Equation'

const calculate = `\twidth, min_height = r - l, min(height[l], height[r])
\tarea = max(area, width * min_height)`
const move_left = `\twhile l < r and height[l] <= min_height:\n\t\tl += 1`
const move_right = `\twhile l < r and height[r] <= min_height:\n\t\tr -= 1`
const solution = `def maxArea(height: list[int]) -> int:
\tarea = 0
\tl, r = 0, len(height) - 1
\twhile l < r:
\t\twidth, min_height = r - l, min(height[l], height[r])
\t\tarea = max(area, width * min_height)
\t\twhile l < r and height[l] <= min_height:
\t\t\tl += 1
\t\twhile l < r and height[r] <= min_height:
\t\t\tr -= 1
\treturn area`

// TODO: add footnotes
// - why area initialized to 0
// - brute force
// - store snippets in actual .py files
// - cpp features (tabbed in state, update prism)
// - remove "two pointers" quotes

function TwoPointers() {
  return (
    <>
      <h1>Container With Most Water</h1>
      <a href='https://leetcode.com/problems/container-with-most-water/description/'>
        <h2>Problem Statement</h2>
      </a>
      Given an array of non-negative integers <Equation math='height' />, where{' '}
      <Equation math='height[i]' /> represents the height of the{' '}
      <Equation math='i^{\text{th}}' /> column, return the maximum amount of
      water any container can store. A container is bounded by its two columns
      and the floor.
      <h2>Understanding the Problem</h2>
      Given some pointers <Equation math='0\leq l<r<length(height)' />, the
      corresponding container forms a rectangular area defined by some width and
      length:
      <ul>
        <li>
          The width is the difference of those pointers,{' '}
          <Equation math='r - l' />.
        </li>
        <li>
          The length is the smallest height of columns <Equation math='l' /> and{' '}
          <Equation math='r' />, <Equation math='\min(height[l], height[r])' />.
        </li>
        Any water that could be stored above this height would "stream off" the
        sides of the container and not contribute to the total area.
      </ul>
      Thus, the overall area is the following units of water:
      <Equation
        center
        math='area = width \times height = (r - l) \times \min(height[l], height[r])'
      />
      <h2>Intuition</h2>
      The problem is asking us to maximize this area. While this can trivially
      be performed by enumerating all pairs in{' '}
      <Equation math='O(length(height)^2)' /> time, the key insight in finding
      an efficient solution lies in exploiting the problem constraints.
      <p>
        While a lot of problems are easiest understood conceptually, this one is
        an optimization problem at its core:
      </p>
      <Equation
        center
        math='\max\{(r - l) \times \min(height[l], height[r])\}'
      />
      <p>
        Consider the widest container with pointers{' '}
        <Equation math='l_0=0, r_0=len(height)-1' /> and area{' '}
        <Equation math='A_0' />.
      </p>
      <p>
        Also consider another container of smaller width with positions{' '}
        <Equation math='l_1,r_1' /> and area <Equation math='A_1' />.
      </p>
      <ul>
        <li>
          If this second container has a smaller minimum height, then both
          <ul>
            <li>
              <Equation math='r_1-l_1<r_0-l_0' />
            </li>
            <li>
              <Equation math='min(height[l_1],height[r_1])<min(height[l_0],height[r_0])' />
            </li>
          </ul>
          The second container's width and height are smaller—
          <Equation math='A_1<A_0' />
          —and this container should not be considered.
        </li>
        <li>
          An equal minimum height, and still <Equation math='A_1<A_0' /> because
          the second container's width is smaller.
        </li>
        <li>
          A larger minimum height, and it could be that{' '}
          <Equation math='A_1>A_0' />
          —this container should be considered.
        </li>
      </ul>
      <p>
        Using this mathematical intuition, the number of considerable containers
        can be narrowed down significantly in comparison to the brute-force{' '}
        <Equation math='O(length(height)^2)' /> approach. Starting with the
        widest container, new containers with minimum heights smaller than the
        current bounding height can be skipped.
      </p>
      <h2>Solving the Problem</h2>
      <p>
        Using the two pointers technique and the aforementioned logic, the
        solution nearly writes itself.
      </p>
      <p>
        First, initialize the pointers <Equation math='l,r' /> to the widest
        positions and return value <Equation math='area' />:
      </p>
      <Code code={`l, r = 0, len(height) - 1\narea = 0`} />
      <p>Until the pointers meet,</p>
      <Code code={`while l < r:`} />
      <p>calculate this iteration's container width, height, and area:</p>
      <Code code={calculate} />
      <p>
        Recalling the intuition, the area of any container is bounded by its
        width and the smaller of its column heights. If the height at either
        pointer is smaller than the current minimum, the resulting area will
        also be smaller. Thus, both pointers should advance until their height
        is taller than the previous bounding one (in this case,{' '}
        <Equation math='min\_height' />
        ).
      </p>
      <p>
        Move the left pointer forward until that's the case:
        <Code code={move_left} />
        And do the same for the right:
        <Code code={move_right} />
        The <Equation math='l < r' /> condition is also included since there may
        never be a larger height—in that case, no more iterations are needed.
      </p>
      <p>Finally, return the area:</p>
      <Code code={`\treturn area`} />
      <p>Here's the solution in all:</p>
      <Code code={solution} />
      <h2>Time & Space Complexity</h2>
      <p>
        This solution follows the typical monotonic two pointers approach. The
        left/right pointers are incremented/decremented by 1 until they meet,
        which takes exactly <Equation math='length(height)' /> iterations.
      </p>
      <p>
        Thus, the overall time complexity is{' '}
        <Equation math='\Theta(length(height))' />.
      </p>
      <p>
        Only variables and constant-time calculations are used&mdash; the space
        complexity is <Equation math='\Theta(1)' />.
      </p>
      <h2>Further Optimization</h2>
    </>
  )
}

export default TwoPointers
