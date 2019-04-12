import { createInstance } from '../utils/request';

const http = createInstance();

export default class Servers {
  static async queryList(params) {
    const { data } = await http.post('content/info', {
        'apiName': 'quanbu',
        'apiType': 'loan',
        'offset': '0',
        'num': 15,
        'os': 'browser',
      });
    return data;
  }
}
