import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, RefreshControl, ActivityIndicator, Dimensions } from 'react-native';
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
    // console.log('render', item)
    return (
    <View style={styles.item}>
      {/* <Text style={styles.itemTxt}>答案:{item.answer ? '对' : '错'}</Text> */}
      <Text>答案:{JSON.stringify(item)}</Text>
      {/* <Text>答案:{item.answer ? '对' : '错'}</Text> */}
    </View>)
  }
  render() {
    const {setting, home} = this.props
    let store = home[this.storeName]
    let list = store?.list || []
    return (
      <View style={styles.container}>
        <FlatList 
          style={{flex: 1, width: Dimensions.get("window").width, padding: 6}}
          data={list} 
          keyExtractor={item=> item.image + Math.random() * Date.now()}
          renderItem={({item})=> this._renderItem(item)}
          // ListFooterComponent={()=> this.genFooterComponent()}
          // onEndReached={()=>this.getData()}
          // 自定义刷新组件
          refreshControl={
            <RefreshControl
              onRefresh={()=>this.getData()}
              refreshing={Boolean(store?.isLoading)}
              tintColor="#ccc"
              title="Loading..."
              titleColor="#ccc"
              colors={['#ccc']} // 
              progressBackgroundColor="#ccc"
            />
          }
        />
      </View>
    );

  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  item: {
    marginBottom: 10,
    padding: 8,
    flex: 1,
    height: 100,
    backgroundColor: "#fff",
  },
  itemTxt: {
    display: 'flex',
    flex: 1
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