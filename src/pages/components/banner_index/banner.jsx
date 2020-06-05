import Taro, { Component } from '@tarojs/taro';
import { Swiper, SwiperItem, Image } from '@tarojs/components';
import './banner.scss';

class Banner extends Component {

  render() {

    const { bannerItems } = this.props

    return (
      <Swiper
        className='banner'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        vertical={false}
        circular
        indicatorDots
        autoplay
      >
        {
          bannerItems.map((item, index) => (
            <SwiperItem key={index}>
              <Image className='swipe-img' src={item} mode='widthFix' />
            </SwiperItem>
          ))
        }
      </Swiper>
    )
  }
}

export default Banner;