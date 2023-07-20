import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HomePage from "../containers/HomePage"
import ResumePage from "../containers/ResumePage"
import MainContent from "../containers/MainContent"
import ProjectsPage from "../containers/ProjectsPage"
import CertificationsPage from "../containers/CertificationsPage"
import ContactPage from "../containers/ContactPage"
export const PUBLIC_ROUTES = {
  HOME: "",
  RESUME: "resume",
  PROJECTS: "projects",
  CERTIFICATIONS: "certifications",
  CONTACT: "contact",
}
const MainRoutes = () => {
  const router = createBrowserRouter([
    {
      path: PUBLIC_ROUTES.HOME,
      element: <MainContent />,
      children: [
        {
          path: PUBLIC_ROUTES.HOME,
          element: <HomePage />,
        },
        {
          path: PUBLIC_ROUTES.RESUME,
          element: <ResumePage />,
        },
        //  TODO: Add pages
        // {
        //   path: PUBLIC_ROUTES.PROJECTS,
        //   element: <ProjectsPage />,
        // },
        // {
        //   path: PUBLIC_ROUTES.CERTIFICATIONS,
        //   element: <CertificationsPage />,
        // },
        {
          path: PUBLIC_ROUTES.CONTACT,
          element: <ContactPage />,
        },
      ],
    },
  ])
  return <RouterProvider router={router} />
}
export default MainRoutes
