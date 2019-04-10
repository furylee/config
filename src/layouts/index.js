import React, { Component } from 'react';
import { Layout } from 'antd';
import '../global.less'


import Header from './Header';
import Footer from './Footer';

const { Content } = Layout;

class LayoutCmp extends Component {
  render() {
    const { children } = this.props;
    return (
      <Layout className='bx'>
        <Header className='bx' />
        <Content className='bx'>{ children }</Content>
        <Footer className='bx' />
      </Layout>
    );
  }
}

export default LayoutCmp;
