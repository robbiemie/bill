import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import DataStore from "./../../db/dao/DataStore"

class AliPayScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      txt: ''
    }
    this.dataStore = new DataStore()
  }
  getData() {
    console.log('发起请求')
    this.dataStore.fetchNetData('https://yesno.wtf/api')
      .then(res=>{
        console.log('res', res)
        this.setState({
          txt: res
        })
      })
  }
  render() {
    const {setting} = this.props
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text onPress={this.getData.bind(this)}>收支明细: 当前余额 ${JSON.stringify(this.state.txt)}</Text>
      </View>
    );

  }
}
export default connect(state => ({
    setting: state.setting
}))(AliPayScreen)