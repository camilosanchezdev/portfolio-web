import Navbar from "../../components/Navbar"
import { Outlet } from "react-router-dom"

const MainContent = () => {
  return (
    <main className="w-full md:px-4 lg:w-2/3 2xl:w-1/2 relative">
      <Navbar />
      <div className="bg-white rounded-3xl m-4 md:m-0">{<Outlet />}</div>
    </main>
  )
}
export default MainContent
