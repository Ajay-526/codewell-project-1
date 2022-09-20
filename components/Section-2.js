import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import MoodIcon from "@mui/icons-material/Mood";
import FeedIcon from "@mui/icons-material/Feed";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { Container, maxHeight } from "@mui/system";

function MidContent() {
  return (
    <Box marginTop={5} marginBottom={3} sx={{xs:{minHeight: '100vh'}, sm: {maxHeight: '100vh'} }}>
      <Container>
        <Typography variant="h3">
          Features that help you Tweet smarter.
        </Typography>
        <Box
          marginTop={5}
          sx={{
            display: "flex",
            flexDirection: 'row',
            justifyContent: "space-between",
            flexWrap: 'wrap',
            gap:{xs: 2}
          }}
        >
          <Box
            maxWidth={550}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              gap: 2,
              border: "1px solid black",
              p: 2,
            }}
          >
            <AutoGraphIcon />
            <Typography fontWeight={'bold'}>Analytics</Typography>
            <Typography variant="body2" >
              Do excepteur exercitation elit cupidatat. Adipisicing non labore
              excepteur incididunt quis amet et incididunt tempor voluptate
              cupidatat incididunt enim quis. Laborum non ut reprehenderit
              ullamco ea pariatur ea elit ad nostrud mollit qui. Id ad dolor
              velit deserunt nulla cupidatat aliquip dolor nostrud culpa dolor
              magna nostrud.
            </Typography>
          </Box>
          <Box
            maxWidth={550}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              gap: 2,
              border: "1px solid black",
              p: 2,
            }}
          >
            <Brightness4Icon />
            <Typography fontWeight={'bold'}>Dark Mode</Typography>
            <Typography variant="body2">
              Do excepteur exercitation elit cupidatat. Adipisicing non labore
              excepteur incididunt quis amet et incididunt tempor voluptate
              cupidatat incididunt enim quis. Laborum non ut reprehenderit
              ullamco ea pariatur ea elit ad nostrud mollit qui. Id ad dolor
              velit deserunt nulla cupidatat aliquip dolor nostrud culpa dolor
              magna nostrud.
            </Typography>
          </Box>
        </Box>
        <Box
          marginTop={5}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: 'wrap',
            gap:{xs: 2}
          }}
        >
          <Box
            maxWidth={550}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              gap: 2,
              border: "1px solid black",
              p: 2,
            }}
          >
            <MoodIcon />
            <Typography fontWeight={'bold'}>Smart Analyzer</Typography>
            <Typography variant="body2" >
              Do excepteur exercitation elit cupidatat. Adipisicing non labore
              excepteur incididunt quis amet et incididunt tempor voluptate
              cupidatat incididunt enim quis. Laborum non ut reprehenderit
              ullamco ea pariatur ea elit ad nostrud mollit qui. Id ad dolor
              velit deserunt nulla cupidatat aliquip dolor nostrud culpa dolor
              magna nostrud.
            </Typography>
          </Box>
          <Box
            maxWidth={550}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              gap: 2,
              border: "1px solid black",
              p: 2,
            }}
          >
            <FeedIcon />
            <Typography fontWeight={'bold'}>Scheduled your tweets</Typography>
            <Typography variant="body2">
              Do excepteur exercitation elit cupidatat. Adipisicing non labore
              excepteur incididunt quis amet et incididunt tempor voluptate
              cupidatat incididunt enim quis. Laborum non ut reprehenderit
              ullamco ea pariatur ea elit ad nostrud mollit qui. Id ad dolor
              velit deserunt nulla cupidatat aliquip dolor nostrud culpa dolor
              magna nostrud.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default MidContent;
