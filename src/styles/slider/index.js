import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TopTitle = styled(Box)(() => ({
  width: "150px",
  height: "40px",
  backgroundColor: "#8ddbff",
  borderBottomRightRadius: "20px",
  borderTopRightRadius: "20px",
  borderTopLeftRadius: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  top: "-20px",
  left: 0,
}));
