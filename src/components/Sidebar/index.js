import React from 'react'

import Profile from '../Profile'
import SocialLinks from '../SocialLinks'
import MenuLinks from '../MeusLinks'

import * as S from './styled'

const Sidebar = () => (
  <S.SidebarWrapper>
    <Profile/>
    <SocialLinks/>
    <MenuLinks/>
  </S.SidebarWrapper>
);

export default Sidebar;
