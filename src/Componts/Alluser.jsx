import React, { useEffect, useState } from 'react'

const Alluser = () => {
  const [loader, setLoader] = useState(true)
  const [users, setUsers] = useState([])

  useEffect(() => {
    setLoader(true)
    fetch('https://jobtask2-backend-loneliness-mahadi.vercel.app/alluser')
      .then((res) => res.json())
      .then((data) => {
        return setLoader(false), setUsers(data)
      })
  }, [])

  if (loader) {
    return (
      <h1 className="text-xl font-semibold text-center mt-44">Loading...</h1>
    )
  }

  return (
    <div>
      <div className="flex flex-col mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5 ">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            {users.length ? (
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-white border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Catagory
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Agree
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <tr key={user._id} className="bg-gray-100 border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {index + 1}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {user.Name}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {user.Catagory}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {user.agree}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <h1 className="text-5xl font-semibold text-center mt-44">
                No user Found
              </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Alluser
