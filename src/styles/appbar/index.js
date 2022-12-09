import { Container, Grid, IconButton, List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import "@fontsource/montez";
import { Colors, DrawerWidth } from "../theme";
import { textPopUpTop } from "../../animation";

export const AppbarContainer = styled(Container)(() => ({
  display: "flex",
  marginTop: 4,
  justifyContent: "center",
  alignItems: "center",
  padding: "2px 8px",
}));

export const Advertisement = styled(Box)(() => ({
  height: "80px",
  width: "100%",
  backgroundColor: "#e8e8e8",
  marginBottom: "-14px",
}));

export const AppbarHeader = styled(Typography)(() => ({
  padding: "4px",
  flexGrow: 1,
  fontSize: "4em",
  fontFamily: '"Montez", "cursive"',
  color: Colors.secondary,
  "&:hover": {
    animation: `${textPopUpTop} 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both`,
  },
}));

export const ActionIconsContainerMobile = styled(Box)(() => ({
  display: "flex",
  background: "#fefefe",
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  alignItems: "center",
  zIndex: 99,
  borderTop: `1px solid ${Colors.border}`,
}));

export const ActionIconsContainerDesktop = styled(Box)(() => ({
  flexGrow: 0,
}));

export const MyList = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 3,
  justifyContent: "center",
  alignItems: "center",
}));

export const DrawerCloseButton = styled(IconButton)(() => ({
  position: "absolute",
  top: 10,
  left: DrawerWidth,
  zIndex: 1999,
}));

export const MobileCabinet = styled(Box)(() => ({
  width: "50px",
  height: "40px",
  background: "#f3f4ff",
  borderTopLeftRadius: "20px",
  borderBottomLeftRadius: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const MobileContainer = styled(Grid)(({ theme }) => ({
  backgroundImage: `url("https://assets-global.website-files.com/5e39e095596498a8b9624af1/5f6e93d250a6d04f4eae9f02_Backgrounds-WFU-thumbnail-(size).jpg")`,
  height: "380px",
  backgroundSize: "100% 100%",
  [theme.breakpoints.down("sm")]: {
    backgroundColor: "red",
    height: "480px",
  },
}));
