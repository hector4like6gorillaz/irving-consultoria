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
          {secondary ? 'our solid background on finance' : 'QUIENES SOMOS'}{' '}
        </p>
        <br />
        <h3 className={`${style['h3-title']}`}>
          Conoce más sobre <span className={`${style['color-primary']}`}></span>
        </h3>
        <h3 className={`${style['h3-title']} ${style['color-primary']}`}>nuestra empresa</h3>
        <br />
        <br />
        <div className={`${style['hide-movile']}`}>
          <p className={`${style['p-content-bold']}`}>
            Somos una consultora especializada en la creación de páginas
          </p>
          <p className={`${style['p-content-bold']}`}>
            web y servicios de digitalización. Nuestro equipo está
          </p>
          <p className={`${style['p-content-bold']}`}>
            comprometido en ofrecer soluciones innovadoras y
          </p>
          <p className={`${style['p-content-bold']}`}>
            personalizadas para cada cliente. Nos enfocamos en transformar
          </p>
          <p className={`${style['p-content-bold']}`}>
            digitalmente tu negocio para llevarlo al siguiente nivel.
          </p>
          <br />
          <br />
          <p className={`${style['p-content-bold']}`}>
            Con años de experiencia en el sector, estamos aquí para
          </p>
          <p className={`${style['p-content-bold']}`}>
            asesorarte y brindarte las mejores estrategias digitales.
          </p>
        </div>
        <div className={`${style['show-movile']}`}>
          <p className={`${style['p-content-bold']} ${style["p-movile"]}`}>
            Somos una consultora especializada en la creación de páginas web y servicios de
            digitalización. Nuestro equipo está comprometido en ofrecer soluciones innovadoras y
            personalizadas para cada cliente. Nos enfocamos en transformar digitalmente tu negocio
            para llevarlo al siguiente nivel. Con años de experiencia en el sector, estamos aquí
            para asesorarte y brindarte las mejores estrategias digitales.
          </p>
        </div>
        <br />

        <br />
        <Button label='Leer Mas' />
      </div>
    </div>
  )
}

export default BoldInformation
