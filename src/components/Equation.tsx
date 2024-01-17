import Latex from 'react-latex-next'

type EquationProps = {
  math: string
}

function Equation({ math }: EquationProps) {
  return <Latex>{`$${math}$`}</Latex>
}

export default Equation
