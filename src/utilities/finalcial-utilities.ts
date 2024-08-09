import { IcardFinancial } from 'src/interfaces/fiancial-interface'
import img1 from 'src/assets/landing/financial/service_01.jpg'
import img2 from 'src/assets/landing/financial/service_02.jpg'
import img3 from 'src/assets/landing/financial/service_03.jpg'

export const financialCards: IcardFinancial[] = [
  {
    title: 'Digital Currency',
    img: img1,
    content: [
      'Sed tincidunt dictum lobortis. Aenean',
      'tempus diam vel augue luctus dignissim.',
      'Nunc ornare leo tortor.',
    ],
    buttonProps: {
      label: 'Read More',
      onClick: () => null,
    },
  },
  {
    title: 'Market Analysis',
    img: img2,
    content: [
      'Sed tincidunt dictum lobortis. Aenean',
      'tempus diam vel augue luctus dignissim.',
      'Nunc ornare leo tortor.',
    ],
    buttonProps: {
      label: 'Read More',
      onClick: () => null,
    },
  },
  {
    title: 'Historical Data',
    img: img3,
    content: [
      'Sed tincidunt dictum lobortis. Aenean',
      'tempus diam vel augue luctus dignissim.',
      'Nunc ornare leo tortor.',
    ],
    buttonProps: {
      label: 'Read More',
      onClick: () => null,
    },
  },
]
