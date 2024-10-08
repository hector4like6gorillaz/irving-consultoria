import { Fragment, useEffect, useState } from 'react'
import style from './flotating.module.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import { Bars4Icon } from '@heroicons/react/24/outline'

const FloatingNav = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [scrollPosition, setScrollPosition] = useState(0)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)
  const [showMenuBurguer, setshowMenuBurguer] = useState(false)
  const directions = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'Acerca de nosotros',
      url: '/about-us',
    },
    {
      title: 'Servicios',
      url: '/our-services',
    },
    {
      title: 'Contacto',
      url: '/contact-us',
    },
  ]
  const handleScroll = () => {
    setScrollPosition(window.scrollY)
  }

  const handleResize = () => {
    setWindowHeight(window.innerHeight)
  }

  const getLabelClass = (who: 'title' | 'p' | 'div') => {
    let labelClas: string = ''
    let percent: number = scrollPosition / windowHeight
    const getQuestions = () => {
      let val = false
      if (pathname === '/') {
        if (percent * 100 >= 80) val = true
      } else {
        if (percent * 100 >= 8) val = true
      }
      return val
    }
    switch (who) {
      case 'title':
        if (getQuestions()) labelClas = `${style['h2-label-mod']}`
        break
      case 'p':
        if (getQuestions()) labelClas = `${style['p-label-base-mod']}`
        break
      case 'div':
        if (getQuestions()) labelClas = `${style['div-other-properties']}`
        break
      default:
        break
    }
    return labelClas
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Fragment>
      <div className={`${style['floatin-div-navbar']} ${getLabelClass('div')}`}>
        <div className={`${style['content-menu-floating']}`}>
          <h2 className={`${style['h2-label']} ${getLabelClass('title')}`}>ID Innovations</h2>
          <div className={`${style['div-container-menu']}`}>
            {directions.map((item, index) => {
              return (
                <Fragment key={item.title + item.url + index}>
                  <p
                    onClick={() => navigate(item.url)}
                    className={`${style['p-label-base']} ${
                      pathname === item.url && style['p-selected']
                    } ${getLabelClass('p')}`}
                  >
                    {item.title}{' '}
                  </p>
                </Fragment>
              )
            })}
          </div>
          <div className={`${style['burger-menu']}`}>
            <Bars4Icon
              className={`${style['icon-menu']}`}
              onClick={() => setshowMenuBurguer(!showMenuBurguer)}
            />
          </div>
        </div>
        {showMenuBurguer && (
          <div className={`${style['div-menu-show-movile']}`}>
            {directions.map((item, index) => {
              return (
                <Fragment key={item.title + item.url + index}>
                  <p
                    onClick={() => navigate(item.url)}
                    className={`${style['p-label-base']} ${
                      pathname === item.url && style['p-selected']
                    } ${getLabelClass('p')}`}
                  >
                    {item.title}{' '}
                  </p>
                </Fragment>
              )
            })}
          </div>
        )}
      </div>
    </Fragment>
  )
}

export default FloatingNav
