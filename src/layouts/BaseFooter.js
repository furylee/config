import React, { Fragment } from 'react';
import { Layout } from 'antd';

import styles from './index.css';

const { Footer } = Layout;

function BaseFooter() {
  return (
    <Fragment>
      <Footer>
        <div className={`bx ${styles.footer}`}>
          <div className={styles.footerLeftInfo}>
            <ul>
              <li>新贷款口子</li>
              <li>黑白网贷</li>
              <li>小额秒批</li>
            </ul>
            <ul style={{ marginLeft: '80px' }}>
              <li>信用卡贷</li>
              <li>app平台大全</li>
              <li>微信贷款</li>
            </ul>
            <img style={{ margin: '0 40px 0 120px' }} className={styles.wxImg} src={require('../assets/sdd.png')}
                 alt='微信公众号' />
          </div>
          <div style={{width:'50%'}}>
            <img style={{ margin: '0 40px 0 40px' }} className={styles.wxImg} src={require('../assets/swhz.png')}
                 alt='商务合作' />

            <ul>
              <li>商务合作：微信号EASTER_-33</li>
              <li>扫描二维码，添加好友</li>
              <li>备注姓名+手机号+“商务合作”</li>
            </ul>
          </div>
        </div>
      </Footer>
      <div className={styles.info}>
        <div className='bx'>京ICP备<a
          href="http://www.miitbeian.gov.cn/publish/query/indexFirst.action">15056666号-3</a></div>
      </div>
    </Fragment>
  );
}

export default BaseFooter;
