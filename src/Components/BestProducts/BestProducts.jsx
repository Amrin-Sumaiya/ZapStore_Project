import React from 'react'
import Bs1 from '../../assets/Bs1.jpg'
import Bs2 from '../../assets/Bs2.jpg'
import Bs3 from '../../assets/Bs3.jpg'

import { FaStar } from 'react-icons/fa'

const ProductsData = [
    {
        id: 1,
        img: Bs1,
        title:"Preassure-Cooker ",
        description:"Welcome to PowerUp Electronics. Whether you're looking for energy-efficient home appliances, state-of-the-art gadgets, or smart devices to make your life",

    },

    {
        id: 2,
        img: Bs2,
        title:"Rice-Cooker ",
        description:"Welcome to PowerUp Electronics. Whether you're looking for energy-efficient home appliances, state-of-the-art gadgets, or smart devices to make your life",
        
    },

    {
        id: 3,
        img: Bs3,
        title:"Hair-Straightner ",
        description:"Welcome to PowerUp Electronics. Whether you're looking for energy-efficient home appliances, state-of-the-art gadgets, or smart devices to make your life",
        
    }
]

const BestProducts = () => {
  return (
    <div className="py-10">
        <div className="container">
            {/* header section*/}
            <div className="text-center mb-20 max-w-[400px] mx-auto ">
                <p className="text-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-violet-900">
                    Trending Products
                </p>
                <h1 className="text-3xl font-bold">Best Electronics</h1>
                <p className="text-xs text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                   you can choose the best electronics
                     
                     </p>
            </div>
            {/* card section*/}
            <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-8 place-items-center">

     {
        ProductsData.map((products) => (
           <div className=" rounded-2xl bg-white dark:bg-slate-800 hover:bg-slate-500 dark:hover:bg-indigo-400 hover:text-white relative shadow-xl duration-high  group max-w-[300px]">
            <div className="h-[100px]">
                <img src={products.img} alt=""
                className="  max-w-[100px] block mx-auto transform-translate-y-14 group-hover:scale-105 duration-300 shadow-md" />
                
            </div>
            <div className="p-4 text-center">
                <div className="w-full flex items-center justify-center">
                  <FaStar
                   className='text-yellow-500'  />
                   <FaStar
                   className='text-yellow-500'  />
                   <FaStar
                   className='text-yellow-500'  />

                </div>
                <h1 className="text-xl font-bold">{products.title}</h1>
                <p className="text-gray-600 group-hover:text-white duration-300 text-sm line-clamp-2">{products.description}</p>
                <button className="bg-purple-600 to-purple-900 text-white px-4 py-2 rounded-full mt-4 hover:scale-105 duration-200 group-hover:bg-white group-hover:text-purple-900
                ">Order Now</button>
            </div>
           </div>

        ))
     }           


                {/* card section-1*/} 

            </div>
        </div>
      
    </div>
  )
}

export default BestProducts;

