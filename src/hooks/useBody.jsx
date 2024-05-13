import { useState } from "react";

const bodyData = () => {
  const [dataUser, setData] = useState({
    email: "",
    password: "",
    verifyPassword: "",
  });
  const [valideUserData, setValideUserData] = useState({
    email: true,
    password: true,
    verifyPassword: true,
  })
  const handleEmail = (e) => {
    setValideUserData({ ...valideUserData, email: true })
    setData({ ...dataUser, ["email"]: e.target.value });
  };
  const handlePassowrd = (e) => {
    setValideUserData({ ...valideUserData, password: true })
    setData({ ...dataUser, ["password"]: e.target.value });
  };
  const handleVerifyPassword = (e) => {
    setValideUserData({ ...valideUserData, verifyPassword: true })
    setData({ ...dataUser, ["verifyPassword"]: e.target.value });
  };
  const handleValideUserData = (userData) => {
    let valide = { 
     email: userData.email !== '' && /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(userData.email),
    password: userData.password !== '' && userData.password.length >= 6
    };
    setValideUserData(valide)
    return valide
  }
  return { dataUser, handleEmail, handlePassowrd, handleVerifyPassword, handleValideUserData, valideUserData };
};

export default bodyData;
