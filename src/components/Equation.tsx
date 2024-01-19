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
        margin: '15px 0'
      }
    : { display: 'inline-block' }

  return (
    <div style={style}>
      <Latex>{`$${math}$`}</Latex>
    </div>
  )
}

export default Equation
