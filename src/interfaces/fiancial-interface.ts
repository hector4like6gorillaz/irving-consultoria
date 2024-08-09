export interface IcardFinancial {
  title: string
  subTitle?: string
  img: string
  content: string[]
  buttonProps?: {
    label: string
    onClick: () => void
  }
}
