import Latex from 'react-latex-next'

type EquationProps = {
  math: string
  center?: boolean
}

function Equation({ math, center }: EquationProps) {
  const style = center
    ? {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '15px 0',
        fontSize: '1.21em'
      }
    : { display: 'inline-block' }

  return (
    <span style={style}>
      <Latex>{`$${math}$`}</Latex>
    </span>
  )
}

export default Equation
