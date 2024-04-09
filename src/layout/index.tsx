import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar"

const Layout = () => {
  return (
    <>
    <header className="py-[20px]">
      <nav className="mb-[20px]">
        <Navbar />
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
  </>
  )
}

export default Layout