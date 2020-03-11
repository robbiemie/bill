import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AliPay from "./AliPay"
import JDFinance from "./JDFinance"
import Bank from "./Bank"
import Others from "./Others"

const Tab = createMaterialTopTabNavigator();

export default class HomeScreen extends Component{
  constructor(props) {
    super(props)
    this.tabsName = ['alipay', 'jd', 'bank', 'others', 'others', 'others', 'others']
    this.tabs = {}
  }

  _genTabs() {
    this.tabsName.forEach((name,index)=>{
      this.tabs[`tab${index}`] = {
        name,
        screen: AliPay,
        title: "支付宝"
      }
    })
    return tabs
  }

  render(h) {
    return (
      <Tab.Navigator 
        initialRouteName="page1"
        tabBarOptions={{
          labelStyle: { fontSize: 12 },
          tabStyle: { width: 80 },
          style: { backgroundColor: "#fff" },
          scrollEnabled: true // 滚动配置
        }}
      >
        <Tab.Screen name="alipay" component={AliPay} options={{title: "支付宝"}}></Tab.Screen>
        <Tab.Screen name="jd" component={JDFinance} options={{title: "京东金融"}}></Tab.Screen>
        <Tab.Screen name="bank" component={Bank} options={{title: "招商银行"}}></Tab.Screen>
        <Tab.Screen name="others" component={Others} options={{title: "其他"}}></Tab.Screen>
        <Tab.Screen name="others1" component={Others} options={{title: "其他1"}}></Tab.Screen>
      </Tab.Navigator>
    ); 
  }
}