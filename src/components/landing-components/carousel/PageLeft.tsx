import { Fragment } from 'react'
import style from './page.module.scss'
import Button from 'src/components/button/Button'
import { ICarouselData } from 'src/interfaces/carousel-interface'

const PageLeft = ({ active, dataPage }: { active: boolean; dataPage: ICarouselData }) => {
  const getLabelClass = () => {
    let labels: string = `${style['page-left']}`
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
          {dataPage.subTitle.map((item, index) => {
            return (
              <Fragment key={index + index}>
                <h1 className={`${style['h1-title']}`}>{item} </h1>
              </Fragment>
            )
          })}
          <br />
          <br />
          {dataPage.description.map((item, index) => {
            return (
              <Fragment key={index + index}>
                <p className={`${style['p-conctent']}`}>{item}</p>
              </Fragment>
            )
          })}
          <br />
          <br />
          <Button label={dataPage.buttonProps.label} onClick={dataPage.buttonProps.onClick} />
        </div>
      </div>
    </div>
  )
}

export default PageLeft
