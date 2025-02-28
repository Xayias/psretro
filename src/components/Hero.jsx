import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ff7rImg from "../assets/ff7rebirth/05-ff7r-art-1117-1-1700231610266.webp";
import mgs3Img from "../assets/mgs3remake/mgs3cover.webp";

const reviews = [
    { title: "Final Fantasy VII Rebirth Review", link: "reviews/ff7r", image: ff7rImg },
    { title: "Metal Gear Solid 3: Snake Eater Review", link: "/reviews/msg3", image: mgs3Img },
    { title: "Resident Evil 4 Remake Review", link: "reviews/re4", image: "" },
    { title: "Silent Hill 2 Remake Review", link: "reviews/sh2", image: "" },
];

const newsArticles = [
    { title: "PS5 Pro Rumours Surface", link: "/news/ps5pro" },
    { title: "Sony Acquires New Studio", link: "/news/sony-acquisition" },
    { title: "State of Play Recap", link: "/news/state-of-play" },
    { title: "PS Plus February Lineup Revealed", link: "/news/psplus-february" },
];

const Hero = () => {
    return (
      <div className="relative w-full h-full overflow-hidden flex justify-center p-32">
        {/* Background Video */}
        <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
          <source src="/psretro/67116-521253275.mp4" type="video/mp4" />
        </video>
        
        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center p-6 bg-opacity-50 text-white h-1/3 w-1/2 md:w-9/12">
          {/* Review Carousel */}
          <div className="w-full md:w-2/3 lg:w-3/4 p-4">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Latest Reviews</h2>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              className="rounded-lg overflow-hidden"
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <a href={review.link} className="block bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition">
                    <img src={review.image} alt={review.title} className="w-full h-64 object-cover rounded-lg" />
                    <h3 className="text-lg font-semibold mt-2">{review.title}</h3>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          
          {/* News Section */}
          <div className="w-full md:w-1/3 lg:w-1/4 p-4">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Latest News</h2>
            <ul>
              {newsArticles.map((article, index) => (
                <li key={index} className="mb-2">
                  <a href={article.link} className="text-blue-400 hover:underline">{article.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

export default Hero;