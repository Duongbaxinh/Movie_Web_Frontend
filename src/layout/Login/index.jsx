import {
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme
} from "@mui/material";
import { grey, red } from "@mui/material/colors";
import axios from "axios";
import React from "react";
import { useForm } from 'react-hook-form';
import { FacebookIcon } from "../../assets/svg/FacebookIcon";
import { GoogleIcon } from "../../assets/svg/GoogleIcon";
import { VisibilityIcon } from "../../assets/svg/VisibilityIcon";
import { VisibilityOffIcon } from "../../assets/svg/VisibilityOffIcon";
import Myform from "../../components/atom/Myform";
import MyTextFile from "../../components/atom/MytTextFile";
import TemplatForm from "../../components/atom/TemplatForm";
import { useNavigate } from "react-router-dom";
function Login() {
  const colors = useTheme()
  const navigate = useNavigate()
  const { register, handleSubmit, formState = { errors } } = useForm()
  const Sociaty = [
    <FacebookIcon fontSize="large" htmlColor={colors.palette.blue.main} />,
    <GoogleIcon fontSize="large" htmlColor={colors.palette.blue.main} />,
  ];

  const onSubmit = async (data) => {
    const { data: dataUser } = await axios.post('http://localhost:8080/api/v1/user/login', {
      email: data.email,
      password: data.password
    })
    const { user, tokens } = dataUser.metadata;
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('accessToken', JSON.stringify(`Bearer ${tokens.accessToken}`))
    localStorage.setItem('isLogin', JSON.stringify(true))
    navigate('/')
  }
  return (
    <TemplatForm>
      <Stack
        position="absolute"
        top="38px"
        gap="28px"
        zIndex="3"
        alignItems="flex-start"
        sx={{
          width: { xs: "450px", md: "520px" },
          backgroundColor: colors.palette.bg_form.main,
          borderRadius: "10px",
          padding: "50px 70px",
          textAlign: "center",
        }}
      >
        <Stack gap="16px">
          <Typography variant="h2" lineHeight="36px">
            Đăng Nhập
          </Typography>
          <Typography variant="subtitle1">
            Bạn có thể đăng nhập với tài khoản POPS hoặc POPS Kids.
          </Typography>
        </Stack>
        <Myform TitleButton={"Đăng Nhập"}
          handleSumit={handleSubmit(onSubmit)}>
          <MyTextFile
            placeholder={"Nhập username"}
            register={register}
            name='email'
          />
          <MyTextFile
            placeholder={"Nhập mật khẩu"}
            typeInput={"password"}
            register={register}
            name="password"
            VisibilityIcon={[
              <VisibilityIcon htmlColor={useTheme().palette.my_white.main} />,
              <VisibilityOffIcon
                htmlColor={useTheme().palette.my_white.main}
              />,
            ]}
          />
        </Myform>
        <Stack width="100%" gap="28px">
          <Typography variant="h3" color={red[900]}>
            Quên mật khẩu
          </Typography>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            gap="6px"
          >
            <Box
              width="50px"
              height="50px"
              padding="3px"
              borderRadius="5px"
              sx={{
                backgroundColor: grey[700],
              }}
            >
              <img
                style={{
                  width: "100%",
                }}
                src="https://cdn.popsww.com/popsapp/assets/images/account/qr-code.png"
                alt=""
              />
            </Box>

            <Typography variant="h3">Đăng Nhập Bằng Mã QR</Typography>
          </Stack>
          <Divider
            textAlign="center"
            sx={{
              "&::before": {
                borderTop: "2px solid #ffffff",
                top: "0",
              },
              "&::after": {
                borderTop: "2px solid #ffffff",
                top: "0",
              },
            }}
          >
            <Typography variant="subtitle2"> hoặc Tiếp tục với</Typography>
          </Divider>
          <Stack
            width="100%"
            height="70px"
            direction="row"
            justifyContent="center"
            alignItems="center"
            gap="50px"
          >
            {Sociaty.map((icon, index) => (
              <IconButton
                key={index}
                href={`/login/google`}
                sx={{
                  width: "64px",
                  height: "64px",
                  background: colors.palette.my_white.main,
                  "&:hover": {
                    background: colors.palette.my_white.main,
                  },
                }}
              >
                {icon}
              </IconButton>
            ))}
          </Stack>
          <Typography variant="subtitle1" fontWeight="700" mt="12px">
            Chưa có tài khoản ? Đăng ký
          </Typography>
        </Stack>
      </Stack>
    </TemplatForm>
  );
}

export default Login;
