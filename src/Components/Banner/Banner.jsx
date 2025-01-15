import React from 'react'
import innovation from '../../assets/banner2.jpg'

const Banner = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 items-center gap-10">

          {/* Image Section */}
          <div className="relative">
            <img 
              src={innovation} 
              alt="ZapStore Banner" 
              className="max-w-full origin-top-right h-[350px] w-full object-cover rounded-xl shadow-xl transform transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </div>

          {/* Text Section */}
          <div className="space-y-6 text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 leading-tight">
              ZapStore's Special Offer
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 tracking-wide leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. This exclusive offer will run for 30 days after the opening ceremony. The first customer will receive 3 free electronics products!
            </p>
            <div className="text-lg font-semibold text-purple-600">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Don’t miss out!
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Banner;

