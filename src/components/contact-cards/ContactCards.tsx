import style from './contact.module.scss'
import CardMini from '../card-mini/CardMini'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { Fragment } from 'react'

const ContactCards = () => {
  const cards = [
    {
      Icon: PhoneIcon,
      title: 'Phone',
      description: [
        'Vivamus ut tellus mi. Nulla nec cursus elit,',
        'id vulputate nec cursus augue.',
      ],
      greenTitle: '090-080-0760',
    },
    {
      Icon: EnvelopeIcon,
      title: 'Email',
      description: [
        'Vivamus ut tellus mi. Nulla nec cursus elit,',
        'id vulputate nec cursus augue.',
      ],
      greenTitle: 'info@company.com',
    },
  ]
  return (
    <div className={`${style['container-contact']}`}>
      {cards.map((item, indez) => {
        return (
          <Fragment key={item.greenTitle + item.title + indez}>
            <CardMini
              Icon={item.Icon}
              title={item.title}
              description={item.description}
              greenTitle={item.greenTitle}
            />
          </Fragment>
        )
      })}
    </div>
  )
}

export default ContactCards
