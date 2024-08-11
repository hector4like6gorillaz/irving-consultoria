import Button from 'src/components/button/Button'
import style from './trans.module.scss'
import { Fragment } from 'react'

const Transparent = () => {
  const data = [
    {
      number: 160,
      title: 'Work Hours',
    },

    {
      number: 14,
      title: 'Projects Done',
    },
  ]
  return (
    <div className={`${style['transparent-container']}`}>
      <div className={`${style['container-left']}`}>
        <p className={`${style['p-title-small']}`}>TRANSFORMA TU NEGOCIO</p>
        <br />
        <div className={`${style['hide-movile']}`}>
          <h3 className={`${style['h3-title-trans']}`}>Nuestras soluciones para el</h3>
          <h3 className={`${style['h3-title-trans']} ${style['h3-title-trans-green']}`}>
            crecimiento de tu negocio
          </h3>
        </div>
        <div className={`${style['show-movile']}`}>
          <h3 className={`${style['h3-title-trans']}`}>
            Nuestras soluciones para el{' '}
            <span className={`${style['h3-title-trans-green']}`}>crecimiento de tu negocio</span>{' '}
          </h3>
        </div>
        <br />
        <br />
        <div className={`${style['hide-movile']}`}>
          <p className={`${style['p-content-trans']}`}>
            Nuestros servicios de digitalización y desarrollo web están diseñados
          </p>
          <br />
          <p className={`${style['p-content-trans']}`}>
            para impulsar tu negocio en el mundo digital. Con nuestra experiencia
          </p>
          <br />
          <p className={`${style['p-content-trans']}`}>
            y conocimientos, llevaremos tu presencia online al siguiente nivel.
          </p>
        </div>
        <div className={`${style['show-movile']}`}>
          <p className={`${style['p-content-trans']}`}>
            Nuestros servicios de digitalización y desarrollo web están diseñados para impulsar tu
            negocio en el mundo digital. Con nuestra experiencia y conocimientos, llevaremos tu
            presencia online al siguiente nivel.
          </p>
        </div>

        <br />
        <br />
        <br />
        <Button label='Leer Mas' />
      </div>
      <div className={`${style['container-right']}`}>
        {data.map((item, index) => {
          return (
            <Fragment key={index + item.title}>
              <div className={`${style['mini-card']}`}>
                <h1 className={`${style['h1-mini-card']}`}>{item.number}</h1>
                <br />
                <p className={`${style['p-mini-card']}`}>{item.title} </p>
              </div>
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default Transparent
