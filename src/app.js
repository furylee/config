// import { createHashHistory } from 'history';

export const dva = {
  config: {
    // history: createHashHistory(),
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};
