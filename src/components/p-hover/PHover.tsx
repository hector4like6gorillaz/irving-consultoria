import { useNavigate } from 'react-router-dom'
import style from './p.module.scss'

const PHover = ({ children, nav }: { children: string; nav?: string }) => {
  const navigate = useNavigate()
  return (
    <p className={`${style['p-hover']}`} onClick={() => nav && navigate(nav)}>
      {children}{' '}
    </p>
  )
}

export default PHover
