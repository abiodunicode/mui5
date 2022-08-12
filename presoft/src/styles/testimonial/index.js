import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import { Box, flexbox } from "@mui/system";
import { Colors } from "../theme";
import "@fontsource/poppins";


export const TestimonialContainer = styled(Box)(({theme})=>({
        display: 'flex',
        flexDirection:'column',
     
        justifyContent:'center',
        
       textAlign:'center',
        padding :'50px',
        backgroundColor:Colors.whitesmoke,

        [theme.breakpoints.down("sm")]:{
          // width:'100%',
          // margin:0,
          // padding :0,
        
      
      }

}));

export const Boxie = styled(Box)(({theme})=>({
  display: 'flex',
  flexDirection:'row',
  justifyContent:'center',
  // padding :'50px',
  // backgroundColor:Colors.whitesmoke,

  [theme.breakpoints.down("sm")]:{
    // width:'100%',
    // margin:0,
    // padding :0,
  

}

}));






export const TestimonialTitle = styled(Typography)(({theme})=>({
   lineHeight:'1',
   letterSpacing:'2px',
  // fontSize:'30px',
   fontWeight:'400',
   color:Colors.black,
   fontFamily :'Poppins', 
   lineHeight:'64px',
   letterSpacing:'0.03em',
   textAlign:'center',
  // marginBottom:'16px',

  [theme.breakpoints.down("sm")]:{
    fontSize:'20px',
    fontWeight:'700',

}

}));

export const TestimonialDescription = styled(Typography)(({theme})=>({

    lineHeight:'1',
    letterSpacing:'1.2px',
    fontSize:'20px',
    fontWeight:'400',
    color:Colors.black,
    marginBottom:'3em',
    fontFamily :'Poppins', 
    fontWeight:'500',
    lineHeight:'30px',
    letterSpacing:'0.04em',
    textAlign:'center',

  [theme.breakpoints.down("sm")]:{
    fontSize:'18px',
    fontWeight:'400',
    padding:'13px'

} 
 }));


 export const TestMessageText= styled(Box)(({theme})=>({
  //fontFamily :'"Montez", "cursive"',
  [theme.breakpoints.up("md")]:{
      fontSize:'3rem',
    
    },
  color:Colors.black,
  fontSize:'1.5rem'
})) ;

export const TestimonialConetent= styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    backgroundColor:Colors.white,
    borderRadius:'15px',
    padding:'10px',
    margin :'10px 20px',
    width:'60%',
    height:'400px',
    marginLeft:'250px',

    [theme.breakpoints.down("md")]:{
      marginLeft:0,
      width:'100%',
      height:'100%',

   },

   [theme.breakpoints.down("sm")]:{
    marginLeft:0,
    width:'100%',
    height:'100%',
    padding:'5px',

 },
})) ;

export const TestImage = styled('img', Typography)(({src,theme})=>({
  src : `url(${src})`,
  width:' 34px',
  paddingTop:'10px',
  paddingLeft:'20px',

       [theme.breakpoints.down("md")]:{
       // width:' 150px',
 
    },

    [theme.breakpoints.down("sm")]:{
      width:' 24px',
  paddingTop:'5px',
  paddingLeft:'10px',

   },
  })) ;

