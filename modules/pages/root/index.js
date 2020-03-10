import React, {Component} from 'react';
import { Text, Button, View } from 'react-native';
import { StackActions } from '@react-navigation/native';

export default class RootScreen extends Component {
  constructor(props) {
    super(props)
    this.timer = null
    this.state  = {
      countdown: 5
    }
  }
  componentDidMount() {
    this.play()
  }
  componentWillUnmount() {
    this.clear()
  }
  gobackHomeNav() {
    let { navigation } = this.props
    navigation.dispatch(
      StackActions.replace("home")
    )
  }
  play() {
    this.timer = setInterval(()=> {

      if(this.state.countdown===0) {
        this.gobackHomeNav()
        this.clear()
        return
      }
      this.setState({
        countdown: this.state.countdown - 1
      })
    },1000)
  }
  clear() {
    if(this.timer) {
      clearInterval(this.timer)
      this.timer = null
    }
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>欢迎页</Text>
        <Text>倒计时: {this.state.countdown}</Text>
      </View>
    );
  }
}