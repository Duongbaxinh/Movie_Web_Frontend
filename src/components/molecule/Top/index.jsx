import React from "react";
import dataNewPhim from "@/assets/data/dataNewPhim";
import { ShopIcon } from "@/assets/svg/ShopIcon";
import Slidecard from "@/components/atom/Slidecard";
import Card from "@/components/atom/Card";
import { SwiperSlide } from "swiper/react";
import { Link } from "@mui/material";
Top.propTypes = {};
function Top({ data }) {
  return (
    <Slidecard
      nameCard={"Top"}
      preView={5}
      width={"259px"}
      height={"146px"}
      title={"Phim Mới - Xem Ngay!"}
      icon={
        <ShopIcon
          color="primary"
          fontSize="large"
          sx={{ marginBottom: "-5px" }}
        />
      }
    >
      {data?.map(({ id, name, avatar }, index) => (
        <SwiperSlide key={id} style={{ flexShrink: 1 }}>
          <Link href={`/views/${id}`}>
            <Card
              title={name}
              Urlimage={avatar}
              top={index + 1}
              width={"212px"}
              height={"304px"}
            />
          </Link>
        </SwiperSlide>
      ))}
    </Slidecard>
  );
}

export default Top;
