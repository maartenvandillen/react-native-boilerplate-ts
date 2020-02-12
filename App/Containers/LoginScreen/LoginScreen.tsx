import React, { useEffect, FunctionComponent, useState } from 'react'
import { Text, View, TextInput, Button } from 'react-native'
import styles from './LoginScreenStyle'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import AuthActions from 'App/Stores/Auth/Actions'
import { getUserName } from 'App/Stores/Settings/Selectors'

interface Props {
}

const LoginScreen: FunctionComponent<Props> = ({
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState(useSelector(getUserName))
  const [password, setPassword] = useState("")
  
  useEffect(() => {
  }, [])

  const onLoginPress = () => {
    if (userName) {
      dispatch(AuthActions.login(userName, password))
    }
  }

  return (
    <View style={styles.container}>
      <Text>{t('login:username')}</Text>
      <TextInput onChangeText={setUserName} value={userName} />
      <Text></Text>
      <Text>{t('login:password')}</Text>
      <TextInput onChangeText={setPassword} value={password} />
      <Button title={t('login:btnLogin')} onPress={onLoginPress}/>
    </View>
  )
}

export default LoginScreen