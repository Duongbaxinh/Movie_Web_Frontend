import { Link } from "@mui/material";
import React from "react";
import { SwiperSlide } from "swiper/react";
import Slidecard from '../../../atom/Slidecard';
import "./styles.scss";

function Series(props) {
  const { dataSeries } = props;
  return (
    <div className="Series__list" style={{
      position: 'absolute'
    }}>
      <Slidecard
        nameCard={"Seriess"}
        preView={5}
        width={"166px"}
        height={"304px"}
        title={"Seriess"}
      >
        {dataSeries?.map(({ id, avatar }) => (
          <SwiperSlide key={id}>
            <Link >
              <li key={id} className="Series__item"
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

export default Series;
