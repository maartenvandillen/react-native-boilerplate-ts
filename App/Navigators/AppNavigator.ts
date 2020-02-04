import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';

// Screens
import ExampleScreen from 'App/Containers/Example/ExampleScreen'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import MapScreen from 'App/Containers/MapScreen/MapScreen';

const TabMap = createStackNavigator(
  {
    MapScreen: MapScreen,
  },
  {
    initialRouteName: 'MapScreen',
    headerMode: 'none',
  }
)

const TabDevices = createStackNavigator(
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
  Map: TabMap,
  Devices: TabDevices,
})

export default createAppContainer(TabNavigator)
