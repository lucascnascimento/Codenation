import React from "react";

import { ReactComponent as LogoSvg } from "../assets/img/logo.svg";

class Topbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className="topbar" data-testid="topbar">
          <div className="container">
            <a href="/" className="topbar__logo">
              <LogoSvg alt="Logo Instagram" />
            </a>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Topbar;
