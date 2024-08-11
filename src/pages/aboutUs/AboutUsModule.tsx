import Banner from 'src/components/banner-pages/Banner'
import BoldInformation from 'src/components/landing-components/bold-information/BoldInformation'
import FInancialServices from 'src/components/landing-components/financial-services/FInancialServices'
import Transparent from 'src/components/landing-components/transparent/Transparent'
import MainLayout from 'src/HOC/MainLayout/MainLayout'
import { aboutUsCards } from 'src/utilities/about-utilities'

const AboutUsModule = () => {
  return (
    <MainLayout>
      <div>
        <Banner title='About Us' subtitle='We have over 20 years of experience' />
        <BoldInformation secondary />
        <FInancialServices
          cards={aboutUsCards}
          title='Our team'
          titleGreen='members'
          subtitle='Suspendisse a ante in neque iaculis lacinia'
        />
        <Transparent />
        {/*
        <ClientsSays />
         */}
      </div>
    </MainLayout>
  )
}

export default AboutUsModule
