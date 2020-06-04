import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './movie.scss'

@observer
class Movie extends Component {

  componentDidMount() { }

  componentWillReact() {
    console.log('componentWillReact   电影')
  }

  config = {
    navigationBarTitleText: '电影'
  }

  render() {
    return (
      <View className='index'>
        <Button>+</Button>
        <Button>-</Button>
      </View>
    )
  }
}

export default Movie 
