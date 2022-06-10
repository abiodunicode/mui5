
import { Box, Typography } from "@mui/material";
import { Colors } from "../theme";
import {styled} from "@mui/material/styles"


export const PromotionsContainer= styled(Box)(({theme})=>({
   
    [theme.breakpoints.up("md")]:{
        padding:'40px, 0px,40px,0px'
      },
    display:'flex',
    justifyContent :'center',
    alignItems:'center',
    padding:'20px, 0px,20px,0px',
    overflow:'hidden',
    background: Colors.backcolor
})) ;

export const MessageText= styled(Box)(({theme})=>({
    fontFamily :'"Montez", "cursive"',
    [theme.breakpoints.up("md")]:{
        fontSize:'3rem',
      
      },
    color:Colors.white,
    fontSize:'1.5rem'
})) ;

