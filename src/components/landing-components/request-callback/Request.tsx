import style from './request.module.scss'
import Input from 'src/components/input/Input'
import Button from 'src/components/button/Button'

const Request = () => {
  return (
    <div className={`${style['div-container-form']}`}>
      <h3 className={`${style['h3-title']}`}>
        Solicita una <span className={`${style['h3-green']}`}>consulta</span>
      </h3>
      <br />
      <p className={`${style['p-form']}`}>Estamos aquí para ayudarte</p>
      <br />
      <br />
      <br />
      <div className={`${style['container-form']}`}>
        <div className={`${style['form-flex']}`}>
          <Input placeHolder='Full Name' theme='secondary' />
          <Input placeHolder='E-Mail Address' theme='secondary' />
          <Input placeHolder='Subject' theme='secondary' />
        </div>
        <Input inputDefault={false} placeHolder='Subject' theme='secondary' />
        <Button label='SEND MESSAGE' type='secondary' />
      </div>
      <div className={`${style['div-left-container']}`}>
        <p className={`${style['p-contact-us']}`}>
          Teléfono:
          <span className={`${style['p-span-number']}`}> +1 470 907 6083</span>
        </p>
        <p className={`${style['p-contact-us']}`}>
          Correo Electrónico:
          <span className={`${style['p-span-blue']}`}> marketing@idinnovations.xyz</span>
        </p>
      </div>
    </div>
  )
}

export default Request
