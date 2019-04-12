import React from 'react';
import { Layout } from 'antd';

import './global.less';

import BaseHeader from './BaseHeader';
import BaseFooter from './BaseFooter';

const { Content } = Layout;

function BasicLayout(props) {
  return (
    <Layout>
      <BaseHeader />
      <Content style={{ backgroundColor: '#F6F6F6',padding:'16px 0 20px' }}>{props.children}</Content>
      <BaseFooter />
    </Layout>
  );
}

export default BasicLayout;
