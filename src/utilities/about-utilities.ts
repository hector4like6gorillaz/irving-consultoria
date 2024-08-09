import { IcardFinancial } from 'src/interfaces/fiancial-interface'
import img1 from 'src/assets/about-us/team_01.jpg'
import img2 from 'src/assets/about-us/team_02.jpg'
import img3 from 'src/assets/about-us/team_03.jpg'

export const aboutUsCards: IcardFinancial[] = [
  {
    title: 'William Smith',
    subTitle: 'Co-Founder',
    img: img1,
    content: [
      'In sem sem, dapibus non lacus auctor,',
      'ornare sollicitudin lacus. Aliquam ipsum',
      'urna, semper quis.',
    ],
  },
  {
    title: 'Mary Houston',
    subTitle: 'Chief Marketing Officer',
    img: img2,
    content: [
      'In sem sem, dapibus non lacus auctor,',
      'ornare sollicitudin lacus. Aliquam ipsum',
      'urna, semper quis.',
    ],
  },
  {
    title: 'Paul Walker',
    subTitle: 'Financial Analyst',
    img: img3,
    content: [
      'In sem sem, dapibus non lacus auctor,',
      'ornare sollicitudin lacus. Aliquam ipsum',
      'urna, semper quis.',
    ],
  },
]
