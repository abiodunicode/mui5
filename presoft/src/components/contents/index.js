
import { BannerImage, ServiceContainer, ServiceContent, ServiceContent2, ServiceDescription, ServiceTitle } from "../../styles/contents";



export default function Content(props){
   
    return (
        // <ConContainer>
        //     <ConTitle variant="h2"> {props.title} </ConTitle>
            
        //     <ConDescription> {props.desc} </ConDescription>
        // </ConContainer>

        <ServiceContainer>
        <ServiceContent>
           
            <ServiceTitle variant="h3">
           {props.title}
            </ServiceTitle>
          
            
            <ServiceDescription variant="subtitle">
            {props.desc}
             
          
            </ServiceDescription>
        </ServiceContent>

         <ServiceContent2>

         <ServiceContent>
             <BannerImage src="/images/banner/sideb.jpg">
          
          </BannerImage>
            </ServiceContent>

            <ServiceContent
             style={{
                //padding:'50px',
                 width:'80%'
             }}>
            <ServiceTitle 
             style={{
                //padding:'50px',
                 width:'90%'
             }}
            variant="h3">
            {props.title2}
            </ServiceTitle>
            <ServiceDescription
            style={{
               // padding:'50px',
                //width:'80%'
            }}
            variant="subtitle">
            {props.desc2}
             
          
            </ServiceDescription>
            </ServiceContent>
        </ServiceContent2>

        <ServiceContent2>

         

            <ServiceContent
             style={{
                //padding:'50px',
                 width:'80%'
             }}>
            <ServiceTitle 
             style={{
                //padding:'50px',
                 width:'90%'
             }}
            variant="h3">
            {props.title2}
            </ServiceTitle>
            <ServiceDescription
            style={{
               // padding:'50px',
                //width:'80%'
            }}
            variant="subtitle">
            {props.desc2}
             
          
            </ServiceDescription>
            </ServiceContent>

            <ServiceContent>
             <BannerImage src="/images/banner/sideb.jpg">
          
          </BannerImage>
            </ServiceContent>
        </ServiceContent2>
       
    </ServiceContainer>
    )
}