import Filter from "../../components/Filter"
import Header from "../../components/Header"

const ProjectsPage = () => {
  return (
    <div className="pb-4">
      <Header title="Projects" />
      <section className="flex p-4 gap-4 items-center flex flex-col">
        <Filter />
        <div className="w-full flex flex-wrap p-2">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <article className="w-1/3 p-2 cursor-pointer relative group" key={item}>
              <img
                src="https://test.trabajotucuman.com/assets/img/projects/survey-maker/survey-maker-4.png"
                alt=""
              />
              <div className="group-hover:block hidden cover bg-teal-700 absolute w-2/3 p-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-80 text-white text-center font-semibold">
                Survey Maker
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProjectsPage
