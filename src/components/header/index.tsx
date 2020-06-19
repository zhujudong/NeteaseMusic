import React from 'react';
import Menu from './menu';
import Search from './search';
import { Link } from 'umi';
import { MenuProps } from './types.d';

import './index.less';

const Header: React.FC<MenuProps> = props => {
  return (
    <div className="header-container">
      <div className="header-wrapper">
        <Link to="/" className="logo" />
        <Menu {...props} />
        <Search />
        <Link to="/creator" className="creator">
          创作者中心
        </Link>
        <a href="#" className="login-btn">
          登录
        </a>
      </div>
      <div className="header-bottom" />
    </div>
  );
};
export default Header;
