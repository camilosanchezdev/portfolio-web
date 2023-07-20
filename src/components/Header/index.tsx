import background from "./../../assets/img/header-bg.png"

interface HeaderProps {
  title: string
  subtitle?: string
}
const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <div
      className="bg-teal-700 h-48 rounded-t-3xl bg-scroll bg-center bg-no-repeat flex justify-center items-center flex-col"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h1 className="text-white text-2xl lg:text-4xl font-bold mb-2">{title}</h1>
      {subtitle && <h2 className="text-white text-md lg:text-xl font-bold">{subtitle}</h2>}
    </div>
  )
}
export default Header
