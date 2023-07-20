import { Link, useNavigate } from "react-router-dom"
import { PUBLIC_ROUTES } from "../../router/MainRoutes"
import { BurgerIcon, CancelIcon } from "../Icons"
import { useState } from "react"

const Navbar = () => {
  const navigate = useNavigate()
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  const onNavigateToPage = (route: string) => {
    navigate(route)
    setSidebarIsOpen(false)
  }
  return (
    <header className="flex md:mb-4 ">
      <div className="w-2/6 m-4 md:m-0">
        <h1 className="text-2xl font-semibold text-stone-300">
          <Link to={PUBLIC_ROUTES.HOME}>
            Camilo <span className="text-teal-500">Sanchez</span>
          </Link>
        </h1>
      </div>

      <nav className="hidden w-4/6 md:flex justify-end">
        <ul className="flex">
          <li className="px-4 font-semibold text-gray-400 hover:text-teal-200">
            <Link to={PUBLIC_ROUTES.HOME}>Home</Link>
          </li>
          <li className="px-4 font-semibold text-gray-400 hover:text-teal-200">
            <Link to={PUBLIC_ROUTES.RESUME}>Resume</Link>
          </li>
          {/* TODO: add pages */}
          {/* <li className="px-4 font-semibold text-gray-400 hover:text-teal-200">
            <Link to={PUBLIC_ROUTES.PROJECTS}>Projects</Link>
          </li>
          <li className="px-4 font-semibold text-gray-400 hover:text-teal-200">
            <Link to={PUBLIC_ROUTES.CERTIFICATIONS}>Certifications</Link>
          </li> */}
          <li className="px-4 font-semibold text-gray-400 hover:text-teal-200">
            <Link to={PUBLIC_ROUTES.CONTACT}>Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="w-4/6 flex justify-end md:hidden">
        <button className="mx-4" onClick={() => setSidebarIsOpen(!sidebarIsOpen)}>
          <BurgerIcon className="stroke-gray-400" />
        </button>
      </div>
      {sidebarIsOpen && (
        <div className="shadow absolute bg-gray-700 w-full min-h-screen h-full opacity-80 md:hidden" />
      )}
      {sidebarIsOpen && (
        <div className="menu bg-gray-800 absolute w-1/2 min-h-screen h-full right-0 md:hidden">
          <div className="flex justify-end">
            <button onClick={() => setSidebarIsOpen(!sidebarIsOpen)}>
              <CancelIcon className="w-12 h-12 stroke-gray-400" />
            </button>
          </div>
          <ul className="flex flex-col my-4">
            <li className="px-4 font-semibold text-gray-400 hover:text-teal-200">
              <button
                onClick={() => onNavigateToPage(PUBLIC_ROUTES.HOME)}
                className="w-full block p-4 text-left"
              >
                Home
              </button>
            </li>
            <li className="px-4 font-semibold text-gray-400 hover:text-teal-200">
              <button
                onClick={() => onNavigateToPage(PUBLIC_ROUTES.RESUME)}
                className="w-full block p-4 text-left"
              >
                Resume
              </button>
            </li>
            {/* TODO: Add pages */}
            {/* <li className="px-4 font-semibold text-gray-400 hover:text-teal-200">
              <button
                onClick={() => onNavigateToPage(PUBLIC_ROUTES.PROJECTS)}
                className="w-full block p-4 text-left"
              >
                Projects
              </button>
            </li>
            <li className="px-4 font-semibold text-gray-400 hover:text-teal-200">
              <button
                onClick={() => onNavigateToPage(PUBLIC_ROUTES.CERTIFICATIONS)}
                className="w-full block p-4 text-left"
              >
                Certifications
              </button>
            </li> */}
            <li className="px-4 font-semibold text-gray-400 hover:text-teal-200">
              <button
                onClick={() => onNavigateToPage(PUBLIC_ROUTES.CONTACT)}
                className="w-full block p-4 text-left"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
export default Navbar
