import React from "react";
import { SwiperSlide } from "swiper/react";
import { ShopIcon } from "@/assets/svg/ShopIcon";
import dataLive from "@/assets/data/dataLive";
import Card from "@/components/atom/Card";
import Slidecard from "@/components/atom/Slidecard";
import { Link } from "@mui/material";

function LiveStream({ data }) {
  return (
    <Slidecard
      nameCard={"LiveStream"}
      preView={5}
      width={"203px"}
      height={"114px"}
      title={"Livestream Anime Tập Mới Mỗi Ngày ✨"}
      icon={
        <ShopIcon
          color="primary"
          fontSize="large"
          sx={{ marginBottom: "-5px" }}
        />
      }
    >
      {data !== null &&
        data.map(({ id, name, avatar }) => (
          <SwiperSlide key={id}>
            <Link href={`/watch/${id}`}>
              <Card
                title={name}
                Urlimage={avatar}
                anouncement={"sẽ diễn ra"}
                width={"203px"}
                height={"114px"}
              />
            </Link>
          </SwiperSlide>
        ))}
    </Slidecard>
  );
}

export default LiveStream;
