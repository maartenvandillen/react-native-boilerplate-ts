import React, { useEffect, FunctionComponent } from 'react'
import { Text, View, TextInput, Button } from 'react-native'
import styles from './LoginScreenStyle'
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import AuthActions from 'App/Stores/Auth/Actions'

interface Props {
}

const LoginScreen: FunctionComponent<Props> = ({
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  
  useEffect(() => {
  }, [])

  const onLoginPress = () => {
    dispatch(AuthActions.login("u", "p"))
  }

  return (
    <View style={styles.container}>
      <Text>{t('login:username')}</Text>
      <TextInput />
      <Text>{t('login:password')}</Text>
      <TextInput />
      <Button title={t('login:btnLogin')} onPress={onLoginPress}/>
    </View>
  )
}

export default LoginScreen