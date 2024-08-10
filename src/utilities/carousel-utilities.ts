import { ICarouselData } from 'src/interfaces/carousel-interface'

import img1 from 'src/assets/landing/carousel/slide_01.jpg'
import img2 from 'src/assets/landing/carousel/slide_02.jpg'
import img3 from 'src/assets/landing/carousel/slide_03.jpg'

const contentCarousel: ICarouselData[] = [
  {
    img: img1,
    title: 'ESTAMOS LISTOS PARA DIGITALIZAR TU NEGOCIO',
    subTitle: ['CREACIÓN DE PÁGINAS WEB', '& DIGITALIZACIÓN'],
    description: [
      'Nuestra consultora ofrece soluciones personalizadas para la creación de',
      'páginas web y servicios de digitalización. Nos aseguramos de que tu',
      'negocio este presente en el mundo digital.',
    ],
    buttonProps: {
      label: 'Contact Us',
      onClick: () => null,
    },
  },

  {
    img: img2,
    title: 'TRANSFORMAMOS TU PRESENCIA ONLINE',
    subTitle: ['DESARROLLO WEB', '& ESTRATEGIAS DIGITALES'],
    description: [
      'Permitenos ayudarte a desarrollar una presencia web efectiva y',
      'estrategias digitales que impulsen tu negocio. Nuestro equipo está aquí',
      'paraguiarte en cada paso del proceso.',
    ],
    buttonProps: {
      label: 'OUR SERVICES',
      onClick: () => null,
    },
  },
  {
    img: img3,
    title: 'EXPERTOS EN SOLUCIONES DIGITALES',
    subTitle: ['CONSULTORÍA EN DIGITALIZACION', '& ANALISIS WEB'],
    description: [
      'Nuestro equipo ofrece análisis detallados y consultoría para mejorar tu',
      'presencia digital.',
    ],
    buttonProps: {
      label: 'LEARN MORE',
      onClick: () => null,
    },
  },
]

export { contentCarousel }
