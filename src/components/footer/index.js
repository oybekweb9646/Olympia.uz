import styled from "@emotion/styled";
import { Grid, List, ListItemText, Typography, Divider } from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "../../styles/theme";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FooterTitle } from "../../styles/footer";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import RoomIcon from "@mui/icons-material/Room";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#43427d",
        color: Colors.white,
        p: { xs: 4, md: 10 },
        pt: 12,
        pb: 12,
        mt: 10,
        fontSize: { xs: "12px", md: "14px" },
      }}
    >
      <Grid container spacing={6}>
        <Grid item md={4} lg={4} display="flex">
          <Grid padding="5px">
            <FooterTitle variant="body1">Olimpia.uz</FooterTitle>
            <Typography variant="caption2">World education community</Typography>
            <Box
              sx={{
                mt: 4,
                color: Colors.dove_gray,
                display: "flex",
              }}
            >
              <Grid display="flex" borderRight="1px solid white">
                <FacebookIcon sx={{ mr: 1 }} />
                <Typography sx={{ mr: 1 }}>Facebook</Typography>
              </Grid>
              <Grid display="flex" borderRight="1px solid white">
                <InstagramIcon sx={{ mr: 1, ml: 1 }} />
                <Typography sx={{ mr: 1 }}>Instagram</Typography>
              </Grid>
              <Grid display="flex">
                <TelegramIcon sx={{ mr: 1, ml: 1 }} />
                <Typography>Telegram</Typography>
              </Grid>
            </Box>
          </Grid>
          <Grid>
            <Divider orientation="vertical" style={{ borderColor: "#fff" }} variant="middle" />
          </Grid>
        </Grid>
        <Grid item md={4} lg={4} display="flex">
          <Grid>
            <List>
              <ListItemText>
                <Grid display="flex" alignItems="center">
                  <CallIcon sx={{ mr: 1 }} />
                  <Grid flex-direction="column">
                    <Typography color="#ffb8bacf">Telefon</Typography>
                    <Typography>+998991234567</Typography>
                    <Typography>c 9:00 do 18:00</Typography>
                  </Grid>
                </Grid>
              </ListItemText>
              <ListItemText>
                <Grid display="flex" alignItems="center">
                  <MailIcon sx={{ mr: 1 }} />
                  <Grid flex-direction="column">
                    <Typography>El.pochta</Typography>
                    <Typography> uz.olimpia@gmail.com</Typography>
                  </Grid>
                </Grid>
              </ListItemText>
              <ListItemText display="flex" alignItems="center">
                <Grid display="flex" alignItems="center">
                  <RoomIcon sx={{ mr: 1 }} />
                  <Grid flex-direction="column">
                    <Typography>Adres</Typography>
                    <Typography>Toshkent, Yakkasaroy tumani, Kichik Mirobod, 5</Typography>
                  </Grid>
                </Grid>
              </ListItemText>
            </List>
          </Grid>
          <Grid marginLeft="auto">
            <Divider orientation="vertical" style={{ borderColor: "#fff" }} variant="middle" />
          </Grid>
        </Grid>
        <Grid item md={4} lg={4}>
          <List>
            <ListItemText>
              <Typography color="#ffb8bacf" lineHeight={2} variant="caption2">
                O kompanii
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography color="#ffb8bacf" lineHeight={2} variant="caption2">
                Nashi konkursi
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography color="#ffb8bacf" lineHeight={2} variant="caption2">
                Seli
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography color="#ffb8bacf" lineHeight={2} variant="caption2">
                Raspisanie
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography color="#ffb8bacf" lineHeight={2} variant="caption2">
                Aexiv
              </Typography>
            </ListItemText>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
