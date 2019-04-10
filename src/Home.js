import React, { Component } from 'react';
import {Button} from 'antd'

class Home extends Component {
  state = {
    num: 1,
  };

  add = () => {
    this.setState(prevState => ({ ...prevState, num: prevState.num + 1 }));
  };

  render() {
    console.log(this.props);
    const { num } = this.state;
    return <Button type='primary' onClick={ this.add }>++ { num }</Button>;
  }
}

export default Home
