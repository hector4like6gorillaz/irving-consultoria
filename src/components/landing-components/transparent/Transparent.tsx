import Button from 'src/components/button/Button'
import style from './trans.module.scss'
import { Fragment } from 'react'

const Transparent = () => {
  const data = [
    {
      number: 945,
      title: 'Work Hours',
    },
    {
      number: 1280,
      title: 'Great Reviews',
    },
    {
      number: 578,
      title: 'Projects Done',
    },
    {
      number: 26,
      title: 'Awards Won',
    },
  ]
  return (
    <div className={`${style['transparent-container']}`}>
      <div className={`${style['container-left']}`}>
        <p className={`${style['p-title-small']}`}>Lorem ipsum dolor sit amet</p>
        <br />
        <h3 className={`${style['h3-title-trans']}`}>Our solutions for your</h3>
        <h3 className={`${style['h3-title-trans']} ${style['h3-title-trans-green']}`}>
          business growth
        </h3>
        <br />
        <br />
        <p className={`${style['p-content-trans']}`}>
          Pellentesque ultrices at turpis in vestibulum. Aenean pretium elit nec
        </p>
        <br />
        <p className={`${style['p-content-trans']}`}>
          congue elementum. Nulla luctus laoreet porta. Maecenas at nisi
        </p>
        <br />
        <p className={`${style['p-content-trans']}`}>tempus, porta metus vitae, faucibus augue.</p>
        <br />
        <p className={`${style['p-content-trans']}`}>
          Fusce et venenatis ex. Quisque varius, velit quis dictum sagittis, odio
        </p>
        <br />
        <p className={`${style['p-content-trans']}`}>
          velit molestie nunc, ut posuere ante tortor ut neque.
        </p>
        <br />
        <br />
        <br />
        <Button label='READ MORE' />
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
