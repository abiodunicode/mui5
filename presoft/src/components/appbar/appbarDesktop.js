import {  Button, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, makeStyles, Typography, useColorScheme } from "@mui/material";
import Actions from "./actions";
import { AppbarContainer, AppbarHeader, ItemBox, ItemContent, ItemLinks, ItemTitle, MyList, MyList2, useStyles } from "../../styles/appbar";
import React, { useEffect, useState } from "react";
import { Colors } from "../../styles/theme";
import zIndex from "@mui/material/styles/zIndex";
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { Link } from "react-router-dom";




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
              <MyList type ="row">
              <Link 
        style={{
          fontSize:'22px',
          color:Colors.white,
          margin:0,

        }}
        to="/contact">Test</Link>

<Link 
        style={{
          fontSize:'22px',
          color:Colors.white,
          margin:0,

        }}
        to="/contact">Test</Link>

              <ListItemText

>
<PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button
          style={{
            color:Colors.white,
            fontSize:'22px',
            textTransform:'capitalize',
          }}
          
          variant="" {...bindTrigger(popupState)}>
           Solutions
          </Button>
          <Popover
          style={{
            marginTop:'25px'
          }}
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
           <ItemBox>
             <ItemContent>
               <ItemTitle variant="h6">Services</ItemTitle>
               <ItemLinks> <p>Manage IT</p></ItemLinks>
               <ItemLinks> <p>Manage IT</p></ItemLinks>
               <ItemLinks> <p>Manage IT</p></ItemLinks>
               <ItemLinks> <p>Manage IT</p></ItemLinks>
               <ItemLinks> <p>Manage IT</p></ItemLinks>
               <ItemLinks> <p>Manage IT</p></ItemLinks>
             </ItemContent>

             <ItemContent>
               <ItemTitle variant="h6">Technology</ItemTitle>
               <ItemLinks> <p>Manage IT Services</p></ItemLinks>
               <ItemLinks> <p>Audit Services</p></ItemLinks>
               <ItemLinks> <p>Manage IT Services</p></ItemLinks>
               <ItemLinks> <p>Audit Services</p></ItemLinks>
            
             </ItemContent>

             <ItemContent>
               <ItemTitle variant="h6">Industries</ItemTitle>
               <ItemLinks> <p>Manage IT</p></ItemLinks>
               <ItemLinks> <p>Manage IT</p></ItemLinks>
               <ItemLinks> <p>Manage IT</p></ItemLinks>
               <ItemLinks> <p>Manage IT</p></ItemLinks>
               <ItemLinks> <p>Manage IT</p></ItemLinks>
               <ItemLinks> <p>Manage IT</p></ItemLinks>
             </ItemContent>

             <ItemContent>
               <ItemTitle variant="h6">Industries</ItemTitle>
               <ItemLinks> <p>Manage IT</p></ItemLinks>
               <ItemLinks> <p>Manage IT</p></ItemLinks>
               <ItemLinks> <p>Manage IT</p></ItemLinks>
               <ItemLinks> <p>Manage IT</p></ItemLinks>
               <ItemLinks> <p>Manage IT</p></ItemLinks>
               <ItemLinks> <p>Manage IT</p></ItemLinks>
             </ItemContent>
           </ItemBox>
          </Popover>
        </div>
      )}
    </PopupState>
             </ListItemText>
         
            </MyList>
           <Actions matches={matches}/>
          
    </AppbarContainer>
    );
  
  
}


 
           
