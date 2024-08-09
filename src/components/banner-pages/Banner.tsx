import style from './baner.module.scss'
import img from 'src/assets/banner.jpg'

const Banner = ({
  banner = img,
  title = 'vacio',
  subtitle = 'vacio',
}: {
  banner?: string
  title?: string
  subtitle?: string
}) => {
  return (
    <div className={`${style['banner-container']}`}>
      <img className={`${style['img-only']}`} src={banner} />
      <div className={`${style['container-content']}`}>
        <br />
        <br />
        <h3 className={`${style['h3-title']}`}>{title} </h3>
        <br />
        <p className={`${style['p-subtitle']}`}>{subtitle}</p>
      </div>
    </div>
  )
}

export default Banner
