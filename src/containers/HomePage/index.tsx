import Header from "../../components/Header"

const HomePage = () => {
  return (
    <div className="min-h-full">
      <Header title="Camilo Sanchez" subtitle="Full Stack Developer" />
      <section className="flex min-h-80 items-center flex-col lg:flex-row pt-4 pb-8">
        <article className="w-full p-4 lg:w-2/3 flex flex-col">
          <h3 className="text-2xl font-semibold mb-2">
            About <span className="text-teal-500">Me</span>
          </h3>
          <p className="mb-4">
            Hello! I’m Camilo Sanchez. I’m a full stack developer with a deep passion for Web
            Development. I mostly enjoy working with React, Angular, HTML5, CSS3, NodeJS and ASP
            .NET Core.
          </p>
          <div className="w-full flex justify-center">
            <button className="bg-teal-500 text-white p-2 rounded-lg hover:bg-teal-700 active:bg-teal-800 transition ease-100">
              Download resume
            </button>
          </div>
        </article>
        <aside className="w-full p-4 lg:w-2/3">
          <div className="grid border-separate border-spacing-x-4 grid-cols-12 gap-4">
            <div className="col-span-4 flex items-center">
              <span className="font-semibold border-spacing-x-4">Age</span>
            </div>
            <div className="col-span-8">
              <span>29</span>
            </div>
            <div className="col-span-4 flex items-center">
              <span className="font-semibold border-spacing-x-4">Residence</span>
            </div>

            <div className="col-span-8">
              <span>Buenos Aires, Argentina</span>
            </div>
            <div className="col-span-4 flex items-center">
              <span className="font-semibold border-spacing-x-4">Email</span>
            </div>
            <div className="col-span-8 truncate">
              <span>camilosanchezdev@gmail.com</span>
            </div>
            <div className="col-span-4 flex items-center">
              <span className="font-semibold border-spacing-x-4">Technologies</span>
            </div>
            <div className="col-span-8">
              <span>Angular, React, .NET Core, NodeJs, GIT, Agile Methodologies</span>
            </div>
          </div>
        </aside>
      </section>
    </div>
  )
}
export default HomePage
