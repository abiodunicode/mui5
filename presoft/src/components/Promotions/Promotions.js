import { Box, Slide } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { PromotionsContainer,MessageText } from "../../styles/Promotions";

const message =[
    "20% off your first order!",
    "Quick Tech Survey",
    "Please send us email for more"
];

export default function Promotions(){
    const containerRef = useRef();
    const [messageIndex, setMessage] = useState(0);
    const [show, setShow] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setShow(false);
        },3000);
        const intervalId = setInterval(()=>{
            setMessage((i)=>(i+1)% message.length)
            setShow(true);
        },4000);

        return()=>{
            clearInterval(intervalId);
        }
    },[]);

    return(
        
        <PromotionsContainer ref={containerRef}>
        <Slide 
        container={containerRef.current}
        direction={show ? "left": "right"} in={show}
        timeout={{
            enter:500,
            exit: 400
        }}
        >
        <Box display={"flex"} justifyContent={"center"}alignItems={"center"}>
            <MessageText>
                {message[messageIndex]}
              
            </MessageText>
        </Box>
        </Slide>
        </PromotionsContainer>
      
    )
}