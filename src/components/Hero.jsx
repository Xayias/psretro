import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ff7rImg from "../assets/ff7rebirth/05-ff7r-art-1117-1-1700231610266.webp";
import mgs3Img from "../assets/mgs3remake/mgs3cover.webp";
import ghostImg from "../assets/ghostoftsushima/ghost-of-Tsushima-island-videogame-Japan-1.webp";
import helldImg from "../assets/helldivers2/helld2_04.webp";
import legohorizonImg from "../assets/legohorizonadventures/lego-horizon-adventures-blogroll-1717844705767.webp";

const reviews = [
    { title: "Final Fantasy VII Rebirth Review", link: "reviews/ff7r", image: ff7rImg },
    { title: "Metal Gear Solid 3: Snake Eater Review", link: "/reviews/msg3", image: mgs3Img },
    { title: "Ghost of Tsushima Review", link: "reviews/got", image: ghostImg },
    { title: "Helldivers 2 Review", link: "reviews/hd", image: helldImg },
    { title: "Lego Horizon Adventures Review", link: "reviews/lha", image: legohorizonImg },
];

const newsArticles = [
    { title: "PS5 Pro Rumours Surface", link: "/news/ps5pro" },
    { title: "Sony Acquires New Studio", link: "/news/sony-acquisition" },
    { title: "State of Play Recap", link: "/news/state-of-play" },
    { title: "PS Plus February Lineup Revealed", link: "/news/psplus-february" },
];

const Hero = () => {
    return (
      <div className="relative w-full h-full overflow-hidden flex justify-center md:px-14 md:py-14 mt-20 md:mt-0 lg:px-32">
        {/* Background Video */}
        <video autoPlay loop muted playsinline className="hidden md:block absolute top-0 left-0 w-full h-full object-cover">
          <source src="/psretro/67116-521253275.webm" type="video/webm" />
        </video>

        {/* Background GIF (Shown on Mobile) */}
        <img src="/psretro/67116-521253275.gif" alt="Background Animation" className="block md:hidden absolute top-0 left-0 w-full h-full object-cover" />
        
        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center p-6 bg-opacity-50 text-white h-1/3 w-full 2xl:w-9/12">
          {/* Review Carousel */}
          <div className="w-full md:w-1/2 lg:w-2/3 p-4">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Latest Reviews</h2>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              className="rounded-lg overflow-hidden"
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <a href={review.link} className="block group relative rounded-lg overflow-hidden">
                    <div className="realtive w-full h-96 overflow-hidden">
                      <img src={review.image} alt={review.title} className="w-full h-96 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110" />
                      <h3 className="absolute bottom-4 left-4 text-lg font-semibold text-white bg-black bg-opacity-50 px-3 py-1 rounded-md transition duration-300 group-hover:underline group-hover:bottom-6">{review.title}</h3>
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          
          {/* News Section */}
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
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