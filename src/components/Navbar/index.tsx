import { Link } from "react-router-dom"
import { PUBLIC_ROUTES } from "../../router/MainRoutes"

const Navbar = () => {
  return (
    <header className="flex mb-4">
      <div className="w-2/6">
        <h1 className="text-2xl font-semibold text-stone-300">
          <Link to={PUBLIC_ROUTES.HOME}>
            Camilo <span className="text-teal-500">Sanchez</span>
          </Link>
        </h1>
      </div>
      <nav className="w-4/6 flex justify-end ">
        <ul className="flex">
          <li className="px-4 font-semibold text-gray-400 hover:text-teal-200">
            <Link to={PUBLIC_ROUTES.HOME}>Home</Link>
          </li>
          <li className="px-4 font-semibold text-gray-400 hover:text-teal-200">
            <Link to={PUBLIC_ROUTES.RESUME}>Resume</Link>
          </li>
          <li className="px-4 font-semibold text-gray-400 hover:text-teal-200">
            <Link to={PUBLIC_ROUTES.PROJECTS}>Projects</Link>
          </li>
          <li className="px-4 font-semibold text-gray-400 hover:text-teal-200">
            <Link to={PUBLIC_ROUTES.CERTIFICATIONS}>Certifications</Link>
          </li>
          <li className="px-4 font-semibold text-gray-400 hover:text-teal-200">
            <Link to={PUBLIC_ROUTES.CONTACT}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Navbar
