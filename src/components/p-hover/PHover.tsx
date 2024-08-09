import style from './p.module.scss'

const PHover = ({ children }: { children: string }) => {
  return <p className={`${style['p-hover']}`}>{children} </p>
}

export default PHover
