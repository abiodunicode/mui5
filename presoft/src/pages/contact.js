import { Box } from '@mui/system'
import React from 'react'
import Banner from '../components/banner2'
import Content from '../components/contents'
import Promotions from '../components/Promotions/Promotions'

function Contact() {
 var contentTitle= 'Presoft Takes Care of Your IT,So You Can Take Care of Business.';
 var conDesc = `Imagine what it would be like to instantly have a world-class 
 IT team working for you with predictable costs.  That’s what you get with Logically.  
 Instantly gain access to the technology that can increase revenue, decrease costs,
  improve productivity, and enhance customer experiences - along with the experts to 
  manage it and keep your data secure and protected.
 
 `

 var conTitle2=`
 No IT team, little team, big team – we’ve got your back
 `;

 var condesc2=`
 Whether you outsource your entire IT function, or need more expert hands and tools to support your existing team, we can help.
 `;


  return (
    <>
      <Banner title="Manage IT Services"/>

      <Content 
      title={contentTitle} 
      title2={conTitle2} 
      desc={conDesc}
      desc2={condesc2}
      
      />
     
     
     
      
    </>
  )
}

export default Contact
