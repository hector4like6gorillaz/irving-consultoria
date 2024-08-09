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
