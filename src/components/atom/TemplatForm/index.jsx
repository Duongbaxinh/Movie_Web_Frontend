import React from "react";
import { Stack, useTheme } from "@mui/material";
function TemplatForm(props) {
  const them = useTheme();
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      width="100%"
      position="relative"
      gap="28px"
      sx={{
        color: them.palette.my_white.main,
        height: "850px",
        backgroundImage: `url(https://res.cloudinary.com/dwu92ycra/image/upload/v1680582045/POP/POP_mrpdxg.webp)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        "&:before": {
          position: "absolute",
          width: "100%",
          height: "100%",
          top: "0",
          left: "0",
          content: `""`,
          backgroundColor: `rgba(0, 0, 0, 0.5)`,
        },
      }}
    >
      {props.children}
    </Stack>
  );
}

export default TemplatForm;
