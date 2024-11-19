import movie from "@/api/movieApi";
import { AppIcon } from "@/assets/svg/AppIcon";
import { ShareIcon } from "@/assets/svg/ShareIcon";
import { AddIcon } from "@/assets/svg/AddIcon";
import { LikeIcon } from "@/assets/svg/LikeIcon";
import { TextIcon } from "@/assets/svg/TextIcon";
import Detail from "@/components/atom/Detail";
import Interact from "@/components/atom/Interact";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Divider, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import useFetch from "../../hooks/useFetch";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

ViewsScreen.propTypes = {};

const link = ["author", "Country", "Category"];

function ViewsScreen(props) {
  const { id } = useParams();
  const { data: dataDetail } = useFetch('GET', `https://movie-web-backend-1-bujd.onrender.com/api/v1/movies/${id}`)
  const Icon = [
    {
      id: 1,
      name: "Thích",
      icon: <LikeIcon htmlColor='white' />,
    },
    {
      id: 2,
      name: "Báo Lỗi",
      icon: <TextIcon htmlColor='white' />,
    },
    {
      id: 3,
      name: "Lưu Lại",
      icon: <AddIcon htmlColor='white' />,
    },
    {
      id: 4,
      name: "Chia Sẻ",
      icon: <ShareIcon htmlColor='white' />,
    },
    { id: 5, name: "Tải POP App", icon: <AppIcon /> },
  ];

  if (!dataDetail) return <h1>Loading...</h1>
  // const infor = () => {
  //   const itemClone = { ...dataDetail }
  //   delete itemClone.updatedAt
  //   delete itemClone.
  //   delete itemClone.createdAt
  //   delete itemClone.SeriesData
  //   delete itemClone.Series_id
  //   delete itemClone.description
  //   delete itemClone.video
  //   delete itemClone.trailler
  //   delete itemClone.avatar
  //   return itemClone
  // }

  return (
    <Box pt="70px">
      {dataDetail && (
        <>
          <Stack padding=" 0 75px" width="100%">
            <Box>
              <video
                controls
                style={{
                  width: "100%",
                  height: "500px",
                  margin: "0 auto",
                }}
              >
                <source src={dataDetail.video} type="video/mp4" />
              </video>
            </Box>
          </Stack>
          <Box>
            <Stack
              direction="row"
              width="100%"
              padding="0 75px"
              justifyContent="space-between"
              sx={{
                flexWrap: { xs: "wrap" },
                gap: { xs: "20px" },
              }}
            >
              {" "}
              <Stack>
                {" "}
                <Stack direction="row" gap="10px" mb="22px">
                  <YouTubeIcon />
                  <Typography variant="h3" color={red[800]}>
                    {dataDetail.SeriesId}~{dataDetail.name}
                  </Typography>
                </Stack>
                <Typography variant="h1">{dataDetail.name}</Typography>
              </Stack>
              <Stack direction="row" gap="15px">
                {Icon.map((item) => (
                  <Box key={item.id} textAlign="center">
                    <IconButton>{item.icon}</IconButton>
                    <Typography
                      whiteSpace="nowrap"
                      variant="subtitle1"
                      mt="22px"
                    >
                      {item.name}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Stack>

            <Box width="100%" p="0 75px">
              {" "}
              <Divider
                sx={{
                  borderColor: grey[200],
                  margin: "20px 0",
                  padding: "0 75px",
                }}
              />
              <Detail
                description={dataDetail.description}
                Data={{
                  name: dataDetail.name,
                  genre: dataDetail.genre,
                  chapter: dataDetail.chapter,
                  dubbing: dataDetail.dubbing,
                  release: dataDetail.release,
                  author: dataDetail.author,
                  actor: dataDetail.actor,
                  time: dataDetail.time
                }} />
            </Box>

            <Interact Data={dataDetail} />
          </Box>
        </>
      )}
    </Box>
  );
}

export default ViewsScreen;
