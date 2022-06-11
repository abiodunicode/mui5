import {  IconButton, ListItemButton, ListItemIcon, ListItemText, makeStyles } from "@mui/material";
import Actions from "./actions";
import { AppbarContainer, AppbarHeader, MyList, useStyles } from "../../styles/appbar";
import React, { useEffect, useState } from "react";
import { Colors } from "../../styles/theme";
import zIndex from "@mui/material/styles/zIndex";




export default function AppbarDesktop({matches}) {
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");

  const listenScrollEvent = () => {
    window.scrollY > 73 ? setnavColor(Colors.backcolor) : setnavColor("transparent");
    window.scrollY > 73 ? setnavSize(0) : setnavSize("100px");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

 
 return(
   
        <AppbarContainer
        style={{
          
         marginTop:0,
          backgroundColor: navColor,
          //height: navSize,
           transition: "all 1s",
          zIndex: '99',
        }}
        >
        <AppbarHeader>Presoft</AppbarHeader>
        <p
        style={{
          paddingBottom: navSize,
        }}
        ></p>
            <MyList type ="row"
            
            >
             
            <ListItemText
            primaryTypographyProps={{fontSize: '22px'}} 
            primary="Home"/>
            <ListItemText
            primaryTypographyProps={{fontSize: '22px'}} 
            primary="Categories"/>
            <ListItemText 
            primaryTypographyProps={{fontSize: '22px'}} 
            primary="Products"/>
            <ListItemText 
            primaryTypographyProps={{fontSize: '22px'}} 
            
            primary="Contact Us"/>
            {/* <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                //onClick={handleMenu}
                color="inherit"
              >
                <SearchIcon />
              </IconButton> */}
             
            </MyList>
            <Actions matches={matches}/>
          
    </AppbarContainer>
    );
  
  
}
