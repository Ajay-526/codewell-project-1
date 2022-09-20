import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Image from "next/image";
import TwitterBlack from "../Assets/Twitter (Black).svg";
import TwitterIcon from "@mui/icons-material/Twitter";
import Menu from "../Assets/Hamburger Menu.svg";
import React from "react";

function Navbar() {
  return (
    <Box sx={{ bgcolor: "lightblue", p: 2 }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography
            fontStyle={"italic"}
            variant="h6"
            fontWeight={"bold"}
            color={"blue"}
          >
            Chrip.
          </Typography>
          <Box sx={{display:{sm:'none'}}}>
            <Image src={Menu} alt={"Menu Icon"} />
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "row",
              alignItems: "center",
              gap: { sx: 1, sm: 3 },
            }}
          >
            {/* <Image src={TwitterBlack} alt={'twitter black'}/> */}
            <Typography>Home</Typography>
            <Typography>Pricing</Typography>
            <Typography>FAQ</Typography>
            <Button variant="contained">
              <TwitterIcon sx={{ mr: 1 }} />
              Sign in with Twitter
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Navbar;


