import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Footer from 'src/components/footer/Footer'
import FloatingNav from 'src/components/nav-floating/FloatingNav'
import NavBar from 'src/components/NavBar/NavBar'

const MainLayout = ({
  children,
  showFooter = true,
}: {
  children?: JSX.Element
  showFooter?: boolean
}) => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <div>
      <NavBar />
      <FloatingNav />
      {children}
      {showFooter && <Footer />}
    </div>
  )
}

export default MainLayout
