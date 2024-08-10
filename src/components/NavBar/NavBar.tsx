import style from './navbar.module.scss'
import { ClockIcon } from '@heroicons/react/24/outline'
import { PhoneIcon } from '@heroicons/react/24/solid'
import face from 'src/assets/social/face.webp'
import tik from 'src/assets/social/tik.png'
import insta from 'src/assets/social/inst.png'

const NavBar = () => {
  return (
    <div className={`${style['nav-container']}`}>
      <div className={`${style['container-icons-labels']}`}>
        <div className={`${style['container-word-icon']} ${style['border-left']}`}>
          <ClockIcon className={`${style['icon-props-base']}`} />
          <p className={`${style['p-title']}`}>Lun-Vie 09:00-17:00</p>
        </div>
        <div
          className={`${style['container-word-icon']} ${style['border-left']} ${style['border-right']}`}
        >
          <PhoneIcon className={`${style['icon-props-base']}`} />
          <p className={`${style['p-title']}`}>+1 470 907 6083</p>
        </div>
      </div>
      <div className={`${style['container-icons-labels']}`}>
        <a
          target='_blank'
          href='https://www.facebook.com/'
          className={`${style['container-word-icon']} ${style['cursor-pointer']} ${style['border-left']}`}
        >
          <img src={face} className={`${style['icon-props-base']} ${style['face-size']}`} />
        </a>
        <a
          target='_blank'
          href='https://www.tiktok.com/'
          className={`${style['container-word-icon']} ${style['cursor-pointer']} ${style['border-left']}`}
        >
          <img src={tik} className={`${style['icon-props-base']}`} />
        </a>
        <a
          target='_blank'
          href='https://www.instagram.com/'
          className={`${style['container-word-icon']} ${style['cursor-pointer']} ${style['border-left']} ${style['border-right']}`}
        >
          <img src={insta} className={`${style['icon-props-base']}`} />
        </a>
      </div>
    </div>
  )
}

export default NavBar
