import React from "react";
import { SwiperSlide } from "swiper/react";
import { ShopIcon } from "@/assets/svg/ShopIcon";
import dataListImage from "@/assets/data/dataListImage";
import Card from "@/components/atom/Card";
import Slidecard from "@/components/atom/Slidecard";

ShopItem.propTypes = {};

function ShopItem(props) {
  return (
    <Slidecard
      nameCard={"ShopItem"}
      preView={4}
      width={"259px"}
      height={"146px"}
      title={"Merch Xịn Giá Hời tại POPS Shop"}
      icon={
        <ShopIcon
          color="primary"
          fontSize="large"
          sx={{ marginBottom: "-5px" }}
        />
      }
    >
      {dataListImage.map(({ id, title, imageUrl }) => (
        <SwiperSlide key={id} style={{ flexShrink: 1 }}>
          <Card title={title} Urlimage={imageUrl} height={"146px"} />
        </SwiperSlide>
      ))}
    </Slidecard>
  );
}

export default ShopItem;
