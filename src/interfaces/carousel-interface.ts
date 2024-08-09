export interface ICarouselData {
  img: string
  title: string
  subTitle: string[]
  description: string[]
  buttonProps: {
    label: string
    onClick: () => void
  }
}
