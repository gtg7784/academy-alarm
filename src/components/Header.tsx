import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logoAsset from 'assets/logo.png';

const Container = styled.header`
  width: calc(100% - 48px);
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 24px;
  border-bottom: 1px solid #e1e4e8;
`;

const Logo = styled.img`
  width: 151px;
  height: 23px;
`;

const Menu = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const MenuItem = styled.li`
  float: left;
  margin-left: 24px;
`;

const MenuLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1.5px;
  color: #0e0e0e;
`;

const Header: React.FC = () => {
  return (
    <Container>
      <Logo src={logoAsset}/>
      <Menu>
        <MenuItem>
          <MenuLink to="/">HOME</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/setting">SETTING</MenuLink>
        </MenuItem>
      </Menu>
    </Container>
  )
}

export default Header;