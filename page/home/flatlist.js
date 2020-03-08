import React, {Component} from "react"
import { StyleSheet, View, Text, FlatList, RefreshControl, ActivityIndicator } from "react-native";

export default class FlatListPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      dataSource: [{key:1},{key:2},{key:3},{key:4},{key:5},{key:6},{key:7},{key:8}]
    }
  }
  // 模拟请求
  fetchData({refreshing= true}) {
    if(refreshing) {
      this.setState({
        isLoading: true
      })
    }
    setTimeout(()=>{
      if(refreshing) {
        this.setState({
          isLoading: false,
          dataSource: this.state.dataSource.reverse() // 翻转列表
        })
      } else {
        this.setState({
          isLoading: false,
          dataSource: this.state.dataSource.concat([{key:9},{key:10},{key:11},{key:12}])
        })
      }
    },2000)
  }
  getFooterComponent() {
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
  _renderItem(data,index) {
    return (
      <View style={styles.item} key={data.key}>
        <Text key={data.key}>{data.key}</Text>
      </View>
    )
  }
  render() {
    const {dataSource,isLoading} = this.state
    return (
      <View style={styles.container}>
        <FlatList 
          data={dataSource}
          renderItem={({item,index})=> this._renderItem(item,index)}
          ListFooterComponent={()=> this.getFooterComponent()}
          onEndReached={()=>this.fetchData({refreshing: false})}
          // 自定义刷新组件
          refreshControl={
            <RefreshControl
              onRefresh={()=>this.fetchData({refreshing: true})}
              refreshing={isLoading}
              tintColor="#ff0000"
              title="Loading..."
              titleColor="#00ff00"
              colors={['#ff0000', '#00ff00', '#0000ff']}
              progressBackgroundColor="#ffff00"
            />
          }
          // 默认刷新组件
          // onRefresh={()=>this.fetchData()}
          // refreshing={isLoading}
        />
      </View>
    )
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