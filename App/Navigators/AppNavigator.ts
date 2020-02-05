import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import i18next from 'i18next';

// Screens
import ExampleScreen from 'App/Containers/Example/ExampleScreen'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import LoginScreen from 'App/Containers/LoginScreen/LoginScreen';
import MapScreen from 'App/Containers/MapScreen/MapScreen';

const TabMap = createStackNavigator(
  {
    MapScreen: MapScreen,
  },
  {
    initialRouteName: 'MapScreen',
    navigationOptions: ({ navigation, navigationOptions }) => ({
      tabBarLabel: i18next.t('map:tabTitle')
    }),
     // headerMode: 'none',
  }
)

const TabDevices = createStackNavigator(
  {
    SplashScreen: SplashScreen,
    MainScreen: ExampleScreen,
  },
  {
    initialRouteName: 'SplashScreen',
    navigationOptions: ({ navigation, navigationOptions }) => ({
      tabBarLabel: i18next.t('devices:tabTitle')
    }),
    // headerMode: 'none',
  }
)

const TabNavigator = createBottomTabNavigator({
  Map: TabMap,
  Devices: TabDevices,
})

const AppStack = TabNavigator
const AuthStack = createStackNavigator({ Login: LoginScreen })

export default createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Auth',
    }
  )
);

// export default createAppContainer(TabNavigator)
