import React, { FunctionComponent, useEffect } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import ExampleActions from 'App/Stores/Example/Actions'
import Style from './MapScreenStyle'
import { Dispatch } from 'redux'
import { AppState } from 'App/Stores'
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  
  useEffect(() => {
    // fetchUser()
  }, [fetchUser])

  return (
    <View style={Style.container}>
      <Text>{t('common:appTitle')}</Text>
      <Text>{t('home:screenTitle')}</Text>
    </View>
  )
}

const mapStateToProps = (state: AppState): any => ({
  user: state.example.user,
  userIsLoading: state.example.userIsLoading,
  userErrorMessage: state.example.userErrorMessage,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchUser: () => dispatch(ExampleActions.fetchUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen)