import { Grid, ListItemButton, ListItemIcon } from "@mui/material";
import { ActionIconsContainerMobile, MyList } from "../../styles/appbar";
import { Colors } from "../../styles/theme";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Actions() {
  const Component = ActionIconsContainerMobile;

  return (
    <Component>
      <MyList type="row">
        <Grid sx={{ display: "flex", justifyContent: "center" }}></Grid>
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: Colors.white,
              alignItems: "center",
            }}
          >
            <AccountCircleIcon color="success" sx={{ marginRight: "5px" }} />
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: Colors.white,
              alignItems: "center",
            }}
          >
            <AccountCircleIcon color="success" sx={{ marginRight: "5px" }} />
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: Colors.white,
              alignItems: "center",
            }}
          >
            <AccountCircleIcon color="success" sx={{ marginRight: "5px" }} />
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: Colors.white,
              alignItems: "center",
            }}
          >
            <AccountCircleIcon color="success" sx={{ marginRight: "5px" }} />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
    </Component>
  );
}
