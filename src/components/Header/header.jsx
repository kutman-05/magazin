import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import { TbLineHeight, TbWorld } from "react-icons/tb";
import { LuUser } from "react-icons/lu";
import { FaRegBell } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { FaFacebook } from "react-icons/fa";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Dialog, IconButton, Modal, Typography } from "@mui/material";
import { Icon20LogoVkOutline, Icon28LogoVkColor } from "@vkontakte/icons";
import { useMainContext } from "../../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  height: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const { registerGoogle, user } = useMainContext();

  const naviget = useNavigate();

  console.log(user, "user");

  function onClose() {
    setOpen(false);
  }
  return (
    <>
      <div id="header">
        <div className="container">
          <div className="header">
            <div className="hero">
              <Link to={"/"}>
                <h1>ALai.com</h1>
              </Link>

              <TbWorld />

              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {" "}
                <TbWorld
                  style={{
                    fontSize: "1.5pc",
                  }}
                />
                Русский-USD
              </button>
              <Link
                style={{
                  color: "white",
                }}
              >
                <FaRegBell
                  style={{
                    marginLeft: "2.6pc",
                    height: "1.5pc",
                    width: "2pc",
                    fontSize: "0.5pc",
                  }}
                />
                <h3>Уведомления</h3>
              </Link>
              <Link onClick={() => setOpen(true)}>
                {user ? (
                  <img
                    style={{
                      borderRadius: "50%",
                      width: "40px",
                    }}
                    src={user.photoURL}
                    alt=""
                  />
                ) : (
                  <LuUser
                    style={{
                      height: "1.8pc",
                      width: "2.9pc",
                      color: "white",
                      marginLeft: "-1pc",
                    }}
                  />
                )}
                <h2
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "-1pc",
                  }}
                >
                  {user ? "Профиль" : "войти"}
                </h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {user ? (
        <Modal open={open} onClose={onClose}>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              backgroundColor: "white",
              width: "10pc",
              height: "10pc",
              marginTop: "5.6pc",
              marginLeft: "64.3pc",
              borderRadius: "20px",
            }}
          >
            <Typography sx={{ color: "green" }}>
              <Link to={"/profil"}>Мои обзоры</Link>
              <br />
              <Link>Мое избранное</Link>
              <br />
              <Link>Безопасность</Link>
              <br />
              <Link
                to={"/"}
                onClick={() => {
                  signOut(auth);
                }}
              >
                Выход
              </Link>
            </Typography>
          </Box>
        </Modal>
      ) : (
        <Modal
          open={open}
          onClose={onClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <IconButton
              onClick={() => {
                // navigate("/order");
                setOpen(false);
              }}
              style={{
                width: "2pc",
                height: "2pc",
                display: "flex",
                marginLeft: "17.8pc",
                marginTop: "-1pc",
                fontSize: "2pc",
              }}
            >
              <CloseIcon
                style={{
                  color: "black",
                }}
              />
            </IconButton>
            <Typography>
              <img
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginLeft: "6pc",
                  marginTop: "-2pc",
                  height: "7pc",
                  width: "7pc",
                }}
                src="https://honda-fit.ru/forums/uploads/1659908126/gallery_110823_738_5004.png"
                alt=""
              />
            </Typography>
            <Typography
              id="modal-modal-title"
              variant="h5"
              component="h1"
              style={{
                marginTop: "1pc",
                display: "flex",
                justifyContent: "center",
                fontSize: "2pc",
              }}
            >
              Войдите в профиль
            </Typography>
            <Link>
              {" "}
              <Typography
                className="type2"
                id="modal-modal-description"
                sx={{ mt: 2 }}
                style={{
                  gap: "0.5pc",
                }}
                // style={{
                //   display: "flex",
                //   alignItems: "center",
                //   justifyContent: "center",
                //   backgroundColor: "cyan",
                //   height: "3pc",
                //   width: "18.4pc",
                //   borderRadius: "40px",
                //   gap: "1pc",
                //   fontSize: "1.2pc",
                // }}
              >
                <Icon28LogoVkColor
                  style={{
                    fontSize: "1.4pc",
                  }}
                />{" "}
                ВКонтакте
              </Typography>
            </Link>
            <Link
              onClick={() => {
                registerGoogle();
                if (user !== null) {
                  return naviget("/alai");
                }
              }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {" "}
              <Typography
                className="type2"
                id="modal-modal-description"
                sx={{ mt: 2 }}
                style={{
                  gap: "0.5pc",
                }}
                // style={{
                //   display: "flex",
                //   justifyContent: "center",
                //   backgroundColor: "cyan",
                //   height: "3pc",
                //   width: "18.4pc",
                //   borderRadius: "30px",
                //   fontSize: "1.3pc",
                //   alignItems: "center",
                // }}
              >
                <FcGoogle
                  style={{
                    color: "cyan",
                    fontSize: "1.4pc",
                  }}
                />
                Google
              </Typography>
            </Link>

            <Link
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {" "}
              <Typography
                className="type2"
                id="modal-modal-description"
                sx={{ mt: 2 }}
                style={{
                  gap: "0.5pc",
                }}
              >
                <svg
                  style={{
                    color: " rgb(20, 93, 139)",
                    fontSize: "1.5pc",
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="#1877f2"
                    d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
                  ></path>
                  <path
                    fill="#fff"
                    d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165z"
                  ></path>
                </svg>
                Facebook
              </Typography>
            </Link>
            <Link>
              {" "}
              <Typography
                className="type3"
                id="modal-modal-description"
                sx={{ mt: 2 }}
                style={{
                  gap: "0.5pc",
                  borderRadius: "10px",
                }}
                // style={{
                //   display: "flex",
                //   alignItems: "center",
                //   justifyContent: "center",
                //   backgroundColor: "rgb(17, 156, 156)",
                //   height: "3pc",
                //   width: "18.4pc",
                //   borderRadius: "15px",
                //   fontSize: "1.3pc",
                //   color: "black",
                // }}
              >
                <HiOutlinePencilSquare
                  style={{
                    color: "orange",
                    fontSize: "1.4pc",
                  }}
                />{" "}
                Регистрация
              </Typography>
            </Link>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
            ></Typography>
          </Box>
        </Modal>
      )}
    </>
  );
};

export default Header;
