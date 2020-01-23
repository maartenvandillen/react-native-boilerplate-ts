import React, { FunctionComponent, useEffect } from 'react'
import { Platform, Text, View, Button, ActivityIndicator, Image } from 'react-native'
import { connect } from 'react-redux'
import ExampleActions from 'App/Stores/Example/Actions'
import { liveInEurope } from 'App/Stores/Example/Selectors'
import Style from './MapScreenStyle'
import { Images } from 'App/Theme'
import { Dispatch } from 'redux'
import { AppState } from 'App/Stores'


interface MapScreenBaseProps {
  fetchUser: typeof ExampleActions.fetchUser;
  user?: { name?: string };
  userIsLoading: boolean;
  userErrorMessage: string;
}

const MapScreen: FunctionComponent<MapScreenBaseProps> = ({
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
      <Text>Map</Text>
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
)(MapScreen)
