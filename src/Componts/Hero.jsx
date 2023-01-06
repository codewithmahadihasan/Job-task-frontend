import React from 'react'
import { Link } from 'react-router-dom'
import Lottie from 'lottie-react'
import groovyWalkAnimation from './HeroImage.json'

const Hero = () => {
  return (
    <section className="bg-gray-200 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 text-gray-700">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            This is a <br />
            <span className="text-teal-400 "> "Task purpuse" </span>Assingtment
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            I try to create a costom ui disign
            <br className="hidden md:inline " />
            Hope you like it.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              rel="noopener noreferrer"
              to="/allusers"
              className="px-8 py-3 text-lg font-semibold rounded  hover:bg-teal-700 bg-teal-400 text-gray-900"
            >
             All Users
            </Link>
            <Link
              rel="noopener noreferrer"
              to="/input"
              className="px-8 py-3 text-lg font-semibold border rounded hover:bg-teal-700 border-gray-700"
            >
              Input your choice
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <Lottie
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            animationData={groovyWalkAnimation}
            loop={true}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
