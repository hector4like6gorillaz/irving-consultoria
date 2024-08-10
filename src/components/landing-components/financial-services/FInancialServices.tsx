import { Fragment } from 'react'
import style from './financial.module.scss'

import CardHome from '../middle-cards/CardHome'
import { IcardFinancial } from 'src/interfaces/fiancial-interface'

const FInancialServices = ({
  cards,
  title = 'Servicios de',
  titleGreen = 'Digitalización',
  subtitle = 'SOLUCIONES INNOVADORAS PARA TU PRESENCIA ONLINE',
}: {
  cards: IcardFinancial[]
  title?: string
  titleGreen?: string
  subtitle?: string
}) => {
  return (
    <div className={`${style['div-container-financial']}`}>
      <h2 className={`${style['h2-title']}`}>
        {title} <span className={`${style['span-financial']}`}>{titleGreen}</span>
      </h2>
      <br />
      <p className={`${style['p-sub-cards']}`}>{subtitle} </p>
      <div className={`${style['three-cards-container']}`}>
        {cards.map((item, index) => {
          return (
            <Fragment key={item.title + index}>
              <CardHome data={item} />
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default FInancialServices
