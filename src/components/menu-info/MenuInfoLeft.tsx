import React, { Fragment, useState } from 'react'
import style from './menu.module.scss'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

import { menuLeft } from 'src/utilities/menu-utilities'

const MenuInfoLeft = () => {
  const [data, setData] = useState(menuLeft[0])
  return (
    <div className={`${style['container-menu-left']}`}>
      <div className={`${style['container-center-menu']}`}>
        <div className={`${style['container-options']}`}>
          {menuLeft.map((item, index) => {
            return (
              <Fragment key={item.menuTitle + index + item.menuTitle}>
                <div className={`${style['green-selected-menu']} `} onClick={() => setData(item)}>
                  <p
                    className={`${style['title-base']} ${data.id === item.id && style['selected']}`}
                  >
                    {item.menuTitle}{' '}
                  </p>
                  <ChevronRightIcon
                    className={`${style['icon-props']} ${data.id === item.id && style['selected']}`}
                  />
                </div>
              </Fragment>
            )
          })}
        </div>

        <div className={`${style['description-container']}`}>
          <div className={`${style['div-container-img']}`}>
            <img className={`${style['img-description']}`} src={data.img} />
          </div>
          <h3 className={`${style['h3-title']}`}>{data.menuTitle} </h3>
          {data.content.map((item, index) => {
            return (
              <Fragment key={item + index}>
                <p className={`${style['p-description']}`}>{item}</p>
              </Fragment>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default MenuInfoLeft
