import { Box, Stack, Typography } from "@mui/material";
import React from "react";

function FormTap(props) {
  const { data } = props;
  console.log('check data form tap :::::: ', data)
  return (
    <Stack direction="row" gap="16px" width="100%" mt="20px">
      {data && (
        <>
          {" "}
          <Box
            sx={{
              width: "272px",
              height: "auto",
              overflow: "hidden",
              borderRadius: "5px",
              "&:hover": {
                boxShadow: "0px 0px 18px red",
              },
              "&:hover  img": {
                cursor: "pointer",
                filter: "drop-shadow(8px 8px 10px red)",
                transform: "scale(1.1)",
              },
            }}
          >
            <img
              src={data.banner || data.avatar}
              alt={data.banner || data.avatar}
              style={{
                width: "100%",
                height: "100%",
                transition: "0.5s",
              }}
            />
          </Box>
          <Stack justifyContent="space-between" width="414px" gap="12px">
            <Typography variant="h3">
              {data.title || data.name}
            </Typography>
            {props.children}
          </Stack>
        </>
      )}
    </Stack>
  );
}

export default FormTap;
