import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Image from "next/image";
import TwitterBlack from '../Assets/Twitter (Black).svg'
import React from "react";

function Footer() {
  return (
    <Box sx={{bgcolor:'lightblue', p:2 }}>
      <Container>
        <Box sx={{
            display:'flex',
            flexDirection:{xs: 'column', sm:'row'},
            justifyContent:{xs: 'center', sm:'space-between'},
            wrap:{xs:'wrap'},
            alignItems: {xs: 'center'},
            gap:{xs: 1}
        }}>
          <Typography fontStyle={"italic"} fontWeight={"bold"} variant="h6" color={"blue"}>
            Chrip.
          </Typography>
          <Box sx={{
            display:'flex',
            flexDirection:'row',
            alignItems: 'center',
            gap: {xs: 4, sm: 3}
        }}>
            <Image src={TwitterBlack} alt={'twitter black'}/>
            <Typography>Privacy Policy</Typography>
            <Typography>Terms of Use</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
