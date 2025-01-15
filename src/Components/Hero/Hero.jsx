import React, {useState} from 'react';
import Ec1 from "../../assets/Ec-1.jpg";
import Ec33 from "../../assets/Ec-33.jpg"
import Ec4 from "../../assets/Ec-4.jpg"
import Ec5 from "../../assets/Ecc.jpg"
import Vector from "../../assets/Website/vectorr.jpg"
const ImageList = [
    {
        id: 1,
        img: Ec33,
        title:"Home ",
        description:"Welcome to PowerUp Electronics. Whether you're looking for energy-efficient home appliances, state-of-the-art gadgets, or smart devices to make your life",

    },

    {
        id: 2,
        img: Ec4,
        title:"Corporate ",
        description:"Welcome to PowerUp Electronics. Whether you're looking for energy-efficient home appliances, state-of-the-art gadgets, or smart devices to make your life",
        
    },

    {
        id: 3,
        img: Ec5,
        title:"Virtual ",
        description:"Welcome to PowerUp Electronics. Whether you're looking for energy-efficient home appliances, state-of-the-art gadgets, or smart devices to make your life",
        
    }
]



const Hero = () => {
    const [imageId, setImageId] = useState(Ec1)
    const [title, setTitle] = useState("PowerUp Your");
    const [description, setDescription] = useState("Welcome to PowerUp Electronics. Whether you're looking for energy-efficient home appliances, state-of-the-art gadgets, or smart devices to make your life")


    const bgImage = {
        backgroundImage: `url(${Vector})`,
        backgroundPosition: "center",
        backgroundRepeate: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
    }
  return (
    <div className="min-h-[550px] sm:min-h-[650px] bg-gray-100 dark:bg-gray-800 dark:text-slate-600 flex justify-center items-center"
    style={bgImage}>
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8"> {/* Adjusted grid layout */}
          
          {/* Text Section */}
          <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 ">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              {title} 
              <p className="bg-clip-text text-transparent bg-gradient-to-tr from-pink-500 to-violet-500 ">Electronics</p>
            </h1>
            <p className="text-sm mt-4 dark:text-purple-950">
                {description}
            
            </p>
            <div>
              <button className="bg-gradient-to-r from-violet-500 to-violet-800 text-white px-4 py-2 rounded-full mt-4 hover:scale-110 duration-200">
                Order Here
              </button>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="flex justify-center items-center sm:order-2">
            {/* Image main*/}
            
            <div className="w-[300px] h-300px h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-100 object-contain overflow-hidden flex justify-center items-center">
              <img src={imageId} alt="" className="w-[300px] sm:[h-450px] sm:w-[450] sm:scale-125 object-contain mx-auto" /> {/* Added object-contain to properly size image */}
            </div>
            {/*  other image list */}

            <div className="flex flex-wrap lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-4 sm:bottom-auto sm:right-4 bg-sky-950 p-2 rounded-full overflow-x-auto lg:overflow-visible">
  {
    ImageList.map((data) => (
      <img
        key={data.id}  // Use the 'id' from ImageList as a unique key
        src={data.img}
        className="w-[80px] h-[80px] object-contain inline-block hover:scale-110 duration-100"
        onClick={() => {
          setImageId(
            data.id === 1 ? Ec33 :
            data.id === 2 ? Ec4 :
            Ec5
          );

          setTitle(data.title);
          setDescription(data.description);
        }}
      />
    ))
  }
</div>


 
          </div>
        </div>
      </div>
 
    </div>
  );
}

export default Hero;

