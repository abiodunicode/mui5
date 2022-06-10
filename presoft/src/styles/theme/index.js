import { createTheme } from "@mui/material/styles";

export const Colors= {
    primary: "#5f2ce3e",
    secondary: "#d1adcc",
    backcolor:'#851F55',
    success: "#4CAF50",
    info: "#00a2ff",
    danger: "#FFC107",
    warning: "#FFC107",
    dark: "#0e1b20",
    light: "#aaa",
    muted: "#abafb3",
    border: "#DODFE1",
    inverse: "#2F3D4A",
    shaft: "#333",
    //////////
    ///GRAY///
    ///////////
    dim_gray: "#696969",
    dove_gray: "#d5d5d5",
    body_bg: "#f3f6f9",
    light_gray: "rgb(230,230,230)",
    ////////
    /// SOLID COLOR ///

    white:"#fff",
    black : "000"
};

const theme = createTheme({
    palatte :{
        primary :{
            main : Colors.primary,
        },
        secondary :{
            main : Colors.secondary,
        }
    },
    components:{
        MuiButton:{
            defaultProps:{
                disableRipple:"true",
                disableElevation:"true"
            }
        }
    }
});

export default theme;