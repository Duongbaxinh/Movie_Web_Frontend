import { FacebookIcon } from "@/assets/svg/FacebookIcon";
import { GoogleIcon } from "@/assets/svg/GoogleIcon";
import { VisibilityIcon } from "@/assets/svg/VisibilityIcon";
import { VisibilityOffIcon } from "@/assets/svg/VisibilityOffIcon";
import Myform from "@/components/atom/Myform";
import MyTextFile from "@/components/atom/MytTextFile";
import TemplatForm from "@/components/atom/TemplatForm";
import {
  Alert,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { green, grey, red } from "@mui/material/colors";
import React from "react";
import { useNavigate } from "react-router-dom";
import bodyData from "../../hooks/useBody";
import useSubmited from "../../hooks/useSubmit";
import { useForm } from 'react-hook-form'
import axios from "axios";
function Register() {
  const colors = useTheme()
  const { register, handleSubmit, formState = { errors } } = useForm()
  const Sociaty = [
    <FacebookIcon fontSize="large" htmlColor={colors.palette.blue.main} />,
    <GoogleIcon fontSize="large" htmlColor={colors.palette.blue.main} />,
  ];

  // const { dataUser, handleEmail, handlePassowrd, handleVerifyPassword, handleValideUserData, valideUserData } = bodyData();
  // const navigateTo = useNavigate();
  // const { message, handleSumited } = useSubmited('Register', dataUser, handleValideUserData, '/login')
  // console.log('sumt', message)
  const onSubmit = async (data) => {
    const { data: datauser } = await axios.post('http://localhost:8080/api/v1/users/register', {
      firstName: "Xinh",
      lastName: "Duong Ba",
      email: data.email,
      password: data.password
    })
    console.log('check data submit :::: ', datauser.user)
  }
  return (
    <TemplatForm>
      {/* {message.status && <Alert sx={{
        position: "fixed",
        top: "80px",
        right: "10px",
        width: "350px",
        height: "80px",
        backgroundColor: green[400],
        color: grey[900]
      }} severity="success">{message.message}</Alert>
      }
      {message.status === false && <Alert sx={{
        position: "fixed",
        top: "80px",
        right: "10px",
        width: "350px",
        height: "80px",
        backgroundColor: red[400],
        color: grey[900]
      }} severity="error">{message.message}</Alert>} */}
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
            Đăng Ký
          </Typography>
          <Typography variant="subtitle1">
            Tạo tài khoản mới hoặc bạn có thể đăng nhập bằng tài khoản POPS
            Kids.
          </Typography>
        </Stack>
        <Myform TitleButton={"Đăng Ký"}
          handleSumit={handleSubmit(onSubmit)}>
          <MyTextFile
            placeholder={"Nhập email"}
            register={register}
            name={'email'}
          // handleEmail={handleEmail}
          // valideUserData={valideUserData.email}
          // message={'email invalide'}
          />
          <MyTextFile
            placeholder={"Nhập mật khẩu"}
            register={register}
            name={'password'}
            typeInput={"password"}
            // handleEmail={handlePassowrd}
            // valideUserData={valideUserData.password}
            // message={'password invalide'}
            VisibilityIcon={[
              <VisibilityIcon htmlColor={useTheme().palette.my_white.main} />,
              <VisibilityOffIcon
                htmlColor={useTheme().palette.my_white.main}
              />,
            ]}
          />
          <MyTextFile
            placeholder={"Nhập lại mật khẩu"}
            register={register}
            name={'password2'}
            // handleEmail={handleVerifyPassword}
            typeInput={"password"}
            // message={'verify password invalide'}
            // valideUserData={valideUserData.verifyPassword}
            VisibilityIcon={[
              <VisibilityIcon htmlColor={useTheme().palette.my_white.main} />,
              <VisibilityOffIcon
                htmlColor={useTheme().palette.my_white.main}
              />,
            ]}
          />
        </Myform>
        <Stack width="100%" gap="28px">
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            gap="6px"
          >
            <Box>
              <Typography variant="subtitle1" fontWeight="600">
                Bằng cách chọn "Đăng ký tài khoản",
              </Typography>
              <Typography variant="subtitle1" fontWeight="600">
                bạn đồng ý với cácĐiều khoản sử dụng
              </Typography>
            </Box>
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
            Đã có tài khoản?Đăng nhập
          </Typography>
        </Stack>
      </Stack>
    </TemplatForm >
  );
}

export default Register;
