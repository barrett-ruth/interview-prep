import Latex from 'react-latex-next'

type EquationProps = {
  math: string
}

function Equation({ math }: EquationProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Latex>{`$${math}$`}</Latex>
    </div>
  )
}

export default Equation
