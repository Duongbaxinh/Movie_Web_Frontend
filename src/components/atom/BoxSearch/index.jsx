import { Box, Link, Stack, Typography, useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
BoxSearch.propTypes = {};
function BoxSearch({ searchData }) {
  const theme = useTheme();
  return (
    <Stack gap="10px" flexGrow="1">
      <Typography
        variant="subtitle1"
        sx={{
          textTransform: "uppercase",
        }}
      >
        Video
      </Typography>
      <Stack
        direction="row"
        flexWrap="wrap"
        gap="5px"
        sx={{
          width: "auto",
        }}
      >
        {searchData?.map((item, index) => (
          <Link
            key={index}
            href={`/search/${item.name}`}
            sx={{
              textDecorationLine: "none",
            }}
          >
            <Typography
              variant="body1"
              component={Box}
              sx={{
                color: theme.palette.my_white.main,
                p: "5px",
                borderRadius: "5px",
                background: grey[800],
              }}
              key={item._id}
            >
              {item.name}
            </Typography>
          </Link>
        ))}
      </Stack>
    </Stack>
  );
}

export default BoxSearch;
