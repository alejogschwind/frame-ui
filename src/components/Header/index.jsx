import React from 'react';

import { HeaderWrapper } from './styles';

import { ReactComponent as FrameLogo } from "../../assets/svgs/logo.svg";

const Header = () => {
  return (
    <HeaderWrapper>
      <FrameLogo />
    </HeaderWrapper>
  );
};

export default Header;
