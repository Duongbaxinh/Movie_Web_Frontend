import AddIcon from "@mui/icons-material/Add";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import React from "react";
import "./styles.scss";

Pop.propTypes = {};

function Pop(props) {
  const { title, imageURL, name, release_year, time } = props;
  return (
    <div className="pop">
      <div className="pop__title">
        <span></span> <p>{title}</p>
      </div>
      <div className="pop__main">
        <img src={`${imageURL}`} alt="" className="pop__main-img" />
        <div className="pop__right">
          <p className="pop__right-title">{name}</p>
          <div className="pop__right-des">
            <p className="pop__right-span" >
              <span>Năm phát hành : {release_year}</span><br />
              <span>Thời lượng : {time}phút</span>
            </p>

          </div>
          <div className="pop__btn">
            <button className="pop__btn-watch">
              {" "}
              <PlayCircleOutlineOutlinedIcon />
              <p className="pop__textButton">Xem Ngay</p>
            </button>
            <button className="pop__btn-love">
              <AddIcon />
              Yêu Thích
            </button>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Pop;
