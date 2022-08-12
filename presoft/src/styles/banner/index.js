import { Button, Typography } from "@mui/material";
import {styled} from "@mui/material/styles"
import { Box } from "@mui/system";
import   { Colors } from "../theme";
import "@fontsource/poppins";




export const BannerContainer= styled(Box)(({theme})=>({
    display: "flex",
   // justifyContent: "center",
    // width :"100%",
    // height : "100%",
    // padding:"0px 0px",

    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
   backgroundRepeat: 'no-repeat',
   width: '100vw',
   height: '100vh',
   backgroundImage: `url(${'/images/banner/banner2.png'})`,
    // backgroundImage:"url("+{Image}+")",
   //backgroundColor : Colors.light_gray,
       [theme.breakpoints.down("sm")]:{
         flexDirection: 'column',
         alignItems : 'center',
         width: '100vw',
         height: '85vh',
       }

})) ;

export const BannerContent= styled(Box)(({theme})=>({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '420',
   paddingTop:'130px',      
    paddingLeft:'170px',
    fontFamily :'Poppins', 
   // width: '70vw',
    
    
    [theme.breakpoints.down("sm")]:{
        display: 'flex',
        flexDirection: 'column',
         justifyContent: 'center',
         maxWidth: '420',
         padding:'30px',
         paddingTop:'125px',  
        
    }

})) ;

export const BannerTitle = styled(Typography)(({theme})=>({
   lineHeight: '1.5',
   letterSpacing: '2px',
    fontSize:'50px',
    fontWeight:'500',
   // paddingLeft : '50px',
    color : Colors.white,
    marginBottom:'20px',
       [theme.breakpoints.down("sm")]:{
        fontSize:'37px',
        textAlign:'center'
        
    }

    
})) ;

export const BannerDescription = styled(Typography)(({theme})=>({
    lineHeight: '1.25',
    letterSpacing: '1.25',
   // paddingLeft : '50px',
    fontWeight:'400',
   // paddingRight : '100px',
    color : Colors.white,
    fontSize:'25px',
   textAlign:'center',
   // width: '50vw',
 
     marginBottom:'3em',
        [theme.breakpoints.down("md")]:{
            lineHeight: '1.25',
            letterSpacing: '1.15',
            marginBottom:'1.5em',
            fontSize:'20px',

         
     },

     [theme.breakpoints.down("sm")]:{
      lineHeight: '1.25',
      letterSpacing: '1.15',
      marginBottom:'1.5em',
      fontSize:'15px',
      textAlign:'center',

   
}
 
     
 })) ;

 export const BannerImage = styled('img', Typography)(({src,theme})=>({
    src : `url(${src})`,
    width:' 500px',
  
         [theme.breakpoints.down("md")]:{
            width: '350px'
   
      },
      [theme.breakpoints.down("sm")]:{
        //  width: '320px',
        //  height:'300px'
 
   }
 
   
  
      
  })) ;

//   export const BannerImageTest = styled('img', Typography)(({theme})=>({
  
  
 
      
//   })) ;

  export const Buttonbox = styled(Button)(({theme})=>({
    borderRadius:'50px',
    fontSize:'15px',
    fontWeight:'600',
    padding :'25px',
    fontFamily:'Poppins',
    width:"300px",
    marginLeft:'-380px',
    letterSpacing: '4px',
    [theme.breakpoints.down("sm")]:{
        fontSize:'10px',
        fontWeight:'600',
        width:"100%",
        padding :'15px',

  }
 
      
  })) ;
 
 
