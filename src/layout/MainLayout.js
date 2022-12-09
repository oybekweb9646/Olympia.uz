import { Container, Grid, Stack, ThemeProvider } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Appbar from "../components/appbar";
import { UIProvider } from "../context/ui";
import theme from "../styles/theme";
import AppDrawer from "../components/drawer";

export const MainLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container
        disableGutters
        maxWidth="xl"
        sx={{
          background: "#fff",
        }}
      >
        <Stack>
          <UIProvider>
            <Appbar />
            <Outlet />
            <Footer />
            <AppDrawer />
          </UIProvider>
        </Stack>
      </Container>
    </ThemeProvider>
  );
};
