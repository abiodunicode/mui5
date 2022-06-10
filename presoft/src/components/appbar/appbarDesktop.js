import {  IconButton, ListItemButton, ListItemIcon, ListItemText, makeStyles } from "@mui/material";
import Actions from "./actions";
import { AppbarContainer, AppbarHeader, MyList, useStyles } from "../../styles/appbar";
import React, { useEffect, useState } from "react";
import { Colors } from "../../styles/theme";




export default function AppbarDesktop({matches}) {
  //const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor(Colors.backcolor) : setnavColor("transparent");
    //window.scrollY > 10 ? setnavSize("5rem") : setnavSize("10rem");
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
          backgroundColor: navColor,
          //height: navSize,
          transition: "all 1s"
        }}
        >
        <AppbarHeader>Presoft</AppbarHeader>
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
