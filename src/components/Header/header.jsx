import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import { TbLineHeight, TbWorld } from "react-icons/tb";
import { LuUser } from "react-icons/lu";
import { FaRegBell } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaOdnoklassniki } from "react-icons/fa6";
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
              <Link>Регистрация</Link>
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
              <Link to={'/'} onClick={() => {
                signOut(auth) 
              } }>Выход</Link>
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
                  marginLeft: "5.5pc",
                  marginTop: "-2pc",
                  height: "8pc",
                  width: "8pc",
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
                id="modal-modal-description"
                sx={{ mt: 2 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "cyan",
                  height: "3pc",
                  width: "18.4pc",
                  borderRadius: "40px",
                  gap: "1pc",
                  fontSize: "1.2pc",
                }}
              >
                <Icon28LogoVkColor /> ВКонтакте
              </Typography>
            </Link>
            <Link>
              {" "}
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "cyan",
                  height: "3pc",
                  width: "18.4pc",
                  borderRadius: "30px",
                  fontSize: "1.3pc",
                }}
              >
                <FaOdnoklassniki
                  style={{
                    color: "orange",
                  }}
                />{" "}
                Одноклассники
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
                id="modal-modal-description"
                sx={{ mt: 2 }}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "cyan",
                  height: "3pc",
                  width: "18.4pc",
                  borderRadius: "30px",
                  fontSize: "1.3pc",
                  alignItems: "center",
                }}
              >
                <FcGoogle
                  style={{
                    color: "cyan",
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
                id="modal-modal-description"
                sx={{ mt: 2 }}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "cyan",
                  height: "3pc",
                  width: "18.4pc",
                  borderRadius: "30px",
                  fontSize: "1.3pc",
                  alignItems: "center",
                }}
              >
                <FaFacebook
                  style={{
                    color: "blue",
                  }}
                />
                Facebook
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
