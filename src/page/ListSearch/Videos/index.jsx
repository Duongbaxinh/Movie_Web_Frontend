import { Box, Stack } from "@mui/material";
import React from "react";
import BoxSearch from "@/components/atom/BoxSearch";
import ListVideos from "../ListVideos";

Videos.propTypes = {};

function Videos({ dataMovie, isLoading }) {
  const searchData = [
    { id: 1, name: "Doremon" },
    { id: 2, name: "Naruto Shippuden" },
    { id: 3, name: "Detective conan" },
    { id: 4, name: "Boruto" },
    { id: 5, name: "Onepice" },
    { id: 6, name: "Dragon supper" },
  ];
  return (
    <Stack
      mt="30px"
      direction="row"
      width="100%"
      gap="30px"
      flexWrap={{ md: "nowrap", xs: "wrap" }}
    >
      <Box width={{ md: "80%", sm: "100%", xs: "100%" }}>
        <ListVideos dataMovie={dataMovie} isLoading={isLoading} />
      </Box>
      <Box>
        <BoxSearch key={1} searchData={searchData} />
      </Box>
    </Stack>
  );
}

export default Videos;
