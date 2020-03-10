import { StackActions } from '@react-navigation/native';
export default class NavigatorTools {
  static navigation = null
  /**
   * 跳转到主页
   * @param {*} navigation 
   */
  static gobackHomeNav(navigation) {
    navigation.dispatch(
      StackActions.replace('home')
    )
  }
  /**
   * 返回上一页
   * @param {*} navigation 
   */
  static goBack(navigation) {
    navigation.goBack()
  }
  /**
   * 跳转指定页面
   * @param {*} params 
   * @param {*} page 页面路由 
   */
  static go(params, page) {
    const {navigation} = params
    if(!navigation) return
    navigation.navigate(page, {
      ...params
    })
  }
}