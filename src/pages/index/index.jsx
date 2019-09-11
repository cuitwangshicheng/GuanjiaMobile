import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import langJson from '../../lang/idnex.js'
import './index.scss'

@connect(({system}) => ({
  lang: require(`../../lang/${system.lang}.json`)
}))

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () {
    console.log(this.props)
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <Text>{this.props.lang.tips.defaultTitle}</Text>
      </View>
    )
  }
}
