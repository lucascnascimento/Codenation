import React from "react";

import { Link } from "react-router-dom";

import { ReactComponent as LogoSvg } from "../../assets/img/instagram-logo.svg";

import "./Topbar.scss";

const Topbar = () => (
  <header className="topbar" data-testid="topbar">
    <div className="container">
      <Link to="/" className="topbar__logo">
        <LogoSvg />
      </Link>

      <div className="topbar__group">
        <button className="topbar__icon">
          <Link to="/users">
            <i className="fas fa-users"></i>
            <span>Usuários</span>
          </Link>
        </button>
        <button className="topbar__icon">
          <Link to="/newuser">
            <i className="fas fa-user-plus"></i>
            <span>Nova Conta</span>
          </Link>
        </button>
      </div>
    </div>
  </header>
);

export default Topbar;
