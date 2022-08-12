
import { Button, Typography, useMediaQuery } from "@mui/material";
import { createTheme, makeStyles, useTheme } from "@mui/material/styles";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle, Buttonbox } from "../../styles/banner";


export default function Banner (props) {

  

    const theme = useTheme();
   
    const matches = useMediaQuery(theme.breakpoints.down('md'));

   
  return (
      <BannerContainer 
      style={{
        width:'100%',
        height:'450px',
        backgroundImage: `url(${'/images/banner/b2.jpg'})`,
      }}
      >
          {/* <BannerImage src="/images/banner/banner2.png">
          
          </BannerImage> */}
          <BannerContent>
        {/* <Typography variant="h6">
            Tech Collection
        </Typography> */}
        <BannerTitle variant="h2">
        {props.title}
        </BannerTitle>
        

        

          </BannerContent>
           
      </BannerContainer>
      
    
  )
}
