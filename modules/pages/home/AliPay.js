import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

function AliPayScreen({setting}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>收支明细: 当前余额 ${setting.count}</Text>
    </View>
  );
}
export default connect(state => ({
    setting: state.setting
}))(AliPayScreen)