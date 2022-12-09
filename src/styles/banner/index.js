import { Box, Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";

export const BannerContainer = styled(Container)(({ matches, theme }) => ({
  width: "100%",
  height: "100%",
  padding: "0px 0px",
  marginTop: "-450px",
  marginBottom: "30px",
  [theme.breakpoints.down("sm")]: {
    marginTop: "-400px!important",
    padding: "20px",
  },
  [theme.breakpoints.down("md")]: {
    marginTop: "-270px",
  },
}));

export const BannerContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  // maxWidth: 420,
  // padding: "30px",
}));

export const BannerImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  // backgroundImage: `url(${src})`,
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "center",
  width: "450px",
  [theme.breakpoints.down("md")]: {
    width: "300px",
    display: "none",
  },
  [theme.breakpoints.down("sm")]: {
    width: "320px",
    height: "300px",
  },
}));

export const BannerTitle = styled(Typography)(({ matches, theme }) => ({
  marginBottom: "20px",
  fontWeight: "bold",
  color: "white",
}));

export const BannerDescription = styled(Typography)(({ theme }) => ({
  lineHeight: 1.25,
  letterSpacing: 1.25,
  marginBottom: "3em",
  color: "white",
  [theme.breakpoints.down("md")]: {
    lineHeight: 1.15,
    letterSpacing: 1.15,
    marginBottom: "1.5em",
  },
}));

export const CompetitionButton = styled(Button)(({ theme }) => ({
  padding: "10px 20px",
  borderRadius: "25px",
}));

export const BannerShopButton = styled(Button)(({ theme }) => ({
  padding: "10px 20px",
  color: Colors.white,
  width: "250px",
  borderRadius: "25px",
  background: "#e1a24f",
  fontWeight: "bold",
  fontSize: "16px",
  [theme.breakpoints.down("sm")]: {
    padding: "10px",
    fontSize: "14px",
  },
}));
