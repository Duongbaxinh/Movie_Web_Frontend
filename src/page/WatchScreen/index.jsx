import { AppIcon } from "@/assets/svg/AppIcon";
import { ShareIcon } from "@/assets/svg/ShareIcon";
import Detail from "@/components/atom/Detail";
import Interact from "@/components/atom/Interact";
import { Box, Link, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function WatchScreen() {
  const colors = useTheme()
  const { id } = useParams()
  const link = ["genre", "country"];
  const exeption = [
    "sr_description",
    "updatedAt",
    "createdAt",
    "fileName",
    "video",
    "sr_avatar",
    "sr_background",
    "sr_thumbnail",
    "id",
    "time",
    "mainName",
    "trailler",
    "seriData"
  ];
  const { data: dataSeri } = useFetch('GET', `http://localhost:8080/api/v1/seri/${id}`)
  const { data: dataMovie } = useFetch('GET', `http://localhost:8080/api/v1/movie/seri/${id}`)
  if (!dataSeri) return <h1>Loading...</h1>
  return (
    <Box>
      <Stack width="100%" position="relative">
        <Stack
          zIndex="0"
          height="600px"
          top="0"
          left="0"
          sx={{
            backgroundImage: `url(${dataSeri?.sr_background})`,
            objectFit: "contain",
            backgroundPositionY: "-200px",
            backgroundSize: "100%",
            "&::before": {
              content: "' '",
              width: "100%",
              height: "100%",
              top: "-100px",
              lef: "0",
              zIndex: "1",
              boxShadow: `300px -100px 200px 84px black inset`,
            },
          }}
        ></Stack>
        <Box position="relative" top="-150px">
          <Stack width="100%" height="100%" padding=" 0 70px" gap="20px">
            <Stack gap="20px">
              <Typography variant="h1" >
                {dataSeri?.sr_name}~{dataSeri?.sr_genre}{" "}
                <AppIcon htmlColor={colors.palette.my_white.main} />
              </Typography>{" "}
              <Stack direction="row" gap="5px">
                <Typography variant="subtitle1">Tập mới nhất</Typography>
                <Link
                  href={`/views/${dataMovie && dataMovie[0]?.id}`}
                  variant="subtitle1"
                  color={colors.palette.blue.main}
                >
                  Xem ngay
                </Link>
              </Stack>
            </Stack>
            <Stack gap="20px">
              <Stack
                direction="row"
                height="40px"
                justifyContent="flex-start"
                alignItems="center"
                gap="20px"
              >
                <Stack
                  justifyContent="center"
                  alignItems="center"
                  width="40px"
                  height="40px"
                  borderRadius="50%"
                  sx={{ border: "1px solid white" }}
                >
                  <ShareIcon />
                </Stack>
                <AppIcon />
              </Stack>
            </Stack>
            <Detail Data={dataSeri} exeption={exeption} link={link} />{" "}
          </Stack>{" "}
          <Interact Data={dataSeri} dataMovie={dataMovie} />
        </Box>
      </Stack>
    </Box>
  );
}

export default WatchScreen;
