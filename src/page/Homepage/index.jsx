import dataLive from "@/assets/data/dataLive";
import LiveStream from "@/components/molecule/LiveStream";
import NewPhim from "@/components/molecule/NewFilm";
import Pop from "@/components/molecule/Pop";
import ShopItem from "@/components/molecule/ShopItem";
import Top from "@/components/molecule/Top";
import React, { useState } from "react";
import BanerSlide from "../../components/molecule/BanerSlide";
import useFetch from "../../hooks/useFetch";
// import { SeriesData } from "../../lib/data/Series.data";

function Hompage(props) {
  const { data: dataSeries, isLoading } = useFetch('GET', 'https://movie-web-backend-1-bujd.onrender.com/api/v1/seris')
  const { data: dataMovie } = useFetch('GET', 'https://movie-web-backend-1-bujd.onrender.com/api/v1/movies')
  const [translate, setTranslate] = useState(0);

  const handleTranslateRight = () => {
    setTranslate(translate - 1183);
  };
  const handleTranslateleft = () => {
    if (translate < 0) {
      setTranslate(translate + 1183);
    }
  };
  console.log("check data Series", dataSeries)
  if (isLoading) return "loading"
  console.log("check data Series", dataSeries)
  return (

    <div>

      <BanerSlide
        handleTranslateRight={handleTranslateRight}
        handleTranslateleft={handleTranslateleft}
        translate={translate}
        data={dataSeries}
      />
      <LiveStream data={dataLive} />
      <ShopItem />
      <NewPhim data={dataMovie} />
      <Pop
        title={"Pop Đề Cử"}
        imageURL={
          "https://res.cloudinary.com/dwu92ycra/image/upload/v1680582045/POP/POP_mrpdxg.webp"
        }
        name={"Thám Tử Lừng Danh Conan: Nàng Dâu Halloween - Tập full"}
        release_year={2020}
        time={12}
      />
      <Top data={dataMovie} />
    </div>
  );
}

export default Hompage;
