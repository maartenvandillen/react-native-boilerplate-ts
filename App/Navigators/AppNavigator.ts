import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ExampleScreen from 'App/Containers/Example/ExampleScreen'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'

const StackNavigator = createStackNavigator(
  {
    SplashScreen: SplashScreen,
    MainScreen: ExampleScreen,
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
  }
)

const TabNavigator = createBottomTabNavigator({
  Map: ExampleScreen,
  Devices: StackNavigator,
})

export default createAppContainer(TabNavigator)
