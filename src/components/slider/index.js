import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Container, Grid } from "@mui/material";
import { TopTitle } from "../../styles/slider";

export const Slider = () => {
  return (
    <Grid
      sx={{
        boxShadow: "0px -4px 3px rgba(17, 17, 26, 0.1);",
      }}
    >
      <Container>
        <Grid sx={{ padding: "50px 50px", position: "relative" }}>
          <Swiper
            breakpoints={{
              300: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              900: {
                slidesPerView: 4,
              },
              1000: {
                slidesPerView: 5,
              },
            }}
            spaceBetween={100}
            slidesPerView={5}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Grid className="sliderBox">Slide 1</Grid>
            </SwiperSlide>
            <SwiperSlide>
              <Grid className="sliderBox">Slide 1</Grid>
            </SwiperSlide>
            <SwiperSlide>
              <Grid className="sliderBox">Slide 1</Grid>
            </SwiperSlide>
            <SwiperSlide>
              <Grid className="sliderBox">Slide 1</Grid>
            </SwiperSlide>
            <SwiperSlide>
              <Grid className="sliderBox">Slide 1</Grid>
            </SwiperSlide>
            <SwiperSlide>
              <Grid className="sliderBox">Slide 1</Grid>
            </SwiperSlide>
            <SwiperSlide>
              <Grid className="sliderBox">Slide 1</Grid>
            </SwiperSlide>
            <SwiperSlide>
              <Grid className="sliderBox">Slide 1</Grid>
            </SwiperSlide>
            <SwiperSlide>
              <Grid className="sliderBox">Slide 1</Grid>
            </SwiperSlide>
          </Swiper>
          <TopTitle>test</TopTitle>
        </Grid>
      </Container>
    </Grid>
  );
};
