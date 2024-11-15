import { Link } from "@mui/material";
import React from "react";
import { SwiperSlide } from "swiper/react";
import Slidecard from '../../../atom/Slidecard';
import "./styles.scss";

function Seri(props) {
  const { dataSeri } = props;
  return (
    <div className="seri__list" style={{
      position: 'absolute'
    }}>
      <Slidecard
        nameCard={"Seris"}
        preView={5}
        width={"166px"}
        height={"304px"}
        title={"Seris"}
      >
        {dataSeri?.map(({ id, avatar }) => (
          <SwiperSlide key={id}>
            <Link >
              <li key={id} className="seri__item"
              ><a href={`/watch/${id}`}>
                  <img src={avatar} alt="" /></a>
              </li>
            </Link>
          </SwiperSlide>
        ))}
      </Slidecard>
    </div>
  );
}

export default Seri;
