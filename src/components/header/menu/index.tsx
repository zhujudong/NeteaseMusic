import React from 'react';
import { Link } from 'umi';
import { MenuProps } from '../types.d';

import './index.less';

const Menu: React.FC<MenuProps> = props => {
  const { menuList, currentPath } = props;
  console.log(currentPath, menuList);
  return (
    <ul className="header-menu-list">
      {menuList.map((menu, index) => (
        <li
          key={index}
          className={
            currentPath === menu.href
              ? 'header-menu-item selected'
              : 'header-menu-item'
          }
        >
          <Link to={menu.href}>{menu.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
