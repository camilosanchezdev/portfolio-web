import Navbar from "../../components/Navbar"
import { Outlet } from "react-router-dom"

const MainContent = () => {
  return (
    <main className="w-1/2">
      <Navbar />
      <div className="bg-white rounded-3xl">{<Outlet />}</div>
    </main>
  )
}
export default MainContent
