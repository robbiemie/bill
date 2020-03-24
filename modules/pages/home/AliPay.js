import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, RefreshControl, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import DataStore from "./../../db/dao/DataStore"
import { fetchDataAction } from "./../../action/fetchAction"

const URL = "https://api.github.com/search/repositories?q=jquery"

class AliPayScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      txt: ''
    }
    this.storeName = this.props.route.name
    this.dataStore = new DataStore()
  }
  componentDidMount() {
    this.getData()
  }
  getData() {
    console.log('发起请求')
    const { fetchData } = this.props
    fetchData(this.storeName, 'https://yesno.wtf/api')
    
    // this.dataStore.fetchNetData('https://yesno.wtf/api')
    //   .then(res=>{
    //     console.log('res', res)
    //     this.setState({
    //       txt: res
    //     })
    //   })
  }
  genFooterComponent() {
    return (
      <View style={styles.footerWrap}>
        <ActivityIndicator
          size='small'
          color='#ccc'
          animating={true}
        />
        <Text style={styles.loading}>正在加载更多</Text>
      </View>
    )
  }
  _renderItem (item ="") {
    console.log('render', item)
    return (<View><Text>{JSON.stringify(item)}</Text></View>)
  }
  render() {
    const {setting, home} = this.props
    let store = home[this.storeName]
    let list = [store?.list] || []
    // console.log('home,', list)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* <Text onPress={this.getData.bind(this)}>收支明细: 当前余额 ${JSON.stringify(this.state.txt)}</Text> */}
        <FlatList 
          data={list} 
          keyExtractor={item=> Date.now() + ""}
          renderItem={({item})=> this._renderItem(item)}
          ListFooterComponent={()=> this.genFooterComponent()}
          // onEndReached={()=>this.getData()}
          // 自定义刷新组件
          refreshControl={
            <RefreshControl
              onRefresh={()=>this.getData()}
              refreshing={Boolean(store?.isLoading)}
              tintColor="#ff0000"
              title="Loading..."
              titleColor="#00ff00"
              colors={['#ff0000', '#00ff00', '#0000ff']}
              progressBackgroundColor="#ffff00"
            />
          }
        />
      </View>
    );

  }
}


const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  item: {
    height: 100,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "#ccc",
  },
  footerWrap: {
    justifyContent: "center",
    alignItems: "center"
  },
  loading: {
    color: "#ccc",
    marginTop: 10
  }
})

const mapStateToProps = state => ({
  home: state.home,
  setting: state.setting,
})

const mapDispatchToProps = dispatch => ({
  fetchData: (storeName,url) => dispatch(fetchDataAction(storeName,url))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AliPayScreen)