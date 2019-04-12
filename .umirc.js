// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  history:'hash',
  theme: {
    'primary-color': '#FB551B',
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: '闪电贷',
      dll: true,
      locale: {
        enable: true,
        default: 'en-US',
      },
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },

    }],
  ],
  proxy:{
    "/porsche": {
      "target": "https://zzenjqa.weshare.com.cn/",
      "changeOrigin": true,
      // "pathRewrite": { "^/porsche" : "" }
    }
  }
};
