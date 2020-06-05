import Taro, { Component } from '@tarojs/taro';
import { AtDrawer } from 'taro-ui';

class LocationDrawer extends Component {

  render() {
    const { show, items, onClose } = this.props;

    return (
      <AtDrawer
        show={show}
        right
        mask
        onClose={onClose}
        items={items}
      ></AtDrawer>
    )
  }
}

export default LocationDrawer;