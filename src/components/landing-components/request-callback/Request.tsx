import style from './request.module.scss'
import Input from 'src/components/input/Input'
import Button from 'src/components/button/Button'

const Request = () => {
  return (
    <div className={`${style['div-container-form']}`}>
      <h3 className={`${style['h3-title']}`}>
        Request a <span className={`${style['h3-green']}`}>call back</span>
      </h3>
      <br />
      <p className={`${style['p-form']}`}>Etiam suscipit ante a odio consequat</p>
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
    </div>
  )
}

export default Request
