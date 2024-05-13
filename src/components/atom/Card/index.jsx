import { Box, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import BoxCard from "./BoxCard";
Card.propTypes = {};

function Card(props) {
  const theme = useTheme();
  const { Urlimage, title, height, width, form, episode, anouncement, top } =
    props;
  console.log('check urlImage ::::: ', Urlimage)
  const anounce = (anouncement) => {
    return (
      <Stack
        justifyContent="center"
        alignItems="center"
        borderRadius="5px"
        position="absolute"
        width="85px"
        height="24px"
        top="8px"
        left="10px"
        sx={{ background: "red" }}
      >
        {" "}
        <Typography
          component="span"
          fontSize="0.8rem"
          fontWeight="600"
          color={theme.palette.my_white.main}
          textTransform="uppercase"
        >
          {" "}
          {anouncement}
        </Typography>
      </Stack>
    );
  };
  const topF = (top) => {
    return (
      <Typography
        sx={{
          WebkitTextFillColor: "transparent",
          WebkitTextStroke: " 1px red",
          WebkitBackgroundClip: "text",
          backgroundImage: " linear-gradient(red 39%, transparent)",
          fontSize: "200px",
          fontWeight: "800",
          position: "absolute",
          top: "-68px",
          left: "-23px",
          zIndex: "9999",
        }}
      >
        {top}
      </Typography>
    );
  };
  const chapter1 = (form, episode) => {
    return (
      <Stack
        direction="row"
        gap="10px"
        mt="10px"
        color={theme.palette.my_white.main}
      >
        <Stack
          justifyContent="center"
          alignItems="center"
          borderRadius="4px"
          width="85px"
          height="23px"
          sx={{ backgroundColor: "green" }}
        >
          {form}
        </Stack>
        <Typography variant="subtitle1">{episode} tập</Typography>
      </Stack>
    );
  };

  return (
    <Box>
      <Box>
        <BoxCard height={height} width={width} position="relative">
          <img
            src={Urlimage}
            width="100%"
            height="100%"
            style={{ transition: "0.25s ease", borderRadius: "5px", minWidth: "174px" }}
          />
          {anouncement && anounce(anouncement)}
        </BoxCard>
        {top && topF(top)}
        <Typography
          variant="h2"
          mt="8px"
          color={theme.palette.my_white.main}
          textOverflow="ellipsis"
          overflow="hidden"
          width="100%"
          whiteSpace="nowrap"
        >
          {title}
        </Typography>
        {(form || episode) && chapter1(form, episode)}
      </Box>
    </Box>
  );
}

export default Card;
