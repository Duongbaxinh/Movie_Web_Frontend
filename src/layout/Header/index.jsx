
import PersonPinIcon from "@mui/icons-material/PersonPin";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import SubjectIcon from "@mui/icons-material/Subject";
import { Box, Link, useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import BoxSearch from "../../components/atom/BoxSearch";
import InforUser from "./atomHeader/InforUser";
import "./styles.scss";
function Header(props) {
  const colors = useTheme()
  const menu = [
    { _id: 1, name: "Thiếu Nhi", },
    { _id: 2, name: "Comics", },
    { _id: 3, name: "Anime", },
    { _id: 4, name: "Phim", },
    { _id: 5, name: "Âm Nhạc", },
    { _id: 6, name: "Shop", },
    { _id: 7, name: "Thêm", },
  ];
  const searchData = [
    { id: 1, name: "doremon" },
    { id: 2, name: "Naruto Shippuden" },
    { id: 3, name: "Detective conan" },
    { id: 4, name: "Boruto" },
    { id: 5, name: "one piece" },
    { id: 6, name: "Dragon supper" },
  ];
  const [actionID, setAction] = useState(null);
  const [clickSearch, setClickSearch] = useState(false);
  const [clickMenu, setClickMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [appearBg, setAppearBg] = useState(false)
  const [value, setValue] = useState("");
  const [timeOut, setTimeouts] = useState(null);
  const [isLogin, setIsLogin] = useState({ status: false, userInfor: null })
  const [toggleUser, setToggleUser] = useState(false)
  const handleMenu = () => {
    if (window.innerWidth <= 1200) {
      setClickMenu(!clickMenu);
    } else {
      setClickMenu(true);
    }
  };
  const handleBlue = () => {
    setTimeout(() => setClickSearch(false), 500);
  }
  const handleAction = (id) => {
    setAction(id);
  };
  const handleValueSearch = (e) => {
    clearTimeout(timeOut);
    const idTimeOut = setTimeout(() => {
      setValue(e.target.value)
    }, 500)
    setTimeouts(idTimeOut)
  };
  useEffect(() => {
    const checkToken = localStorage.getItem('accessToken')
    const checkUser = localStorage.getItem('user')
    if (checkToken && checkUser) {
      setIsLogin({ status: true, userInfor: JSON.parse(checkUser) })
    }
  }, [])

  const handleLogout = () => {
    const logOut = async () => {
      try {
        localStorage.clear()
        setIsLogin({ status: false, userInfor: null })
      } catch (error) {
        console.log(error)
      }
    }
    logOut()
  }


  useEffect(() => {
    function updateDimensions() {
      setWidth(window.innerWidth);
    }
    function updateScrollHeight() {
      window.pageYOffset > 80 ? setAppearBg(true) : setAppearBg(false)
    }
    window.addEventListener("resize", updateDimensions);
    window.addEventListener('scroll', updateScrollHeight)
    return () => {
      window.removeEventListener("resize", updateDimensions);
      window.removeEventListener('scroll', updateScrollHeight)
    };
  }, [width, appearBg]);

  return (
    <div
      className="header"
      style={{
        backgroundColor: `${appearBg ? 'black' : "transparent"} `,
        transition: "0.5s ease"
      }}
    >
      <div className="header__left">
        <Link href="/">
          <img
            src="https://cdn.popsww.com/popsapp/assets/images/icons/logo-pops.png?format=webp"
            alt=""
            className="header__logo"
          />
        </Link>
        <ul
          className="header__menu"
        > {menu?.map(({ _id, name }) => (
          <li
            key={_id}
            style={{
              whiteSpace: "nowrap"
            }}
            className={`header__menu-item ${_id === actionID ? "action" : undefined} `}
            onClick={() => handleAction(_id)}
          >
            {name}
          </li>
        ))}
        </ul>
      </div>
      <div className="header__right">
        <div className="header__input" style={{ position: "relative" }}>
          {clickSearch && (
            <Box
              sx={{
                position: "absolute",
                top: "40px",
                right: "0",
                width: { lg: "400px", xs: "200px" },
                padding: "20px",
                borderRadius: "10px",
                background: grey[900],
                "&::after": {
                  content: `" "`,
                  position: "absolute",
                  top: "-7px",
                  right: "10px",
                  width: "20px",
                  height: "20px",
                  transform: "rotate(45deg)",
                  background: grey[900],
                },
              }}
            >
              {value?.length <= 0 && (
                <BoxSearch key={0} searchData={searchData} />
              )}
            </Box>
          )}
          <input
            type="text"
            placeholder="Tên phim, anime, comic"
            onChange={handleValueSearch}
            onFocus={() => setClickSearch(true)}
            onBlur={handleBlue}
          />
          <Link href={value?.length > 0 ? `/search/${value}` : undefined}>
            <SearchSharpIcon
              htmlColor="white"
              fontSize="large"
              sx={{ cursor: "pointer", marginRight: "8px" }}
            />
          </Link>
        </div>
        {isLogin.status == false && <div className="header__btn">
          <Link
            href="/login"
            sx={{
              textDecorationLine: "none",
              color: colors.palette.my_white.main,
            }}
            className="header__btn-left"
          >
            Đăng Nhập
          </Link>
          <Link
            href="/register"
            className="header__btn-right"
            sx={{
              textDecorationLine: "none",
              color: colors.palette.my_white.main,
            }}
          >
            Đăng Ký
          </Link>
        </div>}
        <div className="header__user" >
          <div onClick={setToggleUser.bind(this, !toggleUser)}><PersonPinIcon fontSize="large" /></div>
          {isLogin.status && toggleUser && <InforUser userInfor={isLogin.userInfor} handleLogout={handleLogout} />}
        </div>
        <div className="header__menu-icon">
          <SubjectIcon fontSize="large" onClick={handleMenu} />
        </div>
      </div>
    </div>
  );
}

export default Header;
