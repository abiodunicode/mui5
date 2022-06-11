import { Box, Button, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect } from "react";
import Appbar from "./components/appbar";
import Banner from "./components/banner";
import Products from "./components/products";
import Promotions from "./components/Promotions/Promotions";
import Services from "./components/services";
import Services2 from "./components/services2";
import theme from "./styles/theme";

function App() {
  useEffect(()=>{
    document.title = "React Material UI - Home"
  }, []);

  return (
    <ThemeProvider theme={theme}>
    {/* <Container
    maxWidth="xl"
    sx={{
      backgroundColor:"#fff",
    }} > */}
    <Box
   style={{ 
    margin: -9,
    padding: 0,
  }}
    >
   
      <Appbar/>
      <Banner/>
      <Promotions/>
      <Services/>
      <Services2/>
      {/* <Products/> */}
      </Box>
 
    {/* </Container> */}
    </ThemeProvider>
  );
}

export default App;
