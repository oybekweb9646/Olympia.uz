import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from "../../styles/banner";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer>
      <Grid container>
        <Grid item md={6}>
          <BannerContent>
            <BannerTitle variant="h4">
              consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna
            </BannerTitle>

            <BannerDescription variant="subtitle">
              Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et
              dolore magna
            </BannerDescription>

            <Grid>
              <BannerShopButton color="primary">
                Shop Now <ArrowCircleRightOutlinedIcon color="info" sx={{ marginLeft: "auto " }} />
              </BannerShopButton>
            </Grid>
          </BannerContent>
        </Grid>
        <Grid item md={6}>
          <BannerImage src="/images/banner/banner.png" />
        </Grid>
      </Grid>
    </BannerContainer>
  );
}
