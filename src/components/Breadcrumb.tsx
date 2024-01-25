import { Link } from 'react-router-dom'

type BreadcrumbProps = {
  link?: string
}

// TODO: add about on right side

function Breadcrumb({ link }: BreadcrumbProps) {
  return (
    <div className='breadcrumb'>
      <Link to='/'>~</Link>/
      {link !== undefined && <Link to={link}>{link.slice(1)}</Link>}
    </div>
  )
}

export default Breadcrumb
