import Banner from 'src/components/banner-pages/Banner'
import ContactCards from 'src/components/contact-cards/ContactCards'
import Request from 'src/components/landing-components/request-callback/Request'
import MainLayout from 'src/HOC/MainLayout/MainLayout'

const ContactUsModule = () => {
  return (
    <MainLayout>
      <div>
        <Banner title='Contact Us' subtitle='feel free to send us a message now!' />
        <ContactCards />
        <Request />
      </div>
    </MainLayout>
  )
}

export default ContactUsModule
