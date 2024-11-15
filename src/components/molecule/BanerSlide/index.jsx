import React, { useEffect, useState } from "react";
import Seri from "./Seri";
import "./styles.scss";
import { seriData } from "../../../lib/data/seri.data";
BanerSlide.propTypes = {};

function BanerSlide(props) {
  const { data } = props;
  const [visible, setVisible] = useState(0);
  const [timeoutId, setTimeoutId] = useState(null);
  const handleVisible = (id) => {
    clearTimeout(timeoutId);
    setVisible(id);
  };

  useEffect(() => {
    const newTimeoutId = setTimeout(() => {
      if (visible < seriData?.length - 1) {
        setVisible(visible + 1);
      } else {
        clearTimeout(newTimeoutId);
        setVisible(1);
      }
    }, 3000);
    setTimeoutId(newTimeoutId);
    return () => clearTimeout(timeoutId);
  }, [visible]);

  return (
    <div className="banner-slide">
      {data?.map(({ id, avatar, thumbnail, banner, release }, index) => (
        <div
          key={id}
          className={`banner-slide__item ${index != visible ? "visible" : ""}`}
        >
          <div className="banner-slide__tablet">
            <img src={thumbnail} alt="" className="banner-slide__imageTablet" />
            <p className="banner-slide__leased">
              Năm Phát Hành <span>{release}</span>
            </p>
            <a className="banner-slide__link" href={`/watch/${id}`}>
              <button className="banner-slide__btn"
              > Chi Tiết</button></a>
          </div>
          <div className="banner-slide__imageUrl">
            <img src={banner} alt="" />
          </div>
        </div>
      ))}
      <ul className="banner-slide__list">
        {data?.map(({ id }, index) => (
          <li
            className={`${index === visible ? "outStanding" : ""}`}
            key={id}
            onClick={() => handleVisible(index)}
          ></li>
        ))}
      </ul>
      {/* <Seri
        dataSeri={data}
      /> */}
    </div>
  );
}

export default BanerSlide;
