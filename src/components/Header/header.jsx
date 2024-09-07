import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import { TbWorld } from "react-icons/tb";
import { LuUser } from "react-icons/lu";
import { FaRegBell } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { FaFacebook } from "react-icons/fa";
import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton, Modal, Typography } from "@mui/material";
import { Icon28LogoVkColor } from "@vkontakte/icons";
import { useMainContext } from "../../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

// Modal style
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
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "10px",
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const { registerGoogle, registerFacebook, registerVk, user } =
    useMainContext();
  const navigate = useNavigate();

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
                <TbWorld style={{ fontSize: "1.5pc" }} />
                Русский-USD
              </button>
              <Link style={{ color: "white" }}>
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
              onClick={onClose}
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
            <Link onClick={registerVk}>
              <Typography
                className="type2"
                id="modal-modal-description"
                sx={{ mt: 2 }}
                style={{
                  gap: "0.5pc",
                }}
              >
                <Icon28LogoVkColor style={{ fontSize: "1.4pc" }} /> ВКонтакте
              </Typography>
            </Link>
            <Link
              onClick={() => {
                registerGoogle();
                if (user !== null) {
                  return navigate("/alai");
                }
              }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                className="type2"
                id="modal-modal-description"
                sx={{ mt: 2 }}
                style={{
                  gap: "0.5pc",
                }}
              >
                <FcGoogle style={{ color: "cyan", fontSize: "1.4pc" }} />
                Google
              </Typography>
            </Link>
            <Link onClick={registerFacebook}>
              <Typography
                className="type2"
                id="modal-modal-description"
                sx={{ mt: 2 }}
                style={{
                  gap: "0.5pc",
                }}
              >
                <FaFacebook
                  style={{ color: "rgb(20, 93, 139)", fontSize: "1.5pc" }}
                />{" "}
                Facebook
              </Typography>
            </Link>
            <Link>
              <Typography
                className="type3"
                id="modal-modal-description"
                sx={{ mt: 2 }}
                style={{
                  gap: "0.5pc",
                  borderRadius: "10px",
                }}
              >
                <HiOutlinePencilSquare
                  style={{ color: "orange", fontSize: "1.4pc" }}
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
