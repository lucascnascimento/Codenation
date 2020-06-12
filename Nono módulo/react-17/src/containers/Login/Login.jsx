import React, { useState, useEffect } from "react";

import "./Login.scss";

import { Logo } from "../../components";

import { endpoints } from "../../modules/endpoints";

import backgroundImageMobile from "../../assets/images/app-intro-1.jpg";
import backgroundImageDesktop from "../../assets/images/app-intro-2.jpg";

const Login = () => {
  const [isMobile, setIsMobile] = useState(false);

  const onResizeHandler = (e) => {
    const { innerWidth } = e.target;

    if (innerWidth <= 768) {
      setIsMobile(true);

      return;
    }

    setIsMobile(false);
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      setTimeout(() => {
        return onResizeHandler;
      }, 250)
    );

    return () => {
      window.removeEventListener("resize", onResizeHandler);
    };
  }, []);

  const screenWidth = window.innerWidth;

  return (
    <main
      className="login"
      data-testid="login"
      style={{
        backgroundImage: `url(${
          isMobile || screenWidth <= 768
            ? backgroundImageMobile
            : backgroundImageDesktop
        })`,
      }}
    >
      <div className="container">
        <Logo />
        <h2 className="login__microcopy">
          Não toca a música inteira mas toca o seu coração
        </h2>

        <a href={endpoints.getAuthorization.url} className="login__auth-button">
          Entrar com o spotify
        </a>
      </div>
    </main>
  );
};

export default Login;
