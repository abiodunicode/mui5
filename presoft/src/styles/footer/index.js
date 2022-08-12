import styled from "@emotion/styled";
import { Box, colors, Typography } from "@mui/material";
import { Colors } from "../theme";
import "@fontsource/montez"


export const Footercontainer= styled(Box)(()=>({
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
  // alignItems:'center',
   textAlign:'center',
   // padding:'20px',
   //margin:'10px',
    backgroundColor:'rgb(64, 84, 99)',
    width:'100%',

}))

export const  FooterLogo = styled(Typography)(({theme})=>({
   // padding : "5px",
   // marginTop:0,
    flexGrow : 1,
    fontSize : '3em',
    fontFamily :'"Montez", "cursive"',
  //paddingLeft:'170px',
    fontWeight:'600',
    //color : Colors.secondary,
    color:Colors.white,
    // [theme.breakpoints.down('sm')]:{
    //    paddingLeft:'20px',
    // }
  
    }));

export const Footercontent= styled(Box)(()=>({
    display:'flex',
    //padding:'10px',
    flexDirection:'column',
  // alignItems:'center',
   textAlign:'center',
  // padding:'10px',
   margin:'30px',
  // backgroundColor:Colors.backcolor


}))

export const FooterSocial= styled(Box)(()=>({



}))

export const FooterTitle = styled(Typography)(({theme})=>({
    lineHeight:'1',
    letterSpacing:'2px',
   fontSize:'13px',
    fontWeight:'700',
    color:Colors.white,
    //fontFamily :'Poppins', 
   // lineHeight:'64px',
    letterSpacing:'0.03em',
   // marginBottom:'16px',
 
//    [theme.breakpoints.down("sm")]:{
//      fontSize:'30px',
//      fontWeight:'700',
 
//  }
 
 
 
 
 
 }));

 export const Footeritem = styled(Typography)(({theme})=>({
    lineHeight:'1',
    letterSpacing:'2px',
   fontSize:'13px',
    //fontWeight:'700',
    color:Colors.white,
    //fontFamily :'Poppins', 
    lineHeight:'34px',
    letterSpacing:'0.03em',
   // marginBottom:'16px',
 
//    [theme.breakpoints.down("sm")]:{
//      fontSize:'30px',
//      fontWeight:'700',
 
//  }
 
 
 
 
 
 }));