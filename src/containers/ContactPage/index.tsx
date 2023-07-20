import { useForm } from "react-hook-form"
import Header from "../../components/Header"
import { EnvelopeIcon, GithubIcon, LinkedinIcon } from "../../components/Icons"

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const handleOpenLinkedIn = () => {
    window.open("https://www.linkedin.com/in/camilo-sanchez-21050b109/", "_blank")
  }
  const handleOpenMail = () => {
    window.open("mailto:camilosanchezdev@gmail.com")
  }
  const handleOpenGithub = () => {
    window.open("https://github.com/camilosanchezdev", "_blank")
  }
  return (
    <div className="">
      <Header title="Contact" />
      <section className="flex flex-col md:flex-row p-4 gap-4">
        <article className="w-full md:w-1/2">
          <h3 className="text-2xl font-semibold mb-2 text-gray-600">
            Get in <span className="text-teal-600">Form</span>
          </h3>
          <p>You can find me in my social media accounts.</p>
          <div className="w-full flex flex-col gap-4 justify-center mt-4">
            <button
              className="group h-24 w-full border font-semibold rounded-lg bg-white hover:text-teal-600 transition ease-100 flex items-center"
              onClick={handleOpenLinkedIn}
            >
              <div className="w-1/6 flex justify-center">
                <LinkedinIcon className="w-12 h-12 group-hover:fill-teal-600 ml-4" />
              </div>
              <div className="text w-5/6">My profile on LinkedIn</div>
            </button>
            <button
              className="group h-24 w-full border font-semibold p-2 rounded-lg bg-white hover:text-teal-600 transition ease-100 flex items-center"
              onClick={handleOpenMail}
            >
              <div className="w-1/6 flex justify-center">
                <EnvelopeIcon className="w-12 h-12 group-hover:fill-teal-600" />
              </div>
              <div className="text w-5/6">camilosanchezdev@gmail.com</div>
            </button>
            <button
              className="group h-24 w-full border font-semibold p-2 rounded-lg bg-white hover:text-teal-600 transition ease-100 flex items-center"
              onClick={handleOpenGithub}
            >
              <div className="w-1/6 flex justify-center">
                <GithubIcon className="w-12 h-12 group-hover:fill-teal-600" />
              </div>
              <div className="text w-5/6">My activity on GitHub</div>
            </button>
          </div>
        </article>
        <article className="w-full md:w-1/2">
          <h3 className="text-2xl font-semibold mb-2 text-gray-600">
            Contact <span className="text-teal-600">Form</span>
          </h3>

          <div className="w-full flex flex-col justify-center">
            <form action="">
              <div className="flex flex-col">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="outline-2 rounded border h-8 my-2 outline-teal-600 px-1"
                  id="name"
                  {...register("name")}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  className="outline-2 rounded border h-8 my-2 outline-teal-600 px-1"
                  id="subject"
                  {...register("subject")}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">Email addres</label>
                <input
                  type="email"
                  className="outline-2 rounded border h-8 my-2 outline-teal-600 px-1"
                  id="email"
                  {...register("email")}
                />
              </div>
              <div className="lex flex-col">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="outline-2 rounded border my-2 outline-teal-600 px-1 w-full h-48 block"
                  {...register("message")}
                ></textarea>
              </div>
            </form>
            <button
              className="border font-semibold p-2 rounded-lg bg-white hover:bg-teal-600 hover:text-white active:bg-teal-700 transition ease-100"
              disabled
            >
              Send
            </button>
          </div>
        </article>
      </section>
    </div>
  )
}

export default ContactPage
