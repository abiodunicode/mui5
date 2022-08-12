import React from 'react'
import { AppbarHeader } from '../../styles/appbar'
import Icon from '@mui/material/Icon';
import { Footercontainer, Footercontent, Footeritem, FooterLogo, FooterSocial, FooterTitle } from '../../styles/footer'
import { Colors } from '../../styles/theme';
import Twitter from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Email from '@mui/icons-material/Email';
import { blue } from '@mui/material/colors';
import { Box } from '@mui/material';

export const Footer = () => {
  return (
    <Footercontainer>

        {/* <Box style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between'
        }}>
        <Footercontent>
            <FooterLogo
            style={{
                margin:0,
                
            }}
            >Presoft
            </FooterLogo>

            <FooterSocial>
            <Twitter 
           sx={{ color: blue[500] }}
            />
            <LinkedIn 
            style={{
                marginLeft:'10px',
                marginRight:'10px',
            }}
             sx={{ color: blue[100] }}
            />
            <Email 
             sx={{ color: blue[50] }}
            />
           
            </FooterSocial>
          
           
           
        </Footercontent>

        <Footercontent>
        <FooterTitle>
                IT Managemnt
            </FooterTitle>

            <Footeritem>
            Manage IT
            </Footeritem>
            <Footeritem>
            Manage IT
            </Footeritem>
            <Footeritem>
            Manage IT
            </Footeritem>
        </Footercontent>

        <Footercontent>
        <FooterTitle>
               About Us
            </FooterTitle>
        </Footercontent>

        <Footercontent>
        <FooterTitle>
                IT Managemnt
            </FooterTitle>
        </Footercontent>

        <Footercontent>
        <FooterTitle>
                Services
            </FooterTitle>

            <Footeritem>
       
            </Footeritem>
        </Footercontent>
        </Box> */}

        <Footercontent>
           

          
            <p style={{color:Colors.white}}>
            © 2022  Presoft Technology, Inc. All right reserved 
           
            </p>
           
           
        </Footercontent>
       
      
    </Footercontainer>
  )
}
