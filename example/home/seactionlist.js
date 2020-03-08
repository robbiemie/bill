import React, {Component} from "react"
import { StyleSheet, View, Text, SectionList, RefreshControl, ActivityIndicator } from "react-native";

export default class SectionListPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      dataSource: [
      {
        title:'一级', 
        data: [1,2,3,4,5,6,7]
      },{
        title:'二级', 
        data: [1,2,3,4,5,6,7]
      },{
        title:'三级', 
        data: [1,2,3,4,5,6,7]
      },{
        title:'四级', 
        data: [1,2,3,4,5,6,7]
    }]
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
          dataSource: this.state.dataSource.concat([{
              title:'五级', 
              data: [1,2,3,4,5,6,7]
          },{
              title:'六级', 
              data: [1,2,3,4,5,6,7]
          }])
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
  genSectionHeader(title) {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>
      </View>
    )
  }
  _renderItem(data) {
    return (
      <View style={styles.item}>
        <Text>{data}</Text>
      </View>
    )
  }
  render() {
    const {dataSource,isLoading} = this.state
    return (
      <View style={styles.container}>
        <SectionList 
          sections={dataSource}
          renderSectionHeader={({ section: { title } }) => this.genSectionHeader(title)}
          renderItem={({item,index})=> this._renderItem(item,index)}
          ItemSeparatorComponent={()=><View style={styles.separator}/>}
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
  },
  sectionHeader: {
    fontWeight: "bold", 
    height: 100, 
    backgroundColor: "#000", 
    justifyContent: "center", 
    alignItems: "center"
  },
  sectionTitle: {
    color: "#fff"
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: "#000"
  }
})