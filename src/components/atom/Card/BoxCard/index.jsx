import { Box } from "@mui/material";
import React from "react";

BoxCard.propTypes = {};

function BoxCard(props) {
  return (
    <Box
      {...props}
      mt="20px"
      sx={{
        overflow: "hidden",
        borderRadius: "5px",
        "&:hover": {
          boxShadow: "0 0 20px red",
        },
        "&:hover img": {
          transform: "scale(1.1)",
        },
      }}
    >
      {props.children}
    </Box>
  );
}

export default BoxCard;
