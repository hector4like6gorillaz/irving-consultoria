import Banner from 'src/components/banner-pages/Banner'
import Request from 'src/components/landing-components/request-callback/Request'
import MenuInfoLeft from 'src/components/menu-info/MenuInfoLeft'
import MainLayout from 'src/HOC/MainLayout/MainLayout'

const OurServicesModule = () => {
  return (
    <MainLayout>
      <div>
        <Banner title='Our services' subtitle='We have over 20 years of experience' />
        <MenuInfoLeft />
        <Request />
      </div>
    </MainLayout>
  )
}

export default OurServicesModule
