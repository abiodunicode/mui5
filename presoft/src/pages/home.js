import React from 'react'
import Banner from "../components/banner";
import { Footer } from "../components/footer";
import Promotions from "../components/Promotions/Promotions";
import Services from "../components/services";
import Services2 from "../components/services2";
import Testimonial from "../components/testimonial/index";


function Home() {
  return (
    <>   
     <Banner/>
    <Promotions/>
    <Services/>
    <Services2/>
    
     <Testimonial/>
   
    </>

  )
}

export default Home
