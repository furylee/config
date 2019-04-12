import Servers from '../server/all';

export default {
  namespace: 'all',
  state: {
    dataList: [],
    bannerList: [],
    nextOffset: 0,
  },
  effects: {
    * queryList({ payload }, { call, put, select }) {
      const { quanbu, nextOffset } = yield call(Servers.queryList,payload);
      const {dataList} = yield select(state=>state.all);
      console.log(quanbu);
      yield put({
        type: 'save',
        payload: {
          dataList: dataList.concat(quanbu),
          nextOffset,
        },
      });
    },

    * queryBanner({ payload }, { call, put }) {
      const { list } = yield call(Servers.queryBanner,payload);
      yield put({
        type: 'save',
        payload: {
          bannerList: list,
        },
      });
    },


  },
  reducers: {
    save(state, { payload }) {
      // 保存数据到 state
      return { ...state, ...payload };
    },
  },
  subscriptions: {
    // setup({ history, dispatch }) {
    //   // 监听 history 变化，当进入 `/` 时触发 `load` action
    //   return history.listen(({ pathname }) => {
    //     if (pathname ) {
    //       dispatch({ type: 'queryList' });
    //     }
    //   });
    // },
  },
};
