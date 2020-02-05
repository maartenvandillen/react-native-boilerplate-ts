import React, { useEffect } from 'react'
import { Text, View, TextInput, Button } from 'react-native'
import styles from './LoginScreenStyle'
import { useTranslation } from 'react-i18next';
import { NavigationStackScreenComponent, NavigationStackScreenProps } from 'react-navigation-stack'

interface Props extends NavigationStackScreenProps {
}

export const LoginScreen: NavigationStackScreenComponent<Props> = ({
  navigation
}) => {
  const { t } = useTranslation();
  
  useEffect(() => {
  }, [])

  const onLoginPress = () => {
    navigation.navigate("App")
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

LoginScreen.navigationOptions = {
  title: "TODO",
};

export default LoginScreen