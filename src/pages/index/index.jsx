/* eslint-disable react/sort-comp */
import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Input, Image } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtDrawer } from 'taro-ui'
import './index.scss'
import NavBar from '../components/navBar/navBar'
import Banner from '../components/banner_index/banner'
import LocationDrawer from '../components/locationDrawer/locationDrawer'


@inject('counterStore')
@observer
class Index extends Component {

  state = {
    swipeImages: [
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576647704206&di=42394f91a10b1314a3d2cfe27b734737&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fb99bc7d770b8cb0a25dd305695e580560a57c8db1316d-aS60Vz_fw658",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576647704202&di=ec0dc52236a5257dfb9f8b3ae48c1206&imgtype=0&src=http%3A%2F%2Fimage1.wulinsoso.com%2Fpsd%2F16sucai%2F2014%2F01%2F11%2F0153266138.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576647704205&di=457f3dca021410a6a27f54cbae8b45b4&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fe21204e6a5460b4b8428e334bd8712ce11027c1faac6-wDFiPd_fw658",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576647704198&di=d3292160b849b26054da705e7c44a4bd&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F47082f4ac3e9c0319c9125b8da7e4fd5116e547132191-KEnzHi_fw658"
    ],
    showDrawer: false,
    drawerItems: ['菜单1', '菜单2']
  }

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount() { }

  componentWillReact() {
    console.log('componentWillReact')
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  increment = () => {
    const { counterStore } = this.props
    counterStore.increment()
  }

  decrement = () => {
    const { counterStore } = this.props
    counterStore.decrement()
  }

  incrementAsync = () => {
    const { counterStore } = this.props
    counterStore.incrementAsync()
  }

  drawerHandle = (bool = true) => {
    this.setState({
      showDrawer: bool
    })
  }

  render() {
    const { counterStore: { counter } } = this.props
    const { swipeImages, showDrawer, drawerItems } = this.state;
    return (
      <View className='index'>

        <NavBar title='首页' icon={false} />

        <View className='search_item'>
          <Input placeholderClass='search_placeholder' placeholder='输入查询电影关键词' className='search_ipt' />
          <Text className='location' onClick={this.drawerHandle}>广州</Text>
        </View>

        <LocationDrawer show={showDrawer} items={drawerItems} onClose={this.drawerHandle(false)} />

        <Banner bannerItems={swipeImages} />

        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <Text>{counter}</Text>

      </View>
    )
  }
}

export default Index 
