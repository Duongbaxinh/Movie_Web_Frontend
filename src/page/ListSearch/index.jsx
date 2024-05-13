import useFetch from "@/hooks/useFetch";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { red } from "@mui/material/colors";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import All from "./All";
import Videos from "./Videos";

function ListSearch(props) {
  const colors = useTheme();
  const { querySearch } = useParams();
  const [active, setActive] = useState(0);
  const handleActive = (index) => {
    setActive(index)
  }
  // GET MOVIE SEARCH
  const { data, isLoading } = useFetch('GET', `http://localhost:8080/api/v1/movie/search?querySearch=${querySearch}`)
  console.log('check data movie search :::::: ', data)
  const tableApear =
    [
      { _id: 0, component: <All key={0} dataMovie={data} isLoading={isLoading} handleActive={handleActive} /> },
      { _id: 1, component: <Videos key={1} dataMovie={data} isLoading={isLoading} /> }
    ]
  const Select = ["Tất Cả", "Videos", "Truyện Tranh"];
  return (
    <Stack p="0 45px">
      <Stack
        pt="80px"
        height="80px"
        width="100%"
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
        gap="30px"
        sx={{
          color: colors.palette.my_white.main,
        }}
      >
        {Select.map((item, index) => (
          <Typography
            component={Box}
            key={index}
            variant="subtitle1"
            onClick={() => { handleActive(index) }}
            sx={{
              cursor: "pointer",
              borderBottom: active === index ? `1px solid ${red[500]}` : "",
              color: active === index ? red[500] : colors.palette.my_white.main,
            }}
          >
            {item}
          </Typography>
        ))}
      </Stack>
      {tableApear.map((item, index) =>
        item._id === active && item.component
      )}
    </Stack>
  );
}

export default ListSearch;
