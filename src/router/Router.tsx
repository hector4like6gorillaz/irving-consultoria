import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NormalRoute from './NormalRoute'
import LandingModule from 'src/pages/landing/LandingModule'
import AboutUsModule from 'src/pages/aboutUs/AboutUsModule'
import ContactUsModule from 'src/pages/contact-us/ContactUsModule'
import OurServicesModule from 'src/pages/our-services/OurServicesModule'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NormalRoute />}>
          <Route path='/' element={<LandingModule />} />
        </Route>
        <Route element={<NormalRoute />}>
          <Route path='/about-us' element={<AboutUsModule />} />
        </Route>
        <Route element={<NormalRoute />}>
          <Route path='/contact-us' element={<ContactUsModule />} />
        </Route>
        <Route element={<NormalRoute />}>
          <Route path='/our-services' element={<OurServicesModule />} />
        </Route>

        <Route path='*' element={<div> 404 </div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router


/*
@media (min-width: 0) and (max-width: 599px) {
}
@media (min-width: 600px) and (max-width: 1199px) {
}
@media (min-width: 1200px) and (max-width: 1919px) {
}
@media (min-width: 1920px) {
}

*/