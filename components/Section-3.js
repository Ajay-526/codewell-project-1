import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Container } from "@mui/system";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Image from "next/image";
import avtar1 from "../Assets/userAvatar01.svg";
import avtar2 from "../Assets/userAvatar02.svg";
import avtar3 from "../Assets/userAvatar03.svg";

import likeIcon from "../Assets/Like.svg";
import TwitterBlue from "../Assets/Twitter (Blue).svg";
import { fontWeight } from "@mui/system";
const ExpandMore = styled((props) => {
  const { ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
}));

export default function TweetsCard() {
  return (
    <Box marginTop={5}
      marginBottom={3}
      sx={{ xs: { minHeight: "100vh" }, sm: { maxHeight: "100vh" } }}
    >
      <Box sx={{ bgcolor: "#00e6e6" }} >
        <Container>
          <Box padding={5}>
            <Typography variant="h4" fontWeight={"bold"}>
              What our customer say
            </Typography>
            <Box
              marginTop={2}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  avatar={<Image src={avtar1} alt={"avtar 1"} />}
                  action={
                    <IconButton aria-label="settings">
                      <Image src={TwitterBlue} alt={"twitter icon"} />
                    </IconButton>
                  }
                  title={<Typography fontWeight={"bold"}>Sara May</Typography>}
                  subheader="@sara_may"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <Image src={likeIcon} alt={"like"} />
                  </IconButton>
                  <Typography>2</Typography>
                  <ExpandMore>
                    <Typography>March 2, 2021.</Typography>
                  </ExpandMore>
                </CardActions>
              </Card>
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  avatar={<Image src={avtar2} alt={"avtar 1"} />}
                  action={
                    <IconButton aria-label="settings">
                      <Image src={TwitterBlue} alt={"twitter icon"} />
                    </IconButton>
                  }
                  title={<Typography fontWeight={"bold"}>Jack Scott</Typography>}
                  subheader="@jackscott_"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <Image src={likeIcon} alt={"like"} />
                  </IconButton>
                  <Typography>180</Typography>
                  <ExpandMore>
                    <Typography>September 5, 2020.</Typography>
                  </ExpandMore>
                </CardActions>
              </Card>
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  avatar={<Image src={avtar3} alt={"avtar 1"} />}
                  action={
                    <IconButton aria-label="settings">
                      <Image src={TwitterBlue} alt={"twitter icon"} />
                    </IconButton>
                  }
                  title={<Typography fontWeight={"bold"}>Jessica May</Typography>}
                  subheader="@jmay98"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <Image src={likeIcon} alt={"like"} />
                  </IconButton>
                  <Typography>281</Typography>
                  <ExpandMore>
                    <Typography>March 2, 2021.</Typography>
                  </ExpandMore>
                </CardActions>
              </Card>
            </Box>
          </Box>
        </Container>
      </Box>
      <Container>
      <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              margin: "auto",
              marginTop: 5,
              textAlign: "center",
            }}
          >
            <Typography variant="h5" fontWeight={"bold"}>
              One Simple Price Plan.
            </Typography>
            <Typography>
              Nulla deserunt nisi cillum anim elit aute cillum tempor cupidatat
              anim ipsum quis deserunt.
            </Typography>
          </Box>
      </Container>
    </Box>
  );
}
