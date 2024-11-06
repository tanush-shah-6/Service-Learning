import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import './Gallery.css'; // Import the corresponding CSS for styling

const GalleryPage = () => {
  return (
       <>

<div className="container mx-auto py-12 px-4">
    <h1 className="initiatives">
            GREEN MOBILITY FEST
        </h1>
    <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{ clickable: true }}
            navigation
            className="mySwiper"
        >
        <SwiperSlide>
            <div className="card bg-white shadow-md rounded-lg overflow-hidden">
            <img alt="Skill Development" className="w-full h-64 object-cover" src="/images/green-mobility_1.jpg" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="card bg-white shadow-md rounded-lg overflow-hidden">
            <img alt="Environmental Projects" className="w-full h-64 object-cover" src="/images/explore it enviromental proejcts.jpeg" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="card bg-white shadow-md rounded-lg overflow-hidden">
            <img alt="Eco-expeditions" className="w-full h-64 object-cover" src="/images/explore it image 3.jpeg" />
            </div>
        </SwiperSlide>
    </Swiper>
    <div className="p-6">
        <p className="text-gray-700 m-3">
        On December 15, 2019, we partnered with the Climate Reality Project and Pune Municipal Corporation to organize the Green Mobility Fest, 
        promoting “Green Urban Mobility” with an expo featuring cycles, electric vehicles, and smart solutions.
        </p>
    </div>
    </div>

    
    <div className="container mx-auto py-12 px-4">
        <h1 className="initiatives">
                E-WASTE COLLECTION DRIVE
            </h1>
        <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{ clickable: true }}
                navigation
                className="mySwiper"
            >
            <SwiperSlide>
                <div className="card bg-white shadow-md rounded-lg overflow-hidden">
                <img alt="Skill Development" className="w-full h-64 object-cover" src="/images/E-waste_1.jpeg" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card bg-white shadow-md rounded-lg overflow-hidden">
                <img alt="Environmental Projects" className="w-full h-64 object-cover" src="/images/explore it enviromental proejcts.jpeg" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card bg-white shadow-md rounded-lg overflow-hidden">
                <img alt="Eco-expeditions" className="w-full h-64 object-cover" src="/images/explore it image 3.jpeg" />
                </div>
            </SwiperSlide>
        </Swiper>
        <div className="p-6">
            <p className="text-gray-700 m-3">
            ExploreIT has conducted a variety of skill-based trainings, workshops, webinars, competitions, and internship drives with the objective of equipping the youth with the finest set of skills and abilities to succeed as the leaders of our future.
            </p>
        </div>
    </div>




</>
    );
};

export default GalleryPage;
