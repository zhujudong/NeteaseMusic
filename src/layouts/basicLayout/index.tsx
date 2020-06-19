import React, { FC } from 'react';
import { connect, GlobalModelState, ConnectProps } from 'umi';
import { Header } from '@/components';

import './index.less';

interface BasicLayoutProps extends ConnectProps {
  global: GlobalModelState;
  children: React.ReactElement;
}

const menuList = [
  {
    title: '发现音乐',
    href: '/',
  },
  {
    title: '我的音乐',
    href: '/my',
  },
  {
    title: '朋友',
    href: '/friend',
  },
  {
    title: '商城',
    href: '/store',
  },
  {
    title: '音乐人',
    href: '/musician',
  },
  {
    title: '下载客户端',
    href: '/download',
  },
];

const BasicLayout: FC<BasicLayoutProps> = props => {
  const { global, children } = props;
  return (
    <div>
      <Header menuList={menuList} currentPath={global.pathName || ''} />
      {children}
    </div>
  );
};
export default connect(({ global }: { global: GlobalModelState }) => ({
  global: global,
}))(BasicLayout);
