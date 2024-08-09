import { Fragment } from 'react'
import style from './card.module.scss'

const CardMini = ({
  Icon,
  title = 'Vacio',
  description = ['vacio', 'vacio 2'],
  greenTitle = '123 123 123',
}: {
  Icon: any
  title?: string
  description?: string[]
  greenTitle?: string
}) => {
  return (
    <div className={`${style['mini-container']}`}>
      <Icon className={`${style['icon-props']}`} />
      <br />
      <br />
      <p className={`${style['p-title']}`}>{title}</p>
      <br />
      {description.map((item, index) => {
        return (
          <Fragment key={item + index}>
            <p className={`${style['p-content']}`}>{item}</p>
            <br />
          </Fragment>
        )
      })}

      <p className={`${style['p-green']}`}>{greenTitle}</p>
    </div>
  )
}

export default CardMini
