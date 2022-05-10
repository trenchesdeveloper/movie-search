import React from "react";
import { Link } from "react-router-dom";

import RMDBLogo from "../../images/react-movie-logo.svg";
import OMDBLogo from "../../images/tmdb_logo.svg";

import { Wrapper, Content, LogoImg, OMDBLogoImg } from "./Header.styles";

const Header: React.FC = () => {
  console.log("header", "render");

  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={RMDBLogo} alt="rmdb-logo" />
        </Link>
        <OMDBLogoImg src={OMDBLogo} alt="tmdb-logo" />
      </Content>
    </Wrapper>
  );
};

export default Header;
