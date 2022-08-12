import { Box, ThemeProvider } from "@mui/material";
// import { Container } from "@mui/system";
import { useEffect } from "react";

import Appbar from "./components/appbar";

import theme from "./styles/theme";

import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";

import About from './pages/about'
import Contact from './pages/contact'
import Home from './pages/home'
import { Footer } from "./components/footer";



function App() {
  useEffect(()=>{
    document.title = "Presoft Technologies - Home"
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
       
     <Box
   style={{ 
    margin: -9,
    padding: 0,
  }}>
    
  <Appbar/>   
  </Box>

        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        
        <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>

      <Footer/>
      </ThemeProvider>


   
    
  //   <ThemeProvider theme={theme}>
  //   {/* <Container
  //   maxWidth="xl"
  //   sx={{
  //     backgroundColor:"#fff",
  //   }} > */}


  //   <Box
  //  style={{ 
  //   margin: -9,
  //   padding: 0,
  // }}>
    
  // <Appbar/>   
  // </Box>
  // {/* </Container> */}
  //   </ThemeProvider>
    //
     );
}

export default App;
