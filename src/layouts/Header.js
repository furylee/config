import React, { PureComponent } from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

export default class HeaderCmp extends PureComponent {
  state = {
    activeKey: '',
  };

  render() {
    return (
        <Header>123</Header>
    );
  }
}
