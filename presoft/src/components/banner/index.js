
import { Button, Typography, useMediaQuery } from "@mui/material";
import { createTheme, makeStyles, useTheme } from "@mui/material/styles";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle, Buttonbox } from "../../styles/banner";


export default function Banner () {

  

    const theme = useTheme();
   
    const matches = useMediaQuery(theme.breakpoints.down('md'));

   
  return (
      <BannerContainer 
      style={{ 
        backgroundImage: `url(${'/images/banner/banner2.png'})`,
   
      }}
      >
          {/* <BannerImage src="/images/banner/banner2.png">
          
          </BannerImage> */}
          <BannerContent>
        {/* <Typography variant="h6">
            Tech Collection
        </Typography> */}
        <BannerTitle variant="h2">
        Secure and Strategic IT
        </BannerTitle>
        <BannerDescription variant="subtitle">
            Logically provides information technology services and <br></br>active security management  for growing companies.
            <p>We manage technology complexity – from IT services <br></br> and infrastructure  management to special projects.</p>
           <Buttonbox
            variant="contained" 
            href="#contained-buttons"
           >
           Browse Solutions 
           </Buttonbox>

           
            
        </BannerDescription >

        

          </BannerContent>
           
      </BannerContainer>
      
    
  )
}
