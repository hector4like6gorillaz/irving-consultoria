import ContactFooter from '../contact-form-footer/ContactFooter'
import PHover from '../p-hover/PHover'
import style from './footer.module.scss'

const Footer = () => {
  return (
    <div className={`${style['footer-container']}`}>
      <div className={`${style['head-footer-container']}`}>
        <div>
          <h1 className={`${style['h1-title']}`}>Finance Business</h1>
          <p className={`${style['p-footer']}`}>Vivamus tellus mi. Nulla ne cursus</p>
          <br />
          <p className={`${style['p-footer']}`}>elit, vulputate. Sed ne cursus augue sapien</p>
          <br />
          <p className={`${style['p-footer']}`}>vitae. augue hasellus lacinia sapien vitae.</p>
        </div>
        <div>
          <h1 className={`${style['h1-title']}`}>Useful Links</h1>
          <PHover>Vivamus ut tellus mi</PHover>
          <br />
          <PHover>Nulla nec cursus elit</PHover>
          <br />
          <PHover>Vulputate sed nec</PHover>
          <br />
          <PHover>Cursus augue hasellus</PHover>
          <br />
          <PHover>Lacinia ac sapien</PHover>
        </div>
        <div>
          <h1 className={`${style['h1-title']}`}>Additional Pages</h1>
          <PHover>About Us</PHover>
          <br />
          <PHover>How We Work</PHover>
          <br />
          <PHover>Quick Support</PHover>
          <br />
          <PHover>Contact Us</PHover>
          <br />
          <PHover>Privacy Policity</PHover>
        </div>
        <ContactFooter />
      </div>
      <div className={`${style['foot-footer-container']}`}>
        <p className={`${style['p-footer']}`}>
          Copyright © 2020 Financial Business Co., Ltd. - Design: TemplateMo
        </p>
      </div>
    </div>
  )
}

export default Footer
