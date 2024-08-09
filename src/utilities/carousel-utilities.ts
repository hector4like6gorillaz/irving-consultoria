import { ICarouselData } from 'src/interfaces/carousel-interface'

import img1 from 'src/assets/landing/carousel/slide_01.jpg'
import img2 from 'src/assets/landing/carousel/slide_02.jpg'
import img3 from 'src/assets/landing/carousel/slide_03.jpg'

const contentCarousel: ICarouselData[] = [
  {
    img: img1,
    title: 'WE ARE READY TO HELP YOU',
    subTitle: ['FINANCIAL ANALYSIS', '& CONSULTING'],
    description: [
      'This finance HTML template is 100% free of charge provided by TemplateMo',
      'for everyone. This is a multiple-page version with different HTML pages.',
      'One-page version is available as of 2021',
    ],
    buttonProps: {
      label: 'Contact Us',
      onClick: () => null,
    },
  },

  {
    img: img2,
    title: 'WE ARE HERE TO SUPPORT YOU',
    subTitle: ['ACCOUNTING', '& MANAGEMENT'],
    description: [
      'You are allowed to use this template for your company websites. You are',
      'NOT allowed to re-distribute this template ZIP file on any template',
      'download website. Please contact TemplateMo for more detail.',
    ],
    buttonProps: {
      label: 'OUR SERVICES',
      onClick: () => null,
    },
  },
  {
    img: img3,
    title: 'WE HAVE A SOLID BACKGROUND',
    subTitle: ['MARKET ANALYSIS', '& STATISTICS'],
    description: [
      'You can download, edit and use this layout for your business website.',
      'Phasellus lacinia ac sapien vitae dapibus. Mauris ut dapibus velit cras',
      'interdum nisi ac urna tempor mollis.',
    ],
    buttonProps: {
      label: 'LEARN MORE',
      onClick: () => null,
    },
  },
]

export { contentCarousel }
