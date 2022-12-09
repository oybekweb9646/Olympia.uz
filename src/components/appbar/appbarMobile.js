import { AppbarContainer, AppbarHeader, MobileCabinet, MobileContainer } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import Actions from "./actions";
import { Grid, IconButton } from "@mui/material";
import { useUIContext } from "../../context/ui";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function AppbarMobile({ matches }) {
  const { setDrawerOpen } = useUIContext();
  return (
    <MobileContainer>
      <AppbarContainer>
        <IconButton onClick={() => setDrawerOpen(true)}>
          <MenuIcon />
        </IconButton>
        <AppbarHeader textAlign={"center"} variant="h4">
          My Bags
        </AppbarHeader>
        <IconButton sx={{ position: "absolute", right: 0, padding: 0 }}>
          <MobileCabinet>
            <AccountCircleIcon color="success" />
          </MobileCabinet>
        </IconButton>
        <Actions matches={matches} />
      </AppbarContainer>
    </MobileContainer>
  );
}
