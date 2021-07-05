import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import DarkContext from '../../context/dark';

import Switch from '../Switch';

import {
  HeaderWrapper,
  MenuIconStyled,
  Position,
  HMenuWrappre,
  Menu,
  FrameLogoStyled,
  SubMenu,
  SubMenuButton,
  SwitchWrapper,
  Span
} from './styles';

import Ar from "../../assets/images/ar.png";
import Us from "../../assets/images/us.png";
import LanguagesContext from '../../context/language';


const Header = ({ solid, menuOpen, openMenu }) => {
  const { dark, setDark } = useContext(DarkContext);
  const { languages, lan, setLan } = useContext(LanguagesContext);
  const { t } = useTranslation();


  return (
    <HeaderWrapper solid={solid} dark={dark}>
      {/* 1024 */}
      <Position>
        <Link to="/">
          <FrameLogoStyled dark={dark} />
        </Link>

        <HMenuWrappre>
          <MenuIconStyled dark={dark} menuOpen={menuOpen} onClick={openMenu} />
        </HMenuWrappre>
        <Menu dark={dark}>
          <ul>
            <Link to="/">
              <li>{t("Home")}</li>
            </Link>
            <SubMenuButton>
              <li>{t("Servicies")}</li>
              <SubMenu dark={dark}>
                <Link to="/servicio/desarollo">
                  <li>
                    {t("Development")}
                  </li>
                </Link>
                <Link to="/servicio/brandingTV">
                  <li>
                    {t("Branding")}
                  </li>
                </Link>
                <Link to="/servicio/marketing">
                  <li>
                    {t("Marketing")}
                  </li>
                </Link>
                <Link to="/servicio/post-produccion">
                  <li>
                    {t("PostProduction")}
                  </li>
                </Link>
                <Link to="/servicio/produccion">
                  <li>
                    {t("Production")}
                  </li>
                </Link>
                <Link to="/servicio/estudio">
                  <li>
                    {t("Studio")}
                  </li>
                </Link>
              </SubMenu>
            </SubMenuButton>
            <Link to="/portfolio">
              <li>{t("Portfolio")}</li>
            </Link>
            <Link to="/contacto">
              <li>{t("Contact")}</li>
            </Link>
            <SubMenuButton>
              <li>
                {
                  lan === languages[0] ?
                    <img src={Ar} alt={"Idioma Español"} /> :
                    <img src={Us} alt={"Idioma Ingles"} />
                }
                {lan === languages[0] ? t("Spanish") : t("English")}
              </li>
              <SubMenu lan dark={dark}>
                <Link onClick={() => { }}>
                  <li onClick={() => setLan(languages[0] === lan ? languages[1] : languages[0])}>
                    {
                      lan === languages[0] ?
                        <img src={Us} alt={"Idioma Ingles"} /> :
                        <img src={Ar} alt={"Idioma Español"} />
                    }
                    {lan === languages[0] ? t("English") : t("Spanish")}
                  </li>
                </Link>
              </SubMenu>
            </SubMenuButton>
            <SwitchWrapper dark={dark}>
              <Span>{t("Light")}</Span>
              <Switch
                isToggled={dark}
                onToggle={() => setDark(!dark)}
              />
              <Span>{t("Dark")}</Span>
            </SwitchWrapper>

          </ul>
        </Menu>
      </Position>
    </HeaderWrapper>
  );
};

export default Header;
