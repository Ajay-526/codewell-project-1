import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TwitterIcon from "@mui/icons-material/Twitter";
import React from "react";

function PaymentCard() {
  return (
    <Box
      marginTop={5}
      marginBottom={3}
      sx={{ xs: { minHeight: "100vh" }, sm: { maxHeight: "100vh" } }}
    >
      <Container>
        <Box
          sx={{
            height: {xs:450 , sm:400},
            width: {xs:300 , sm:380},
            border: "1px solid brown",
            borderRadius: 5,
            margin: "auto",
            p: 3,
          }}
        >
          <Box>
            <Typography variant="h6">Monthly</Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "baseline",
              }}
            >
              <Typography variant="h2" fontWeight={"bold"}>
                $9
              </Typography>
              <Typography>/mo</Typography>
            </Box>
            <hr />
            <Box
              marginTop={2}
              sx={{
                display: "felx",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <Box
                marginBottom={2}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 2,
                }}
              >
                <CheckCircleIcon />
                <Typography>Unlimited* scheduled tweets and threads</Typography>
              </Box>
              <Box
                marginBottom={2}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 2,
                }}
              >
                <CheckCircleIcon />
                <Typography>Schedule up to 3 weeks in advance</Typography>
              </Box>
              <Box
                marginBottom={2}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 2,
                }}
              >
                <CheckCircleIcon />
                <Typography>
                  Real-time audience analytics tracking upto to 5k followers.
                </Typography>
              </Box>
            </Box>
          </Box>
          <hr />
          <Box
            marginTop={2}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button variant="contained" sx={{ width: 1, textAlign:'center' }}>
              <TwitterIcon sx={{ mr: 1, textAlign:'center' }} /> Start Trail with Twitter
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default PaymentCard;
