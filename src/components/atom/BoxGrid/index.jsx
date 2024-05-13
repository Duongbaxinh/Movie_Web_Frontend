import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

BoxGrid.propTypes = {};

function BoxGrid(props) {
  return (
    <Box
      display="grid"
      gridTemplateColumns="1fr 1fr"
      gridTemplateRows="48px auto"
    >
      {props.children}
    </Box>
  );
}

export default BoxGrid;
