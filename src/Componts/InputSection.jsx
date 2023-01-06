import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

const InputSection = () => {
	
	const [loader, setLoader] = useState(false)
  const [catagorys, setCatagorys] = useState([])
  const [agree, setagree] = useState()

  useEffect(() => {
    fetch('https://jobtask2-backend-loneliness-mahadi.vercel.app/catagorys')
      .then((res) => res.json())
      .then((data) => setCatagorys(data))
  }, [])
  console.log(catagorys)

  const togole = (event) => {
    setagree(event.target.checked)
  }

  const fromHandeler = (event) => {
    event.preventDefault()
    const name = event.target.username.value
    const catagory = event.target.catagory.value
    console.log(name, catagory, agree)

	setLoader(true)

	const user = { Name: name, Catagory: catagory, agree: agree ? "True" : "False" };
    fetch("https://jobtask2-backend-loneliness-mahadi.vercel.app/users", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {if(data.acknowledged){
		setLoader(false)
		Swal.fire(
			'Submition Successful',
			'Thank you so much',
			'success'
		  )
		  event.target.reset()
	  }});
  }
  
  if (loader) {
    return <h1 className="text-xl font-semibold text-center mt-44">Loading...</h1>
  }

  return (
    <div>
      <section className="p-6 text-gray-700">
        <form
          onSubmit={fromHandeler}
          className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow ng-untouched ng-pristine ng-valid"
        >
          <h2 className="w-full text-3xl font-bold leading-tight">
            Express your interest
          </h2>
          <div>
            <label className="block mb-1 ml-1">Name</label>
            <input
              name="username"
              type="text"
              placeholder="Your name"
              required
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-teal-400 bg-gray-300"
            />
          </div>
          <div>
            <label className="block mb-1 ml-1">Catagory</label>
            <select
              name="catagory"
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-teal-400 bg-gray-300"
            >
              {catagorys.map((catagory) => (
                <option key={catagory._id} value={catagory.name}>
                  {catagory.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <input
              onChange={togole}
              type="checkbox"
              name="showAgain"
              id="showAgain"
              className="rounded-sm focus:ring-teal-400 focus:border-teal-400 focus:ring-2 accent-teal-400"
            />
            <label className="text-sm cursor-pointer text-gray-700">
			Agree to terms
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-teal-400 focus:ring-teal-400 hover:ring-teal-400 text-gray-900"
            >
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default InputSection
