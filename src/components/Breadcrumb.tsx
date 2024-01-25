import { Link } from 'react-router-dom'

type BreadcrumbProps = {
  link?: string
}

function Breadcrumb({ link }: BreadcrumbProps) {
  return (
    <div className='breadcrumb'>
      <div className='left-align'>
        <Link to='/'>~</Link>/
        {link !== undefined && <Link to={link}>{link.slice(1)}</Link>}
      </div>
      <div className='right-align' style={{ fontStyle: 'normal' }}>
        <Link to='/about'>about</Link>
      </div>
    </div>
  )
}

export default Breadcrumb
