import Card from "../../components/Card"
import Header from "../../components/Header"

const ResumePage = () => {
  return (
    <div className="pb-4">
      <Header title="Resume" />
      <section className="flex p-4 gap-4 items-center">
        <article className="w-1/2">
          <h3 className="text-2xl font-semibold mb-2">Education</h3>
          {[1, 2, 3].map((item) => (
            <Card key={item} />
          ))}
          <div className="w-full flex justify-center">
            <button className="border font-semibold p-2 rounded-lg bg-white hover:bg-teal-600 hover:text-white active:bg-teal-700 transition ease-100">
              See certificates & courses
            </button>
          </div>
        </article>
        <article className="w-1/2">
          <h3 className="text-2xl font-semibold mb-2">Experience</h3>
          {[1, 2, 3].map((item) => (
            <Card key={item} />
          ))}
          <div className="w-full flex justify-center">
            <button className="border font-semibold p-2 rounded-lg bg-white hover:bg-teal-600 hover:text-white active:bg-teal-700 transition ease-100">
              Download Resume
            </button>
          </div>
        </article>
      </section>
    </div>
  )
}

export default ResumePage
