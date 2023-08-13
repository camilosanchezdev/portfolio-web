import { useState } from "react"
import Filter from "../../components/Filter"
import Header from "../../components/Header"
import projectsData from "../../data/projects.json"
import ProjectDetailModal from "../../components/ProjectDetailModal"

const ProjectsPage = () => {
  const [openDetail, setOpenDetail] = useState(false)
  const [projectSelected, setProjectSelected] = useState<any>()
  const handleOpenDetail = (projectId: number) => {
    const project = projectsData.find((item) => item.id === projectId)
    if (project) setProjectSelected(project)
    setOpenDetail(true)
  }

  return (
    <div className="pb-4">
      <Header title="Projects" />
      <section className="flex p-4 gap-4 items-center flex flex-col">
        <Filter />
        <div className="w-full flex flex-wrap p-2">
          {projectsData.map((item) => (
            <button
              className="w-1/3 p-2 cursor-pointer relative group"
              key={item.id}
              onClick={() => handleOpenDetail(item.id)}
            >
              <img src={item.main_screenshot} alt={item.title} />
              <div className="group-hover:block hidden cover bg-teal-700 absolute w-2/3 p-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-80 text-white text-center font-semibold">
                {item.title}
              </div>
            </button>
          ))}
        </div>
      </section>
      <ProjectDetailModal
        projectSelected={projectSelected}
        visible={openDetail}
        closeDialog={() => setOpenDetail(false)}
      />
    </div>
  )
}

export default ProjectsPage
