import { Box, Typography, Link, useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { Component, useEffect, useState } from "react";
import FormTap from "../../FormTap";
import movie from "@/api/movieApi";
import useFetch from "../../../../hooks/useFetch";



const Data = {
  name: `Thám Tử Lừng Danh Conan: Câu Chuyện Về Haibara Ai ~ Chuyến Tàu Sắt
  Bí Ẩn Màu Đen ~ Tập full`,
  time: "1 hour 23 minutes",
  avarta:
    "https://pops-images-vn.akamaized.net/api/v2/containers/file2/cms_thumbnails/horizontal_poster-9fe8f0f24ace-1680747333183-4h5vYtqd.jpg?v=0&maxW=460&format=webp",
};
function XemThem(props) {
  const colors = useTheme()
  const { queryName } = props;
  const { data: SeriesData } = useFetch('GET', 'https://movie-web-backend-1-bujd.onrender.com/api/v1/seris')

  return (
    <Box
      p="32px"
      width={{ xs: "100%", lg: "770px" }}
      m="0 auto"
      borderRadius="10px"
      sx={{
        backgroundColor: grey[900],
      }}
    >
      {/* ---------------- */}
      {SeriesData &&
        SeriesData.map((Series, index) => (
          <Box
            key={Series.id}
            color={colors.palette.my_white.main}
            sx={{
              textDecorationLine: "none",
            }}
            component={Link}
            href={`/watch/${Series.id}`}
          >
            <FormTap data={Series}>
              <Typography variant="subtitle2">
                Năm phát hành: {Series.id}
              </Typography>
              <Typography variant="subtitle2">
                Xep hang: {Series.id}+
              </Typography>
              <Typography variant="subtitle2">
                Nội Dung Bởi: TMS Entertainment
              </Typography>
              <Typography variant="subtitle2">
                {`${Series.title} được mua bản quyền và được cập nhật phát
                sóng mới nhất trên ứng dụng giải trí POPS.`}
              </Typography>
            </FormTap>
          </Box>
        ))}
    </Box>
  );
}

export default XemThem;
