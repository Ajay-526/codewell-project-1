import { Button, Container, Grid } from "@mui/material";
import Image from "next/image";
import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HeroDesktop from "../Assets/Hero Image (Desktop View).png";
import TwitterIcon from "@mui/icons-material/Twitter";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { images } from "../lib/assests";
import { fontSize } from "@mui/system";
function Main() {
  return (
    <Box
      minHeight={"100vh"}
      sx={{
        display: { xs: "block" },
        bgcolor: "#f2f2f2",
        p: 2,
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap-reverse",
          }}
        >
          <Box
            width={{ sm: 550 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              flexShrink: 2,
              gap: 2,
            }}
          >
            <Typography
              sx={{ typography: { sm: "h2", xs: "h4" } }}
              component={"h3"}
            >
              Twitter analytics taken to a whole new level.
            </Typography>
            <Typography>
              Chirp is a suite of Twitter analytics that will help you better
              understand your audience, which tweets they like, and most
              importantly, wher they are the most active on Twitter.
            </Typography>
            <Box
              marginTop={3}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: { xs: "space-between", sm: "flex-start" },
                alignItems: { xs: "center", sm: "flex-start" },
                gap: 2,
              }}
            >
              <Button variant="contained">
                <TwitterIcon sx={{ mr: 1 }} /> Sign In with Twitter
              </Button>
              <Button variant="text">
                Learn More <ArrowRightAltIcon />{" "}
              </Button>
            </Box>
            <Box
              width={{ xs: 200, sm: 400 }}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
              {images.map((image, i) => {
                return (
                  <Box key={i} sx={{mr: -3}}>
                    <Image
                      style={{ overflow: "hidden" }}
                      src={image}
                      alt={image}
                      key={i}
                    />{" "}
                  </Box>
                );
              })}
            </Box>
            <Typography>
              Join 195 others who have analyzed their followers and scheduled
              1234 tweets!
            </Typography>
          </Box>
          <Box maxWidth={400}>
            <Image
              src={HeroDesktop}
              alt="Hero Desktop Image"
              height={850}
              width={600}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Main;
