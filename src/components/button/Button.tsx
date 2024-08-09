import style from './button.module.scss'

const Button = ({
  label,
  onClick,
  isLoading = false,
  disabled = false,
  type = 'primary',
}: {
  label?: string
  onClick?: () => void
  isLoading?: boolean
  disabled?: boolean
  type?: 'primary' | 'secondary'
}) => {
  const getAspect = () => {
    let classname: string = ``

    switch (type) {
      case 'primary':
        classname = `${style['primary']}`
        break
      case 'secondary':
        classname = `${style['secondary']}`
        break
      default:
        break
    }
    return classname
  }

  return (
    <button
      onClick={() => onClick && onClick()}
      className={`${style['button-base']} ${getAspect()}`}
      disabled={disabled}
    >
      {label ? label : 'vacio'}
    </button>
  )
}

export default Button
