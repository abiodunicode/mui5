import styled from "@emotion/styled";
import { Button, Divider, Typography } from "@mui/material";
import { Box, flexbox } from "@mui/system";
import { Colors } from "../theme";
import "@fontsource/poppins";



export const ServiceContainer = styled(Box)(({theme})=>({
        display: 'flex',
        flexDirection:'column',
        //justifyContent:'center',
        padding :'50px',
        backgroundColor:Colors.white,
        margin:0,

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

    //backgroundColor:Colors.dim_gray,

}));

export const ServiceContent2 = styled(Box)(({theme})=>({
    display: 'flex',
    flexDirection:'column',
    justifyContent:'center',
  //  padding :'50px',
    alignItems:'center',
    marginLeft:'auto',
    marginRight:'auto',
    width:'100%',

    [theme.breakpoints.down("sm")]:{
    // marginLeft:'-200px',
    // marginTop:'-450px',
  
  }

    //backgroundColor:Colors.dim_gray,

}));

export const ServiceTitle = styled(Typography)(({theme})=>({
   lineHeight:'1',
   letterSpacing:'2px',
    textAlign:'center',
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
    order:'2',

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
      padding:'13px',
      order:'3',
  
  }
   
 
 
 
 }));



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
        fontSize:'20px',
        fontWeight:'600',
        width:"100%",
        padding :'15px',

  }
 
      
  })) ;

  export const  ServiceImageContainer = styled(Box)(({theme})=>({
    borderRadius:'50%',
    //backgroundColor:Colors.circle1,
    backgroundImage: 'linear-gradient(329.04deg, rgb(238, 94, 70) 34.42%, rgb(250, 178, 86) 99.58%)',
    width:'200px',
    height:'200px',
    display:'flex',
   
    alignItems:'center',

    [theme.breakpoints.down("sm")]:{
      width:'300px',
    height:'300px',

   },

    
    

    

  }));

  export const ServiceImage = styled('img', Typography)(({src,theme})=>({
    src : `url(${src})`,
    width:' 84px',
    padding:'60px',
  
         [theme.breakpoints.down("md")]:{
         // width:' 150px',
   
      },
      [theme.breakpoints.down("sm")]:{
        width:' 84px',
    padding:'120px',
 
   }

   
 
      
  })) ;

  export const Dividing = styled( Divider)(({theme})=>({
    height:"300px",
    marginTop:'100px',

    [theme.breakpoints.down("sm")]:{
     display:'none'


 }
  
  })) ;

  export const BoxContent2 = styled( Box)(({theme})=>({
    display:'flex',
    flexDirection:'row',

    [theme.breakpoints.down("sm")]:{
    
      display:'flex',
      flexDirection:'column',
    
      }
  
  })) ;

  export const BoxContent3 = styled( Box)(({theme})=>({
   

    [theme.breakpoints.down("sm")]:{
    
      display:'flex',
      flexDirection:'column',
    
      }
  
  })) ;