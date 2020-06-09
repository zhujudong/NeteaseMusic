import React from 'react';
import header from './header.less';
import { Layout } from 'antd';
const { Header } = Layout;
export default class Mic_header extends React.Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <Header>
        {/* <div className={header.main}></div>
            <div ></div> */}
      </Header>
    );
  }
}
