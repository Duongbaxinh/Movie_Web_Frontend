import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { Navigation, Parallax } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper } from "swiper/react";
import { ArrowBack } from "../../../assets/svg/ArrowBack";

Slidecard.propTypes = {};

function Slidecard(props) {
  const theme = useTheme();
  const sxPoint = theme.breakpoints.values.xs;
  const smPoint = theme.breakpoints.values.sm;
  const mdPoint = theme.breakpoints.values.md;
  const lgPoint = theme.breakpoints.values.lg;
  const xlPoint = theme.breakpoints.values.xl;
  /*
    title tên của slide
    icon trên title
    preView số lượng muốn hiển thị
    nameCard dùng để xử lý chuyển slide
   */
  const { title, icon, preView, nameCard } = props;
  return (
    <Container
      width="100%"
      padding="0 65px"
      sx={{ margin: "28px auto 38px auto" }}
    >
      <Stack
        width="100%"
        direction="row"
        gap="10px"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          height="40px"
          width="10px"
          sx={{ background: "red", borderRadius: "2px" }}
        />
        <Typography
          variant="h1"
          height="40px"
          width="100%"
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
          color={theme.palette.my_white.main}
        >
          {title} {icon}
        </Typography>
        <IconButton
          className={`btn-prev${nameCard}`}
          sx={{
            "&:disabled": {
              opacity: "0.4",
              cursor: "default",
            },
          }}
        >
          <ArrowBack sx={{ color: theme.palette.my_white.main }} />
        </IconButton>
        <IconButton
          className={`btn-next${nameCard}`}
          sx={{
            "&:disabled": {
              opacity: "0.4",
              cursor: "default",
            },
          }}
        >
          <ArrowForwardIosIcon htmlColor={theme.palette.my_white.main} />
        </IconButton>
      </Stack>
      <Swiper
        style={{ padding: "0 8px", width: "100%" }}
        spaceBetween={19}
        parallax={true}
        effect={"fade"}
        modules={[Parallax, Navigation]}
        navigation={{
          prevEl: `.btn-prev${nameCard}`,
          nextEl: `.btn-next${nameCard}`,
        }}
        slidesPerView={preView}
        slidesPerGroup={3}
        speed={500}
        breakpoints={{
          [sxPoint]: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          [mdPoint]: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          [smPoint]: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          [lgPoint]: {
            slidesPerView: preView,
            slidesPerGroup: preView,
          },
          [xlPoint]: {
            slidesPerView: preView,
            slidesPerGroup: preView,
          },
        }}
      >
        {props.children}
      </Swiper>
    </Container>
  );
}

export default Slidecard;
