import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

const Layout = () => {
  return (
    <div className="container-box">
    <header className="py-[20px]">
      <nav className="mb-[20px]">
        <Navbar />
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
  )
}

export default Layout