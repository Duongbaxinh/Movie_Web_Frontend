import { Link } from "@mui/material";
import React from "react";
import { SwiperSlide } from "swiper/react";
import Card from "@/components/atom/Card";
import Slidecard from "@/components/atom/Slidecard";

NewPhim.propTypes = {};

function NewPhim({ data }) {
  return (
    <Slidecard
      nameCard={"NewPhim"}
      preView={5}
      width={"166px"}
      height={"304px"}
      title={'Phim Mới Xem Ngay !'}
    >
      {data?.map(({ id, mv_name, mv_thumbnail, mv_dubbing, mv_episode }, index) => (
        <SwiperSlide key={index} style={{ flexShrink: 1 }}>
          <Link href={`/views/${id}`}>
            {" "}
            <Card
              title={mv_name}
              Urlimage={mv_thumbnail}
              form={mv_dubbing}
              episode={mv_episode}
              width={"212px"}
              height={"304px"}
            />
          </Link>
        </SwiperSlide>
      ))}
    </Slidecard>
  );
}

export default NewPhim;
