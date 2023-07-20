type CardProps = {
  title: string
  startDate: string
  endDate: string
  institution: string
  description: string
}
const Card = ({ title, startDate, endDate, institution, description }: CardProps) => {
  return (
    <div className="border-l-2 border-teal-500 p-4 shadow-md hover:shadow-lg cursor-pointer transition ease-100 my-6 bg-white">
      <h3 className="font-semibold">{title}</h3>
      <small>
        {startDate} - {endDate} | {institution}
      </small>
      <p>{description}</p>
    </div>
  )
}
export default Card
