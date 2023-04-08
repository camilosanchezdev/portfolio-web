import Navbar from "../../components/Navbar"
import { Outlet } from "react-router-dom"

const MainContent = () => {
  return (
    <main className="w-1/2">
      <Navbar />
      <div className="bg-white min-h-full rounded-2xl">{<Outlet />}</div>
    </main>
  )
}
export default MainContent
