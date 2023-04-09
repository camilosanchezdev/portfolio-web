import Header from "../../components/Header"

const HomePage = () => {
  return (
    <div className="min-h-full">
      <Header title="Camilo Sanchez" subtitle="Full Stack Developer" />
      <section className="flex p-4 h-80 items-center">
        <article className="w-1/2">
          <h3 className="text-2xl font-semibold">
            About <span className="text-teal-500">Me</span>
          </h3>
          <p className="text-lg mb-2">
            Hello! I’m Camilo Sanchez. I’m a full stack developer with a deep passion for Web
            Development. I mostly enjoy working with Angular 2, HTML5, CSS3, NodeJS and ASP .NET
            Core.
          </p>
          <div className="w-full flex justify-center">
            <button className="bg-teal-500 text-white p-2 rounded-lg hover:bg-teal-700 active:bg-teal-800 transition ease-100">
              Download resume
            </button>
          </div>
        </article>
        <aside className="w-1/2">
          <table className=" border-separate border-spacing-x-4">
            <tbody>
              <tr>
                <td className="font-semibold border-spacing-x-4">Age</td>
                <td>29</td>
              </tr>
              <tr>
                <td className="font-semibold">Residence</td>
                <td>Argentina</td>
              </tr>
              <tr>
                <td className="font-semibold">Email</td>
                <td>camilosanchezdev@gmail.com</td>
              </tr>
              <tr>
                <td className="font-semibold ">Technologies</td>
                <td>Angular, React, .NET Core, NodeJs, GIT, Agile Methodologies</td>
              </tr>
            </tbody>
          </table>
        </aside>
      </section>
    </div>
  )
}
export default HomePage
