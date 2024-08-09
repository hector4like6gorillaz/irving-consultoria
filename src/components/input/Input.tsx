import { Fragment } from 'react'
import style from './input.module.scss'

const Input = ({
  placeHolder = 'vacio',
  value = '',
  onChange,
  type = 'text',
  inputDefault = true,
  theme = 'primary',
}: {
  value?: string
  placeHolder?: string
  onChange?: (dat: string) => void
  type?: React.HTMLInputTypeAttribute
  inputDefault?: boolean
  theme?: 'primary' | 'secondary'
}) => {
  const getLabelClass = () => {
    let cls: string = `${style['input-props']}`

    if (inputDefault)
      switch (theme) {
        case 'primary':
          cls = `${style['input-props-primary']}`
          break
        case 'secondary':
          cls = `${style['input-props-secondary']}`
          break

        default:
          break
      }
    else
      switch (theme) {
        case 'primary':
          cls = `${style['textarea-props-primary']}`
          break
        case 'secondary':
          cls = `${style['textarea-props-secondary']}`
          break

        default:
          break
      }

    return cls
  }
  return (
    <Fragment>
      {inputDefault ? (
        <input
          type={type}
          placeholder={placeHolder}
          onChange={(e) => onChange && onChange(e.target.value)}
          value={value}
          className={`${style['input-props-base']} ${getLabelClass()}`}
        />
      ) : (
        <textarea
          placeholder={placeHolder}
          onChange={(e) => onChange && onChange(e.target.value)}
          value={value}
          className={`${style['textarea-props-base']} ${getLabelClass()}`}
        />
      )}
    </Fragment>
  )
}

export default Input
