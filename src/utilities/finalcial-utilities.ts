import { IcardFinancial } from 'src/interfaces/fiancial-interface'
import img1 from 'src/assets/landing/financial/service_01.jpg'
import img2 from 'src/assets/landing/financial/service_02.jpg'
import img3 from 'src/assets/landing/financial/service_03.jpg'

export const financialCards: IcardFinancial[] = [
  {
    title: 'Desarrollo Web',
    img: img1,
    content: [
      'Diseñamos y desarrollamos páginas web',
      'adaptadas a las necesidades de tu',
      'negocio, con un enfoque en la usabilidad',
      'y la experiencia del usuario.',
    ],
    buttonProps: {
      label: 'Leer Mas',
      onClick: () => null,
    },
  },
  {
    title: 'Estrategias Digitales',
    img: img2,
    content: [
      'Elaboramos estrategias digitales',
      'personalizadas para mejorar tu',
      'presencia online y alcanzar tus objetivos',
      'comerciales.',
    ],
    buttonProps: {
      label: 'Leer Mas',
      onClick: () => null,
    },
  },
  {
    title: 'Consultoría en\nDigitalización',
    img: img3,
    content: [
      'Ofrecemos asesoramiento experto para',
      'transformar digitalmente tu negocio y',
      'optimizar tus procesos.',
      '',
    ],
    buttonProps: {
      label: 'Leer Mas',
      onClick: () => null,
    },
  },
]
