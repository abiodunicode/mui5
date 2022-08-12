import { IconButton } from "@mui/material";
import Appbar from ".";
import Actions from "./actions";

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import { Colors } from "../../styles/theme";

export default function AppbarMobile({matches}) {

    return(

        <AppbarContainer
        style={{
            marginTop:0,
            backgroundColor:Colors.backcolor,
            zIndex:'99',
            
            
        }}>
           
            <AppbarHeader  variant="h4">
               Presoft
                </AppbarHeader>

                <IconButton
               
                style={{
                    color:Colors.white,
                    paddingRight:'15px',
                    

                }}
                >
                <MenuIcon
                sx={{ fontSize: "50px" }}
                />
            </IconButton>
              
            <Actions matches={matches}/>
            
        </AppbarContainer>
    )
   
  
}