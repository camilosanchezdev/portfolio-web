const Filter = () => {
  return (
    <div className="w-full flex justify-center">
      <ul className="flex gap-4">
        <li className="border font-semibold p-2 rounded-lg bg-teal-600 text-white hover:bg-teal-600 hover:text-white active:bg-teal-700 transition ease-100 cursor-pointer w-20 text-center">
          All
        </li>
        {/* <li className="border font-semibold p-2 rounded-lg bg-white hover:bg-teal-600 hover:text-white active:bg-teal-700 transition ease-100 cursor-pointer w-20 text-center">.Net</li>
                <li className="border font-semibold p-2 rounded-lg bg-white hover:bg-teal-600 hover:text-white active:bg-teal-700 transition ease-100 cursor-pointer w-20 text-center">NodeJs</li>
                <li className="border font-semibold p-2 rounded-lg bg-white hover:bg-teal-600 hover:text-white active:bg-teal-700 transition ease-100 cursor-pointer w-20 text-center">React</li>
                <li className="border font-semibold p-2 rounded-lg bg-white hover:bg-teal-600 hover:text-white active:bg-teal-700 transition ease-100 cursor-pointer w-20 text-center">Angular</li> */}
      </ul>
    </div>
  )
}
export default Filter
