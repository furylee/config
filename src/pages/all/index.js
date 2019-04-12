import React, { Component, Fragment } from 'react';
import { Carousel, Button, Divider } from 'antd';
import { connect } from 'dva';

import styles from './index.less';

class All extends Component {

  componentDidMount(){
    this.props.dispatch({
      type:'all/queryList'
    })
  }

  render() {
    return (
      <Fragment>
        <div className='bx banner1'>
          <div className={styles.bannerLeft}>
            <Carousel effect="fade" autoplay>
              <div><h3>1</h3></div>
              <div><h3>2</h3></div>
              <div><h3>3</h3></div>
              <div><h3>4</h3></div>
            </Carousel>
          </div>
          <div className={styles.bannerRight}>
            <div className={styles.strongFont} style={{ padding: '0 24px', lineHeight: '30px' }}>最新上线</div>
            <div style={{ width: '100%', borderBottom: '1px solid #EEEEEE' }} />
            <div className={styles.bannerRightTopBox}>
              <img style={{ width: '50px', height: '50px', borderRadius: '2px' }} src={require('../../assets/yay.jpg')}
                   alt="" />
              <div style={{ width: '70%' }}>
                <div>
                  <strong style={{
                    display: 'inline-block',
                    width: '70px',
                    fontSize: '15px',
                    marginRight: '12px',
                  }}>红红火火</strong>
                  <span>10秒极速审批</span></div>
                <div>
                  <strong
                    className='primary-color'
                    style={{ display: 'inline-block', width: '88px' }}>
                    3000 - 5000
                  </strong>
                  <span>日利率0.2%</span>
                  <Divider type="vertical" /><span>1-36个月</span>
                </div>
              </div>
              <div>
                <div style={{ fontSize: '.5em', textAlign: 'center', color: '#999' }}>1112 人已申请</div>
                <Button type='primary'>立即申请</Button>
              </div>
            </div>
            <div className={styles.bannerRightTopBox}>
              <img style={{ width: '50px', height: '50px', borderRadius: '2px' }} src={require('../../assets/yay.jpg')}
                   alt="" />
              <div style={{ width: '70%' }}>
                <div>
                  <strong style={{
                    display: 'inline-block',
                    width: '70px',
                    fontSize: '15px',
                    marginRight: '12px',
                  }}>红红火火</strong>
                  <span>10秒极速审批</span></div>
                <div>
                  <strong
                    className='primary-color'
                    style={{ display: 'inline-block', width: '88px' }}>
                    3000 - 5000
                  </strong>
                  <span>日利率0.2%</span>
                  <Divider type="vertical" /><span>1-36个月</span>
                </div>
              </div>
              <div>
                <div style={{ fontSize: '.5em', textAlign: 'center', color: '#999' }}>1112 人已申请</div>
                <Button type='primary'>立即申请</Button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default connect(all => ({ ...all }))(All);
