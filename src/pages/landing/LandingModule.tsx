import React from 'react'
import MainLayout from 'src/HOC/MainLayout/MainLayout'
import style from './landing.module.scss'
import img from 'src/assets/landing/group.webp'
import Carousel from 'src/components/landing-components/carousel/Carousel'
import { contentCarousel } from 'src/utilities/carousel-utilities'
import Button from 'src/components/button/Button'
import { financialCards } from 'src/utilities/finalcial-utilities'
import FInancialServices from 'src/components/landing-components/financial-services/FInancialServices'
import Transparent from 'src/components/landing-components/transparent/Transparent'
import BoldInformation from 'src/components/landing-components/bold-information/BoldInformation'

import Request from 'src/components/landing-components/request-callback/Request'

const LandingModule = () => {
  return (
    <MainLayout>
      <div className={`${style['container-landing']}`}>
        <div className={`${style['fixed-img']}`}>
          <img className={`${style['img-background']}`} src={img} />
        </div>
        <div className={`${style['big-img-div']}`}>
          <Carousel data={contentCarousel} />
        </div>

        <div className={`${style['green-bell']}`}>
          <div className={`${style['container-words']}`}>
            <h3 className={`${style['h3-label']}`}>¿Necesitas una consulta ahora?</h3>
            <br />
            <p className={`${style['p-label']}`}>
              Nuestro equipo está listo para ayudarte a digitalizar tu negocio y crear tu página
              web.
            </p>
          </div>
          <Button type='secondary' label='Contact us' />
        </div>
        <Transparent />
        <FInancialServices cards={financialCards} />
        <BoldInformation />
        <Request />
        {/*       
        <ClientsSays />
         */}
      </div>
    </MainLayout>
  )
}

export default React.memo(LandingModule)
