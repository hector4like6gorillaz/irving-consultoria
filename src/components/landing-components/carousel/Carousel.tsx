import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import style from './carousel.module.scss'

import PageCenter from './PageCenter'
import PageLeft from './PageLeft'
import PageRight from './PageRight'

import { useEffect, useState } from 'react'
import { ICarouselData } from 'src/interfaces/carousel-interface'

const Carousel = ({ data, automatic = false }: { data: ICarouselData[]; automatic?: boolean }) => {
  const [left, setleft] = useState(false)
  const [right, setright] = useState(false)
  const [dataCenter, setdataCenter] = useState<ICarouselData | null>(null)
  const [dataLeft, setdataLeft] = useState<ICarouselData | null>(null)
  const [dataRight, setdataRight] = useState<ICarouselData | null>(null)
  const [position, setposition] = useState(0)

  const maxLengt: number = data.length

  const pressLeft = () => {
    positionMod('l')
    setleft(true)
  }

  const pressRight = () => {
    positionMod('r')
    setright(true)
  }

  const disable = () => {
    let disable = false
    if (left) disable = true
    else if (right) disable = true
    return disable
  }

  const positionMod = (who: 'l' | 'r') => {
    if (who === 'l') {
      if (position + 1 < maxLengt) setposition(position + 1)
      else setposition(0)
    } else if (who === 'r') {
      if (position - 1 >= 0) setposition(position - 1)
      else setposition(maxLengt - 1)
    }
  }

  const setInfoPage = () => {
    if (position + 1 < maxLengt) setdataRight(data[position + 1])
    else setdataRight(data[0])

    setdataCenter(data[position])

    if (position - 1 >= 0) setdataLeft(data[position - 1])
    else setdataLeft(data[maxLengt - 1])
  }

  const init = () => {
    if (maxLengt !== 0) {
      setdataCenter(data[0])
      setdataLeft(data[maxLengt - 1])
      if (maxLengt > 1) setdataRight(data[1])
      else setdataRight(data[0])
    }
  }

  useEffect(() => {
    init()
  }, [data])

  useEffect(() => {
    if (left || right) {
      const timer = setTimeout(() => {
        setInfoPage()
        if (left) setleft(false)
        if (right) setright(false)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [left, right])

  return (
    <div className={`${style['carousel-container']}`}>
      {dataLeft !== null && <PageLeft active={right} dataPage={dataLeft} />}
      {dataCenter !== null && <PageCenter left={left} right={right} dataPage={dataCenter} />}
      {dataRight !== null && <PageRight active={left} dataPage={dataRight} />}

      <div className={`${style['container-arrow-base']} ${style['padding-left']}`}>
        <button className={`${style['button-chevron']}`} disabled={disable()} onClick={pressLeft}>
          <ChevronLeftIcon className={`${style['icon-size']}`} />
        </button>
      </div>
      <div className={`${style['container-arrow-base']} ${style['padding-right']}`}>
        <button className={`${style['button-chevron']}`} disabled={disable()} onClick={pressRight}>
          <ChevronRightIcon className={`${style['icon-size']}`} />
        </button>
      </div>
    </div>
  )
}

export default Carousel
