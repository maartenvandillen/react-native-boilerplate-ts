import React, { FunctionComponent, useEffect } from 'react'
import { Platform, Text, View, Button, ActivityIndicator, Image } from 'react-native'
import { connect } from 'react-redux'
import ExampleActions from 'App/Stores/Example/Actions'
import { liveInEurope } from 'App/Stores/Example/Selectors'
import Style from './ExampleScreenStyle'
import { Images } from 'App/Theme'
import { Dispatch } from 'redux'
import { AppState } from 'App/Stores'

/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and informations about a fake user.
 * Feel free to remove it.
 */

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu.',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu.',
})

interface ExampleScreenBaseProps {
  fetchUser: typeof ExampleActions.fetchUser;
  user?: { name?: string };
  userIsLoading: boolean;
  userErrorMessage: string;
}

const ExampleScreenBase: FunctionComponent<ExampleScreenBaseProps> = ({
  fetchUser,
  userIsLoading,
  userErrorMessage,
  user,
}) => {
  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <View style={Style.container}>
      {userIsLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          <View style={Style.logoContainer}>
            <Image style={Style.logo} source={Images.logo} resizeMode={'contain'} />
          </View>
          <Text style={Style.text}>To get started, edit App.js</Text>
          <Text style={Style.instructions}>{instructions}</Text>
          {userErrorMessage ? (
            <Text style={Style.error}>{userErrorMessage}</Text>
          ) : (
            <View>
              <Text style={Style.result}>
                {"I'm a fake user, my name is "}
                {user && user.name}
              </Text>
              <Text style={Style.result}>
                {liveInEurope ? 'I live in Europe !' : "I don't live in Europe."}
              </Text>
            </View>
          )}
          <Button onPress={fetchUser} title="Refresh" />
        </View>
      )}
    </View>
  )
}

const mapStateToProps = (state: AppState): any => ({
  user: state.example.user,
  userIsLoading: state.example.userIsLoading,
  userErrorMessage: state.example.userErrorMessage,
  liveInEurope: liveInEurope(state),
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchUser: () => dispatch(ExampleActions.fetchUser()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExampleScreenBase)
