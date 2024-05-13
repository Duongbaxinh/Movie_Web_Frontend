import {
  Box,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography, useTheme
} from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";


function MyList(props) {
  const { Data } = props;
  const colors = useTheme()
  return (
    <Box>
      <Typography whiteSpace="nowrap" variant="h3" height="24px">
        {Data[0].title}
      </Typography>
      <List
        disablePadding
        sx={{
          color: Data[0].title != "undefined" ? "red" : "yellow",
        }}
      >
        {Data.map((item, index) => (
          <ListItem
            key={index}
            sx={{
              padding: "0",
            }}
          >
            <ListItemText key={index}>
              <Typography
                variant="subtitle1"
                component={Link}
                href={item.url}
                sx={{
                  color: colors.palette.my_white.main,
                  textDecorationLine: "none",
                  "&:hover": {
                    color: grey[500],
                  },
                }}
              >
                {item.name}
              </Typography>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default MyList;
