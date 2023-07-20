import Card from "../../components/Card"
import Header from "../../components/Header"
import educationData from "../../data/education.json"
import experienceData from "../../data/experience.json"
import { ICardItem } from "../../utils/interfaces/card-item.model"

const ResumePage = () => {
  const handleOpenLinkedIn = () => {
    window.open("https://www.linkedin.com/in/camilo-sanchez-21050b109/", "_blank")
  }
  return (
    <div className="pb-4">
      <Header title="Resume" />
      <section className="flex p-4 gap-4 flex-col md:flex-row">
        <article className="w-full md:w-1/2 flex flex-col justify-between">
          <div className="cards">
            <h3 className="text-2xl font-semibold mb-2">Education</h3>
            {JSON.parse(JSON.stringify(educationData)).map((item: ICardItem) => (
              <Card
                key={item.id}
                title={item.title}
                startDate={item.startDate}
                endDate={item.endDate}
                institution={item.institution}
                description={item.description}
              />
            ))}
          </div>

          <div className="w-full flex justify-center">
            <button
              className="border font-semibold p-2 rounded-lg bg-white hover:bg-teal-600 hover:text-white active:bg-teal-700 transition ease-100"
              onClick={() => handleOpenLinkedIn()}
            >
              LinkedIn Profile
            </button>
          </div>
        </article>
        <article className="w-full md:w-1/2">
          <h3 className="text-2xl font-semibold mb-2">Experience</h3>
          {JSON.parse(JSON.stringify(experienceData)).map((item: ICardItem) => (
            <Card
              key={item.id}
              title={item.title}
              startDate={item.startDate}
              endDate={item.endDate}
              institution={item.institution}
              description={item.description}
            />
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
