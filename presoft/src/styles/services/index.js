import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import { Box, flexbox } from "@mui/system";
import { Colors } from "../theme";
import "@fontsource/poppins";



export const ServiceContainer = styled(Box)(({theme})=>({
        display: 'flex',
        flexDirection:'column',
        //justifyContent:'center',
        padding :'50px',
        backgroundColor:Colors.whitesmoke,

        [theme.breakpoints.down("sm")]:{
          width:'100%',
          margin:0,
          padding :0,
        
      
      }

}));

export const ServiceContent = styled(Box)(({theme})=>({
    display: 'flex',
    flexDirection:'column',
    justifyContent:'center',
    padding :'50px',
    alignItems:'center',
    marginLeft:'auto',
    marginRight:'auto',
    width:'850px',

    [theme.breakpoints.down("sm")]:{
      width:'100%',
      marginLeft:'-50px',
    
  }

   

}));

export const ServiceContent2 = styled(Box)(({theme})=>({
    display: 'flex',
    flexDirection:'column',
    justifyContent:'center',
  //  padding :'50px',
    alignItems:'center',
    marginLeft:'auto',
    marginRight:'auto',
    width:'850px',

    [theme.breakpoints.down("sm")]:{
      width:'100%',
      //marginLeft:'-10px',
      paddingBottom:'70px'
    
  
  }

    //backgroundColor:Colors.dim_gray,

}));

export const ServiceTitle = styled(Typography)(({theme})=>({
   lineHeight:'1',
   letterSpacing:'2px',
  // fontSize:'30px',
   fontWeight:'400',
   color:Colors.black,
   fontFamily :'Poppins', 
   lineHeight:'64px',
   letterSpacing:'0.03em',
  // marginBottom:'16px',

  [theme.breakpoints.down("sm")]:{
    fontSize:'30px',
    fontWeight:'700',

}





}));

export const ServiceDescription = styled(Typography)(({theme})=>({

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

 export const ServiceImage = styled('img', Typography)(({src,theme})=>({
    src : `url(${src})`,
    width:' 84px',
  
         [theme.breakpoints.down("md")]:{
            width: '350px'
   
      },
      [theme.breakpoints.down("sm")]:{
         width: '84px',
         
 
   }
 
   
  
      
  })) ;

  export const Buttonbox = styled(Button)(({theme})=>({
    borderRadius:'50px',
    fontSize:'15px',
    fontWeight:'400',
    padding :'10px',
    fontFamily:'Poppins',
    width:"200px",
    marginTop:'-50px',
    letterSpacing: '4px',
    [theme.breakpoints.down("sm")]:{
        fontSize:'10px',
        fontWeight:'600',
        width:"50%",
        padding :'10px',
        // marginLeft:'40px ',
        // marginRight:'40px ',

  }
 
      
  })) ;

  export const BoxContent = styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:'row',
    [theme.breakpoints.down("sm")]:{
    
      display:'flex',
      flexDirection:'column',
  }
 
      
  })) ;