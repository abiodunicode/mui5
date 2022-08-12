

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { TestImage, TestimonialConetent, TestimonialContainer, TestimonialDescription } from "../../styles/testimonial";
import { Divider } from "@mui/material";
import { ServiceTitle } from "../../styles/services";

const data =[
    {
        id:1,
        username:'Lead Assurance, CEO',
        testionial: 'The business technology landscape is complicated and constantly changing. While there are many Managed Services Providers (MSP), few have the expertise, capabilities, and team to support modern businesses. How do you know if you are working with the right IT service provider? Answer these questions and download our eBook to find out.'
    },
    {
      id:2,
      username:'World International Analyst ',
      testionial: 'The business technology landscape is complicated and constantly changing. While there are many Managed Services Providers (MSP), few have the expertise, capabilities, and team to support modern businesses. How do you know if you are working with the right IT service provider? Answer these questions and download our eBook to find out.'
  },

   
]


export default function Testimonial() {
  return (
    <>
    <TestimonialContainer >
    <ServiceTitle variant="h3">
                Testimonial
                
           </ServiceTitle>
           <TestimonialConetent>
           <TestImage
    src="/images/banner/icon-quote.png"
    >
    </TestImage>

      <Swiper
      style={{
           margin:'5px',
          padding:'5px'
      }}
        spaceBetween={15}
        //slidesPerView={2}
        centeredSlides={true}
        autoplay={{
          delay: 8800,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
       
        {data.map(user=> (
              <SwiperSlide key={user.id} className='slide'>
                 
                
  
    <TestimonialDescription>
       <p>{user.testionial}</p>
    </TestimonialDescription>

    <Divider></Divider>
    <p>Bill Gate</p>

              </SwiperSlide> 

           ))}
           

           
      </Swiper>
      </TestimonialConetent>
      </TestimonialContainer>
    </>
  );
}



