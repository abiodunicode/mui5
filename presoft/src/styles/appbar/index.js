import { List, Typography } from "@mui/material";
import {makeStyles, styled} from "@mui/material/styles"
import { Box, color, fontFamily, fontSize, padding } from "@mui/system";
import { Colors } from "../theme";
import "@fontsource/montez"
import "@fontsource/questrial"; 




//container
export const  AppbarContainer = styled(Box)(()=>({
  position:'fixed',
  display : "flex",
   justifyContent : 'center',
  alignItems : 'center',
   padding: '2px 8px',
  marginTop : 4,
  //backgroundColor: Colors.danger,
  width: '100%',


}));

//header
export const  AppbarHeader = styled(Typography)(({theme})=>({
    padding : "5px",
   // marginTop:0,
    flexGrow : 1,
    fontSize : '3em',
    fontFamily :'"Montez", "cursive"',
  paddingLeft:'170px',
    fontWeight:'600',
    //color : Colors.secondary,
    color:Colors.white,
    [theme.breakpoints.down('sm')]:{
       paddingLeft:'20px',
    }
  
    }));

    //list
export const  MyList = styled(List)(({type})=>({
    display : type === 'row' ? 'flex': 'block',
    flexGrow : 1,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor:Colors.backcolor,
    color: Colors.white,
    padding:'20px',
    opacity: '0.9',
    borderRadius:'15px',
    fontFamily :'Questrial',
    fontSize:'180px',
   
    }));


    export const  ActionIconsContainerMobile = styled(Box)(()=>({
       display : "flex",
       background: Colors.shaft,
       position:"fixed",
       bottom: 0,
       left: 0,
       width:'100%',
       alignItem: 'center',
       zIndex: 99,
       borderTop: `1px solid ${Colors.border}`
     }));

     export const  ActionIconsContainerDesktop = styled(Box)(()=>({
        flexGrow : 0,
       // marginTop:'-231px',
      }));
