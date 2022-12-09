import { Container, Grid, ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import { ActionIconsContainerDesktop, Advertisement, AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import Actions from "./actions";
import { Link } from "react-router-dom";
import { Colors } from "../../styles/theme";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function AppbarDesktop({ matches }) {
  const Component = ActionIconsContainerDesktop;
  return (
    <Grid
      style={{
        backgroundImage: `url("https://assets-global.website-files.com/5e39e095596498a8b9624af1/5f6e93d250a6d04f4eae9f02_Backgrounds-WFU-thumbnail-(size).jpg")`,
        height: "600px",
        backgroundSize: "100% 100%",
        marginBottom: "40px",
      }}
    >
      <Container>
        <Advertisement />
      </Container>
      <AppbarContainer>
        <AppbarHeader variant="h6">
          <Link style={{ textDecoration: "none" }} to="/">
            My
          </Link>
        </AppbarHeader>
        <MyList type="row">
          <ListItem style={{ borderRight: "1px solid #fff", justifyContent: "center" }}>
            <Link style={{ textDecoration: "none", color: "#fff" }} to="/product">
              Categories
            </Link>
          </ListItem>
          <ListItem style={{ borderRight: "1px solid #fff", justifyContent: "center" }}>
            <Link style={{ textDecoration: "none", color: "#fff" }} to="/product">
              Categories
            </Link>
          </ListItem>
          <ListItem style={{ borderRight: "1px solid #fff", justifyContent: "center" }}>
            <Link style={{ textDecoration: "none", color: "#fff" }} to="/product">
              Categories
            </Link>
          </ListItem>
          <ListItem style={{ borderRight: "1px solid #fff", justifyContent: "center" }}>
            <Link style={{ textDecoration: "none", color: "#fff" }} to="/product">
              Categories
            </Link>
          </ListItem>
          <ListItem style={{ justifyContent: "center" }}>
            <Link style={{ textDecoration: "none", color: "#fff" }} to="/product">
              Categories
            </Link>
          </ListItem>
        </MyList>
        <Component>
          <MyList type="row">
            <Grid sx={{ display: "flex", justifyContent: "center" }}>
              <ListItemButton
                sx={{
                  justifyContent: "center",
                  padding: "8px",
                  paddingTop: "38px",
                  marginBottom: "30px",
                }}
                className="lang"
              >
                <ListItemIcon
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    color: Colors.white,
                    minWidth: "20px",
                  }}
                >
                  UZ
                </ListItemIcon>
              </ListItemButton>
              <ListItemButton
                sx={{
                  justifyContent: "center",
                  padding: "8px",
                  paddingTop: "38px",
                  marginBottom: "30px",
                }}
              >
                <ListItemIcon
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    color: Colors.white,
                    minWidth: "20px",
                  }}
                >
                  RU
                </ListItemIcon>
              </ListItemButton>
            </Grid>
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
                Kabinetga kirish
              </ListItemIcon>
            </ListItemButton>
          </MyList>
        </Component>
        {matches ? <Actions /> : null}
      </AppbarContainer>
    </Grid>
  );
}
