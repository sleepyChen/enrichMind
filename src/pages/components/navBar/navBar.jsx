import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import back from '../../../public/images/back.png'

// import { inject, observer } from '@tarojs/mobx'
import './navbar.scss'

class NavBar extends Component {

  render() {

    const { title, icon } = this.props;
    console.log(title, '---------props')

    const style = {
      paddingTop: `${Taro.$navigationTop + 10}px`,
      paddingBottom: '10px',
      paddingLeft: '8px',
    }

    return (
      <View className='navbar' style={style}>
        {
          icon && <Image className='back' src={back} />
        }
        <Text>{title}</Text>
      </View >
    )
  }
}

export default NavBar;