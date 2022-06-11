import { useTheme } from "@emotion/react"
import { Box } from "@mui/system";
import { BoxContent, Buttonbox, ServiceContainer, ServiceContent, ServiceContent2, ServiceDescription, ServiceImage, ServiceTitle } from "../../styles/services";
import { Colors } from "../../styles/theme";



export default function Services(){
    const theme = useTheme();

    return (
    <ServiceContainer>
        <ServiceContent>
            <ServiceTitle variant="h3">
            What We Do
            </ServiceTitle>
            <ServiceDescription variant="subtitle">
             <p>Technology systems are critical to your company's operations. You need a 
                dependable IT ally so that you can focus on running your business. 
                We uncover the technology issues you don't know to look for, minimize 
                business interruptions, and proactively protect you from cyberattacks.</p>
          
            </ServiceDescription>
        </ServiceContent>
            <BoxContent 
           
            >
        <ServiceContent2>
        <ServiceImage src="/images/banner/icon-gear.png">
          
          </ServiceImage>
            <ServiceTitle variant="h5">
            Managed IT Services
            </ServiceTitle>
            <ServiceDescription variant="subtitle">
             <p>Our world-class team ensures continuity of business operations, leverages Cloud to cost-effectively scale as you grow, and ensures that your hybrid workforce is secure and productive.</p>  </ServiceDescription>
             <Buttonbox variant="contained">Learn more</Buttonbox>
        
        </ServiceContent2>

        <ServiceContent2 
        // style={{
        //     marginLeft:'50px',
        //     marginRight:'50px',
        //     fontSize:'10px'
        // }}
        >
            <ServiceImage 
            style={{
                marginTop:'-50px'
            }}
            src="/images/banner/icon-lock.png">
          
          </ServiceImage>
            <ServiceTitle 
            style={{
               
            }}
            variant="h5">
            Security
            </ServiceTitle>
            <ServiceDescription variant="subtitle">
             <p>Without expert planning and support, your valuable data can be 
                 compromised instantly. Our certified security experts will protect
                  your data and provide peace of mind.</p>

            </ServiceDescription>


             <Buttonbox variant="contained">Learn more</Buttonbox>

        </ServiceContent2>

        <ServiceContent2>
        <ServiceImage src="/images/banner/icon-presentation.png">
          
          </ServiceImage>
            <ServiceTitle variant="h5">
            IT Strategy & Projects
            </ServiceTitle>
            <ServiceDescription variant="subtitle">
             <p>
            
            Achieve your IT goals with less time, money, and effort. We provide the 
            expertise to create and optimize an IT strategy that fully supports your 
            operations.
             </p>
            </ServiceDescription>
            <Buttonbox variant="contained">Learn more</Buttonbox>

        </ServiceContent2>
        </BoxContent>

        

        
    </ServiceContainer>

    
    )
}