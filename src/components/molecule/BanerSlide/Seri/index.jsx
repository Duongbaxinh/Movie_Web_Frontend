import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React, { useEffect, useState } from "react";
import Slidecard from '../../../atom/Slidecard'
import Card from '../../../atom/Card'
import "./styles.scss";
import { SwiperSlide } from "swiper/react";
import { Link } from "@mui/material";

function Seri(props) {
  const { dataSeri } = props;
  return (
    <div className="seri__list" style={{
      position: 'absolute',
      bottom: '-150px'
    }}>
      <Slidecard
        nameCard={"Seris"}
        preView={5}
        width={"166px"}
        height={"304px"}
        title={"Seris"}
      >
        {dataSeri?.map(({ id, banner, thumbnail, sr_avatar }) => (
          <SwiperSlide key={id} style={{ flexShrink: 1 }}>
            <Link >
              <li key={id} className="seri__item"
              ><a href={`/watch/${id}`}><img src={sr_avatar} alt="" /></a>
              </li>
            </Link>
          </SwiperSlide>
        ))}
      </Slidecard>
    </div>
  );
}

export default Seri;
