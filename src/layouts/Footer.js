import React, { PureComponent } from 'react';
import { Layout } from 'antd';

const {Footer} = Layout;

function FooterCmp() {
  return <Footer>底部</Footer>;
}

export default FooterCmp

// export default class Footer extends PureComponent {
//   state = {
//     activeKey: '',
//   };
//
//   render() {
//     return (
//       <Layout>
//         <Header>123</Header>
//       </Layout>
//     );
//   }
// }
