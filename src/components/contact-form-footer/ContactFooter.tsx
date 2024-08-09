import { useState } from 'react'
import Input from '../input/Input'
import style from './contact.module.scss'
import Button from '../button/Button'

const ContactFooter = () => {
  const [form, setform] = useState({
    name: '',
    email: '',
    messagge: '',
  })

  return (
    <div className={`${style['container-footer-form']}`}>
      <h1 className={`${style['h1-title']}`}>Contact Us</h1>

      <Input
        placeHolder='Full Name'
        value={form.name}
        onChange={(w) => setform({ ...form, name: w })}
      />
      <Input
        placeHolder='E-Mail Address'
        value={form.email}
        onChange={(w) => setform({ ...form, email: w })}
        type='email'
      />
      <Input
        inputDefault={false}
        placeHolder='Your Messagge'
        value={form.messagge}
        onChange={(w) => setform({ ...form, messagge: w })}
      />
      <Button label='Send Messagge'/>
    </div>
  )
}

export default ContactFooter
