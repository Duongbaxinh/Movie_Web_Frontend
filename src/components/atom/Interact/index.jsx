import React, { useState } from "react";
import PropTypes from "prop-types";
import Tap from "./Tap";
import XemThem from "./XemThem";
import Comment from "./Comment";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { grey, red } from "@mui/material/colors";


function Interact({ Data, dataMovie }) {
  const colors = useTheme()
  const Select = ["Tập", "Xem thêm", "Bình luận"];
  const Component = [
    <Tap key={1} data={dataMovie} />,
    <XemThem key={2} queryName={Data.mainName} />,
    <Comment key={3} />,
  ];
  const [isActive, setIsActive] = useState(1);
  const handleFull = () => {
    setFull(!full);
  };
  return (
    <Box>
      <Stack
        width="100%"
        direction="row"
        justifyContent="center"
        alignItems="center"
        height="50px"
        mb="23px"
        gap="15px"
        sx={{
          backgroundColor: grey[900],
        }}
      >
        {Select.map((item, index) => (
          <Typography
            variant="h3"
            onClick={() => setIsActive(index)}
            key={index}
            sx={{
              cursor: "pointer",
              color: isActive === index ? red[200] : colors.palette.my_white.main,
            }}
          >
            {item}
          </Typography>
        ))}
      </Stack>
      {Component.map((item, index) => (isActive === index ? item : ""))}
    </Box>
  );
}

export default Interact;
