import Button from 'src/components/button/Button'
import style from './card.module.scss'
import { IcardFinancial } from 'src/interfaces/fiancial-interface'
import { Fragment } from 'react'

const CardHome = ({ data }: { data: IcardFinancial }) => {
  return (
    <div className={`${style['container-card']}`}>
      <img className={`${style['img-card']}`} src={data.img} />
      <div className={`${style['body-container']}`}>
        {data.title.split('\n').map((item, index) => {
          return (
            <Fragment key={item + index}>
              <h4 className={`${style['h4-title']}`}>{item}</h4>
            </Fragment>
          )
        })}
        {data.subTitle && (
          <Fragment>
            <br />
            <p className={`${style['p-subtitle']}`}>{data.subTitle} </p>
          </Fragment>
        )}
        <br />
        {data.content.map((item, index) => {
          return (
            <Fragment key={item + index}>
              <p className={`${style['p-card']}`}>{item} </p>
            </Fragment>
          )
        })}
        <br />

        {data.buttonProps && (
          <Button label={data.buttonProps.label} onClick={data.buttonProps.onClick} />
        )}
      </div>
    </div>
  )
}

export default CardHome
