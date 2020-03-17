import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class AliPayScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.getData()
  }
  getData() {
    console.log('发起请求')
    fetch('https://yesno.wtf/api')
      .then(res=>{
        if(res.ok) {
          return res.text()
        }
        throw new Error("Network Error", res)
      })
      .then(res=>{
        res = JSON.parse(res)
        this.setState({
          count: res.answer
        })
      })
  }
  render() {
    const {setting} = this.props
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>收支明细: 当前余额 ${this.state.count}</Text>
      </View>
    );

  }
}
export default connect(state => ({
    setting: state.setting
}))(AliPayScreen)