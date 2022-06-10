import { Divider, ListItemButton, ListItemIcon, } from "@mui/material";
import { MyList, ActionIconsContainerDesktop, ActionIconsContainerMobile, } from "../../styles/appbar";
import ShppingCardIcon from '@mui/icons-material/ShoppingCart';
import Person from '@mui/icons-material/Person';
import Favorite from '@mui/icons-material/Favorite';



export default function Actions({matches}) {
    const Component = matches
? ActionIconsContainerMobile
: ActionIconsContainerDesktop;
  return (
      <Component>
          {/* <MyList type="row"> */}
       {/* <ListItemButton
       sx={{
           justifyContent: "center",
       }}
       >
           <ListItemIcon
            sx={{
                justifyContent: "center",
                display:"flex",
            }}
           >
               <ShppingCardIcon/>
           </ListItemIcon>
       </ListItemButton>
       <Divider orientation="vertical" flexItem/>

       <ListItemButton
        sx={{
            justifyContent: "center",
        }}
       >
           <ListItemIcon
             sx={{
                justifyContent: "center",
                display:"flex",
            }}
           >
               <Favorite/>
           </ListItemIcon>
       </ListItemButton>
       <Divider orientation="vertical" flexItem/>

       <ListItemButton
        sx={{
            justifyContent: "center",
        }}
       >
           <ListItemIcon
             sx={{
                justifyContent: "center",
                display:"flex",
            }}
           >
               <Person/>
           </ListItemIcon>
       </ListItemButton>
       <Divider orientation="vertical" flexItem/> */}

       
   {/* </MyList> */}
   </Component>
   

  
)
}
