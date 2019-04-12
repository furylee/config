import React, { Component, Fragment } from 'react';
import { Carousel, Button, Divider } from 'antd';
import { connect } from 'dva';

import { getAmountWithUnit, getRateType } from '@/utils/utils';

import styles from './index.less';

@connect(({ all }) => ({ ...all }))
class All extends Component {

  state = {
    clickNum: 1,
    num: 14,
  };

  componentDidMount() {
    const { num } = this.state;
    this.props.dispatch({
      type: 'all/queryList',
      payload: {
        'apiName': 'quanbu',
        'apiType': 'loan',
        'offset': '0',
        num,
        'os': 'browser',
      },
    });

    this.props.dispatch({
      type: 'all/queryBanner',
    });
  }

  initBanner = () => {
    const { bannerList } = this.props;
    const test = ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555064090776&di=ed831e66acfd2be867a236417347b12f&imgtype=0&src=http%3A%2F%2Fimg0.ph.126.net%2F0c3_G7X54zFaW88gNxXnVg%3D%3D%2F2650368380725364631.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555064090776&di=6688ae9a940d22864110ff992d786b24&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D2729462197%2C1280047630%26fm%3D191%26app%3D48%26wm%3D1%2C13%2C90%2C45%2C0%2C7%26wmo%3D10%2C10%26n%3D0%26g%3D0n%26f%3DJPEG%3Fsec%3D1853310920%26t%3D76f167e4d52f0bfcc3e746113b93479b',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555064090775&di=47054bb54bfc39d5619abe0a667709d4&imgtype=0&src=http%3A%2F%2Fimgs.soufun.com%2Fhouse%2F2014_12%2F03%2F1417583976422_000.jpg'];

    return test.map((src, index) => {
      return (
        <a key={index} style={{ width: '100%' }}>
          <img src={src} style={{
            width: '100%',
            height: '230px',
            verticalAlign: 'top',
          }} alt="" />
        </a>
      );
    });
  };

  initHot = () => {
    const { dataList } = this.props;
    const hot = dataList.slice(0, 2);
    return (
      <div className={styles.bannerRight} key={55}>
        <div className={styles.hotNew}><img src={require('@/assets/推荐.png')} alt="" />最新上线</div>
        <div className={styles.hotLine} />
        {hot.map((item, index) => {
          return (
            <Fragment key={item.instanceId}>
              <div className={styles.bannerRightTopBox}>
                <div>
                  <img className={styles.prodLogo} src={item.prodLogoLink} alt="" />
                </div>
                <div>
                  <div className={styles.prodBox}>
                    <span className={styles.prodName}>{item.prodName}</span>
                    <span className={styles.prodDesc}>{item.prodDesc}</span>
                    {item.cornerIconLinks && item.cornerIconLinks.map((url, j) => {
                      return <img key={j} className={styles.prodIcon} src={url} alt="" />;
                    })}
                  </div>
                  <div className={styles.prodBox}>
                    <div className={`primary-color ${styles.money}`}>
                      {getAmountWithUnit(item.minLoanNum) + '-' + getAmountWithUnit(item.maxLoanNum)}
                    </div>
                    <span className={styles.sFont}>{getRateType(item.rateType)} {`${item.rateValue}%`}</span>
                    <Divider type="vertical" />
                    <span className={styles.sFont}>{item.loanTime}</span>
                  </div>
                </div>
                <div className={styles.hotRight}>
                  <span className={`${styles.sFont} ${styles.people}`}>{item.applyNum}人已申请</span>
                  <Button type='primary'>立即申请</Button>
                </div>
              </div>
              {index === 0 ?
                <div className={styles.cbr} />
                : null}
            </Fragment>
          );
        })}
      </div>
    );
  };

  initContent = () => {
    const { dataList } = this.props;
    const data = dataList.slice(2, dataList.length);
    return data.map((item, i) => {
      return (
        <div key={i} className={styles.contentInfoBox}>
          <div className={styles.infoBoxLeft}>
            <img src={item.prodLogoLink} alt="" />
          </div>
          <div>
            <div className={styles.infoBoxCenter}>
              <span className={styles.infoProdName}>{item.prodName}</span>
              <div className={`primary-color ${styles.infoProdMoney}`}>
                {getAmountWithUnit(item.minLoanNum) + '-' + getAmountWithUnit(item.maxLoanNum)}
              </div>
              <div>
                <span className={styles.infoProdSfont}>{getRateType(item.rateType)} {`${item.rateValue}%`}</span>
                <Divider type="vertical" />
                <span className={styles.infoProdSfont}>{item.loanTime}</span>
              </div>
            </div>
          </div>
          <div className={styles.infoProdDesc}>{item.prodDesc}</div>
          <div className={styles.infoBtn}><Button type='default'>立即申请</Button></div>
        </div>
      );
    });

  };

  addMore = () => {
    const { dispatch } = this.props;
    const { clickNum, num } = this.state;
    dispatch({
      type: 'all/queryList',
      payload: {
        'apiName': 'quanbu',
        'apiType': 'loan',
        'offset': clickNum * num,
        num,
        'os': 'browser',
      },
    }).then(() => {
      this.setState(preState => ({ ...preState, clickNum: preState.clickNum + 1 }));
    });
  };

  render() {
    const { nextOffset } = this.props;
    return (
      <Fragment>
        <div className='bx banner'>
          <div className={styles.bannerLeft}>
            <Carousel effect="fade" autoplay>
              {this.initBanner()}
            </Carousel>
          </div>
          {this.initHot()}
        </div>
        <div className='bx cotent'>
          <div className={styles.recommend}><img src={require('@/assets/最热.png')} alt="" />贷款推荐</div>
          <div className={styles.contentBox}>
            {this.initContent()}
          </div>
          {nextOffset !== -1 ?
            <div className={styles.addMore} onClick={this.addMore}>加载更多
              <span key={1} className={styles.right_arrow} />
              <span key={2} className={`${styles.right_arrow} ${styles.front}`} />
            </div> : null}

        </div>
      </Fragment>
    );
  }
}

export default All;
