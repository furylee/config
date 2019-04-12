import Servers from '../server/all';

export default {
  namespace: 'all',
  state: {
    a: 1,
  },
  effects: {
    * queryList({ payload }, { call, put }) {
      const { data } = yield call(Servers.queryList);
      console.log(data);
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
