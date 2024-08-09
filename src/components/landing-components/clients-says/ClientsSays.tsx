import React, { Fragment } from 'react'
import style from './client.module.scss'
import client from 'src/assets/landing/client.jpeg'

const ClientsSays = () => {
  return (
    <div className={`${style['what-they-say']}`}>
      <h2 className={`${style['title-h2']}`}>
        What they say <span className={`${style['color-primary']}`}>about us</span>
      </h2>
      <br />
      <p className={`${style['subtitle-p']}`}>TESTIMONIAL FROM OUR GREATEST CLIENTS</p>
      <br />
      <br />
      <br />
      <div className={`${style['cards-container-slider']}`}>
        {[1, 2].map((item, index) => {
          return (
            <Fragment key={item + index}>
              <div className={`${style['container-cards']}`}>
                <div className={`${style['mini-card-container']}`}>
                  <p className={`${style['p-card-title']}`}>Irving Gonzales</p>
                  <br />
                  <p className={`${style['p-card-subtitle']}`}>Chief Accountant</p>
                  <br />
                  <p className={`${style['p-content-card']}`}>
                    "Ut ultricies maximus turpis, in sollicitudin ligula posuere vel. Donec
                  </p>
                  <p className={`${style['p-content-card']}`}>
                    ut ultricies maximus turpis, in sollicitudin ligula fde
                  </p>
                  <p className={`${style['p-content-card']}`}>me gustan los tacos, viva mexico!"</p>
                </div>
                <div className={`${style['img-worker-container']}`}>
                  <img className={`${style['img-worker']}`} src={client} />
                </div>
              </div>
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default ClientsSays
