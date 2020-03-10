import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AliPay from "./AliPay"
import JDFinance from "./JDFinance"
import Bank from "./Bank"
import Others from "./Others"

const Tab = createMaterialTopTabNavigator();

export default function HomeScreen({navigation}) {
  navigation.setOptions({
    title: 'xxx'
  })
  return (
    <Tab.Navigator initialRouteName="page1">
      <Tab.Screen name="alipay" component={AliPay} options={{title: "支付宝"}}></Tab.Screen>
      <Tab.Screen name="jd" component={JDFinance} options={{title: "京东金融"}}></Tab.Screen>
      <Tab.Screen name="bank" component={Bank} options={{title: "招商银行"}}></Tab.Screen>
      <Tab.Screen name="others" component={Others} options={{title: "其他"}}></Tab.Screen>
    </Tab.Navigator>
  );
}