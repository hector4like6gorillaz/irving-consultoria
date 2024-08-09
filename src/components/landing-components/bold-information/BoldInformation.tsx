import style from './bold.module.scss'
import Button from 'src/components/button/Button'
import bold from 'src/assets/landing/more-info.jpg'
import about from 'src/assets/landing/about-image.jpg'

const BoldInformation = ({ secondary = false }: { secondary?: boolean }) => {
  return (
    <div className={`${style['container-bold-men']} ${secondary && style['flex-inverted']}`}>
      <div className={`${style['container-picture']}`}>
        <img className={`${style['img-bold']}`} src={secondary ? about : bold} />
      </div>
      <div className={`${style['container-data']}`}>
        <p className={`${style['p-mini-title']}`}>
          {secondary ? 'our solid background on finance' : 'Who we are'}{' '}
        </p>
        <br />
        <h3 className={`${style['h3-title']}`}>
          Get to know about <span className={`${style['color-primary']}`}>our</span>
        </h3>
        <h3 className={`${style['h3-title']} ${style['color-primary']}`}>company</h3>
        <br />
        <br />
        <p className={`${style['p-content-bold']}`}>
          Curabitur pulvinar sem a leo tempus facilisis. Sed non sagittis
        </p>
        <p className={`${style['p-content-bold']}`}>
          neque. Nulla conse quat tellus nibh, id molestie felis sagittis ut.
        </p>
        <p className={`${style['p-content-bold']}`}>Nam ullamcorper tempus ipsum in cursus</p>
        <br />
        <br />
        <p className={`${style['p-content-bold']}`}>
          Praes end at dictum metus. Morbi id hendrerit lectus, nec dapibus
        </p>
        <p className={`${style['p-content-bold']}`}>
          ex. Etiam ipsum quam, luctus eu egestas eget, tincidunt
        </p>
        <br />

        <br />
        <Button label='READ MORE' />
      </div>
    </div>
  )
}

export default BoldInformation
