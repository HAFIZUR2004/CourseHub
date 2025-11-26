"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const BannerSlider = () => {
  const slides = [
    {
      img: "https://i.ibb.co/RMdmJ1f/Adobe-Stock-1059070735-Preview.jpg",
      title: "Interactive Courses for Kids",
      subtitle: "Engaging Learning Experience Online",
      buttonText: "Enroll Now",
      buttonLink: "/courses",
    },
    {
      img: "https://i.ibb.co/6080cGLm/Adobe-Stock-1286226034-Preview.jpg",
      title: "Fun & Creative Learning",
      subtitle: "Explore New Skills Every Day",
      buttonText: "Start Learning",
      buttonLink: "/courses",
    },
    {
      img: "https://i.ibb.co/35mxy6Y4/Adobe-Stock-651810086-Preview.jpg",
      title: "Interactive Kids Tutorials",
      subtitle: "Step-by-step Guided Learning",
      buttonText: "Join Now",
      buttonLink: "/courses",
    },
    {
      img: "https://i.ibb.co/d0MCWVXw/Adobe-Stock-400776431-Preview.jpg",
      title: "Fun Educational Activities",
      subtitle: "Boost Creativity & Skills",
      buttonText: "Get Started",
      buttonLink: "/courses",
    },
  ];

  return (
    <div className="w-full relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-[70vh] md:h-[80vh] bg-cover bg-center relative flex items-center justify-center rounded-xl overflow-hidden"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Content */}
              <div className="relative text-center px-4 md:px-10 flex flex-col items-center gap-4 animate-fadeInUp">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl text-white drop-shadow-md">
                  {slide.subtitle}
                </p>
                <a
                  href={slide.buttonLink}
                  className="mt-2 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition"
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
