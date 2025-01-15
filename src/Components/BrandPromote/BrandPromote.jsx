import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide
import { FreeMode,  Autoplay } from 'swiper/modules'; // Import necessary modules

// Import images from the assets folder
import bd1 from '../../assets/bd1.jpg'
import bd2 from '../../assets/bd2.jpg'
import bd3 from '../../assets/bd3.jpg'
import bd4 from '../../assets/bd4.jpg'
import bd5 from '../../assets/bd5.jpg'
import bd6 from '../../assets/bd6.jpg'
import bd7 from '../../assets/bd7.jpg'
import bd8 from '../../assets/bd8.jpg'

const BrandPromote = () => {

    const slides = [
        {
          image: bd1,
          title: 'Innovative Design',
          description: 'Experience the best-in-class design for modern products. Products built for top performance in every category.',
        },
        {
          image: bd2,
          title: 'High Performance',
          description: 'Explore unique features crafted for your needs.Products built for top performance in every category.',
        },
        {
          image: bd3,
          title: 'Unmatched Quality',
          description: 'Explore unique features crafted for your needs.Premium quality that you can trust every single time.',
        },
        {
          image: bd4,
          title: 'Exclusive Features',
          description: 'Explore unique features crafted for your needs. Premium quality that you can trust every single time',
        },
        {
            image: bd5,
            title: 'Exclusive Features',
            description: 'Explore unique features crafted for your needs. Premium quality that you can trust every single time',
          },
          {
            image: bd6,
            title: 'Exclusive Features',
            description: 'Explore unique features crafted for your needs. Premium quality that you can trust every single time',
          },
          {
            image: bd7,
            title: 'Exclusive Features',
            description: 'Explore unique features crafted for your needs. Premium quality that you can trust every single time',
          },
          {
            image: bd8,
            title: 'Exclusive Features',
            description: 'Explore unique features crafted for your needs. Premium quality that you can trust every single time',
          },
      ];
  return (
    <div className="flex items-center justify-center flex-col  ">
      {/* Header Section */}
      <div className="py-3 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 w-full">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-violet-900">
              Our Customer Opinion
            </p>
            <h1 className="text-4xl font-extrabold text-gray-800">Brand New Products</h1>
            <p className="text-sm text-gray-600 mt-2">
              Explore the latest and greatest products curated just for you.
            </p>
          </div>
     
      </div>

      {/* Swiper Section */}
      <Swiper
        modules={[FreeMode,  Autoplay]} // Add the modules here
        freeMode={true}
        autoplay={{
            delay:1000,
            disableOnInteraction: false,
        }} // Enable free mode
         
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="w-full"
      >
        {/* Dynamically render slides */}
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-lg shadow-md items-center  p-1">
              <img
                src={slide.image}
                alt={slide.title}
                className="rounded-lg w-48 h-48 object-cover mb-4"
              />
              <h2 className="text-lg font-bold text-black">{slide.title}</h2>
              <p className="text-sm text-gray-800 mt-2">{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
};
export default BrandPromote;



