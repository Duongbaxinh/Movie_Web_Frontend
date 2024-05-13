import React, { useState } from "react";
import { IconButton, InputAdornment, TextField, useTheme } from "@mui/material";

import { red } from "@mui/material/colors";
MyTextFile.propTypes = {};

function MyTextFile(props) {
  const {
    register,
    name,
    placeholder,
    VisibilityIcon,
    typeInput,
    handleEmail,
    message,
    propery,
    valideUserData
  } = props;
  const theme = useTheme();
  const [password, setPassword] = useState(true);
  const [value, setValue] = useState("");
  const handlePassword = () => {
    setPassword(!password);
  };

  return (
    <TextField
      fullWidth
      size="small"
      {...register(name)}
      placeholder={`${placeholder}`}
      // onChange={(e) => {
      //   handleEmail(e, propery);
      // }}
      type={`${password ? typeInput : "text"}`}
      // error={valideUserData === false}
      // helperText={valideUserData === false ? message : undefined}
      InputProps={
        VisibilityIcon
          ? {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handlePassword}>
                  {password ? VisibilityIcon[1] : VisibilityIcon[0]}
                </IconButton>
              </InputAdornment>
            ),
          }
          : null
      }
      sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: red[500],
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
          "&:hover fieldset": {
            borderColor: red[300],
          },
          "&.Mui-focused fieldset": {
            borderColor: red[500],
            height: "50px",
            padding: "0",
            margin: "0",
          },
          "& input": {
            color: theme.palette.my_white.main,
            height: "44px",
            padding: "0 10px",
            fontSize: "medium",
          },
        },
      }}
    ></TextField>
  );
}

export default MyTextFile;
