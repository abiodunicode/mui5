import { useTheme } from "@emotion/react"
import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import { BoxContent2, Buttonbox, Dividing, ServiceContainer, ServiceContent, ServiceContent2, ServiceDescription, ServiceImage, ServiceImageContainer, ServiceTitle } from "../../styles/services2";
import { Colors } from "../../styles/theme";



export default function Services2(){
    const theme = useTheme();

    return (
    <ServiceContainer>
        <ServiceContent>
            <ServiceTitle variant="h3">
            Are You Using the Right IT Service Provider?
            </ServiceTitle>
            <ServiceDescription variant="subtitle">
             <p>The business technology landscape is complicated and constantly changing. While there are 
                 many Managed Services Providers (MSP), few have the expertise, capabilities, and team to 
                 support modern businesses. How do you know if you're working with the right IT service
                  provider? Answer these questions and download our eBook to find out.</p>
          
            </ServiceDescription>
        </ServiceContent>
           
           
            <BoxContent2
         
           
            >

        <Dividing
        orientation="vertical" flexItem
        >

        </Dividing>
        <ServiceContent2>
        
       
            <ServiceImageContainer>
                  
            <ServiceImage 
            style={{
              
              
            }}
            src="/images/banner/buble-icon-1.png">
           </ServiceImage>
           
            </ServiceImageContainer>
       
            <ServiceTitle variant="h5">
            1.
            </ServiceTitle>
            
            <ServiceDescription variant="subtitle">
            
             <p>
             Does your MSP have poor responsiveness and execution?.</p>  </ServiceDescription>
            
        
        </ServiceContent2>
        <Dividing
        orientation="vertical" flexItem
        >

        </Dividing>
        <ServiceContent2>
        <ServiceTitle variant="h5">
            2.
            </ServiceTitle>
            <ServiceDescription variant="subtitle">
             <p>
             Does your MSP have poor responsiveness and execution?.</p>  
             </ServiceDescription>
            <ServiceImageContainer>
                  
            <ServiceImage 
            
            src="/images/banner/buble-icon-3.png">
           </ServiceImage>
            </ServiceImageContainer>
       
         
            
        
        </ServiceContent2>
        <Dividing
        orientation="vertical" flexItem
        >

        </Dividing>
        <ServiceContent2>
            <ServiceImageContainer>
                  
            <ServiceImage 
            
            src="/images/banner/buble-icon-4.png">
           </ServiceImage>
            </ServiceImageContainer>
       
            <ServiceTitle variant="h5">
            3.
            </ServiceTitle>
            <ServiceDescription variant="subtitle">
             <p>
             Does your MSP have poor responsiveness and execution?.</p>  
             </ServiceDescription>
            
        
        </ServiceContent2>
        <Dividing
        orientation="vertical" flexItem
        >

        </Dividing>
        <ServiceContent2>
        <ServiceTitle variant="h5">
            2.
            </ServiceTitle>
            <ServiceDescription variant="subtitle">
             <p>
             Does your MSP have poor responsiveness and execution?.</p>  
             </ServiceDescription>
            <ServiceImageContainer>
                  
            <ServiceImage 
            
            src="/images/banner/buble-icon-5.png">
           </ServiceImage>
            </ServiceImageContainer>
       
         
            
        
        </ServiceContent2>
        <Dividing
        orientation="vertical" flexItem
        >

        </Dividing>
        <ServiceContent2>
            <ServiceImageContainer>
                  
            <ServiceImage 
            style={{
              
              
            }}
            src="/images/banner/buble-icon-6.png">
           </ServiceImage>
            </ServiceImageContainer>
       
            <ServiceTitle variant="h5">
            1.
            </ServiceTitle>
            <ServiceDescription variant="subtitle">
             <p>
             Does your MSP have poor responsiveness and execution?.</p>  </ServiceDescription>
            
        
        </ServiceContent2>

        
        <Dividing
        orientation="vertical" flexItem
        >

        </Dividing>
        <ServiceContent2>
        <ServiceTitle variant="h5">
            2.
            </ServiceTitle>
            <ServiceDescription variant="subtitle">
             <p>
             Does your MSP have poor responsiveness and execution?.</p>  
             </ServiceDescription>
            <ServiceImageContainer>
                  
            <ServiceImage 
            
            src="/images/banner/buble-icon-2.png">
           </ServiceImage>
            </ServiceImageContainer>
       
         
            
        
        </ServiceContent2>

      
        </BoxContent2>

        
    </ServiceContainer>

    
    )
}