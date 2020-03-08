import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Page1 from "./toptab/page1"
import Page2 from "./toptab/page2"
import Page3 from "./toptab/page3"
import Page4 from "./toptab/page4"
import Page5 from "./toptab/page5"
import Page6 from "./toptab/page6"

const Tab = createMaterialTopTabNavigator();


export default function DetailsScreen({navigation}) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Page1" component={Page1} options={{title: "娱乐"}}/>
      <Tab.Screen name="Page2" component={Page2} options={{title: "影音"}}/>
      <Tab.Screen name="Page3" component={Page3} options={{title: "动漫"}}/>
      <Tab.Screen name="Page4" component={Page4} options={{title: "直播"}}/>
      <Tab.Screen name="Page5" component={Page5} options={{title: "综合"}}/>
      <Tab.Screen name="Page6" component={Page6} options={{title: "周边"}}/>
    </Tab.Navigator>
  );
}