import { Fragment } from 'react'
import style from './page.module.scss'

import Button from 'src/components/button/Button'
import { ICarouselData } from 'src/interfaces/carousel-interface'

const PageRight = ({ active, dataPage }: { active: boolean; dataPage: ICarouselData }) => {
  const getLabelClass = () => {
    let labels: string = `${style['page-right']}`
    if (active) {
      labels = `${style['page-center']} ${style['page-transition']}`
    }

    return labels
  }

  return (
    <div className={`${style['page-body']} ${getLabelClass()}`}>
      <img className={`${style['img-carousel']}`} src={dataPage.img} />
      <div className={`${style['container-body']}`}>
        <div className={`${style['message-button-container']}`}>
          <h3 className={`${style['h3-title']}`}>{dataPage.title} </h3>
          <br />
          <div className={`${style['hide-movile']}`}>
            {dataPage.subTitle.map((item, index) => {
              return (
                <Fragment key={index + index}>
                  <h1 className={`${style['h1-title']}`}>{item} </h1>
                </Fragment>
              )
            })}
          </div>
          <div className={`${style['show-movile']}`}>
            <h1 className={`${style['h1-title']}`}>{dataPage.subTitle.join(' ')} </h1>
          </div>
          <br />
          <br />
          <div className={`${style['hide-movile']}`}>
            {dataPage.description.map((item, index) => {
              return (
                <Fragment key={index + index}>
                  <p className={`${style['p-conctent']}`}>{item}</p>
                </Fragment>
              )
            })}
          </div>
          <div className={`${style['show-movile']}`}>
            <p className={`${style['p-conctent']}`}>{dataPage.description.join(' ')}</p>
          </div>
          <br />
          <br />
          <Button label={dataPage.buttonProps.label} onClick={dataPage.buttonProps.onClick} />
        </div>
      </div>
    </div>
  )
}

export default PageRight
