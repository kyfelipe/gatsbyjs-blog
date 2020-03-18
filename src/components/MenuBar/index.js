import React, { useState, useEffect } from 'react'

import { Home, Grid } from 'styled-icons/boxicons-solid'
import {
  SearchAlt2 as Search,
  UpArrowAlt as Arrow,
  Bulb as Light
} from 'styled-icons/boxicons-regular'

import * as S from './styled'

const MenuBar = () => {
  const [theme, setTheme] = useState(null);
  const isDarkMode = theme === 'dark';

  useEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => setTheme(window.__theme);
  }, []);

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink to="/" title="Voltar para a Home">
          <S.MenuBarItem>
            <Home/>
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink to="/search/" title="Pesquisar">
          <S.MenuBarItem>
            <Search/>
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>
      <S.MenuBarGroup>
        <S.MenuBarItem title="Mudar o tema" className={theme} onClick={() => {
          window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
        }}>
          <Light/>
        </S.MenuBarItem>
        <S.MenuBarItem title="Mudar visualização">
          <Grid/>
        </S.MenuBarItem>
        <S.MenuBarItem title="Ir para o topo">
          <Arrow/>
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  );
};

export default MenuBar;
