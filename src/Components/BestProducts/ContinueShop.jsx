import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const ContinueShop = () => {

  return (
    <div className="container mx-auto p-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Thank You for Purchase!</h2>
        <p className="text-lg mb-4">Thank you for buying products from our pages. You will get your products soon through our delivery service</p>
        <div className=" flex justify-center items-center">
            <FaCheckCircle className="text-green-500 text-4xl mr-4" />
            <span className="text-xl font-semibold">Your order is confirmed!</span>
        </div>
      
    </div>
  )
}

export default ContinueShop

