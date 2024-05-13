import { Box, Stack, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import BoxSearch from "@/components/atom/BoxSearch";
import ListVideos from "../ListVideos";
All.propTypes = {};
function All({ dataMovie, isLoading, handleActive }) {

  const searchData = [
    { id: 1, name: "Doremon" },
    { id: 2, name: "Naruto Shippuden" },
    { id: 3, name: "Detective conan" },
    { id: 4, name: "Boruto" },
    { id: 5, name: "one piece" },
    { id: 6, name: "Dragon supper" },
  ];
  return (
    <Stack mt="30px" direction="row" sx={{
      gap: { sm: "30px", xs: "5px" },
      width: { lg: "100%", sm: "95%", xs: "100%" },
      flexWrap: { sm: 'nowrap', xs: "wrap" }
    }}>
      <Stack width={{ lg: "80%", md: "70%", sm: "65%", xs: "100%" }}>
        <Stack width="100%" direction="row" justifyContent="space-between">
          <Typography variant="h3">Video</Typography>
          <Typography variant="h3" color={red[500]}
            sx={{ cursor: "pointer" }}
            onClick={() => { handleActive(1) }}
          >
            Xem tất cả video
          </Typography>
        </Stack>
        <Box width="100%">
          <ListVideos dataMovie={dataMovie} isLoading={isLoading} />
        </Box>
      </Stack>
      <Box width={{ lg: "200px", xs: "auto" }} >
        <BoxSearch searchData={searchData} />
      </Box>
    </Stack >
  );
}

export default All;
