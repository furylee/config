import React, { Component } from 'react';
import router from 'umi/router';
import Link from 'umi/link';
import { Menu, Layout } from 'antd';

import styles from './index.css';

const { Header } = Layout;

class BaseHeader extends Component {
  state = {
    current: 'all',
    show: false,
  };

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
    router.push(e.key);
  };

  show = () => {
    const { show } = this.state;
    this.setState({
      show: !show,
    });
  };

  render() {
    const { current, show } = this.state;
    return (
      <Header>
        <div className='bx'>
          <div className={styles.imgBox}>
            <Link to='/'>
              <img className={styles.logo}
                   src={require('../assets/logo.png')} alt="闪电贷" />
            </Link>
          </div>
          <div className={styles.weChat} onMouseEnter={this.show} onMouseLeave={this.show}>
            <span><i className={`iconfont ${styles.phone}`}>&#xe682;</i>关注公众号</span>
            <div className={styles.qrShow} style={show ? { visibility: 'visible' } : { visibility: 'hidden' }}>
              <img src={require('../assets/sdd.png')} alt="" />
              <div className={styles.text}>手机实时关注更方便</div>
            </div>
          </div>
          <Menu
            mode="horizontal"
            selectedKeys={[current]}
            onClick={this.handleClick}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item
              key='all'
            >
              贷款大全
            </Menu.Item>
            <Menu.Item
              key='credit-card'
            >
              信用卡产品
            </Menu.Item>
            <Menu.Item
              key='query'
            >
              查拒贷
            </Menu.Item>
          </Menu>

        </div>
      </Header>
    );
  }
}

export default BaseHeader;
