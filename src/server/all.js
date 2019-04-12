import { createInstance } from '../utils/request';

const http = createInstance();

export default class Servers {
  static async queryList(params) {
    const { data } = await http.post('content/info', params);
    return data;
  }

  static async queryBanner(params) {
    const { data } = await http.post('content/info', {
      'apiName': 'pc_home_banner',
      'apiType': 'other',
      'offset': '0',
      'num': 15,
      'os': 'browser',
    });
    return data;
  }
}
