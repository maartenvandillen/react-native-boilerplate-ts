import { put, call } from 'redux-saga/effects'
import AuthActions from 'App/Stores/Auth/Actions'
import api from 'App/Services/ApiService'
import NavigationService from 'App/Services/NavigationService'
import { KeyResponse, Key } from '../Models/Key';

export function* login(action: any) {
  const { userName, password } = action
  yield put(AuthActions.loginLoading())

  const response = yield call(api.login, userName, password)
  if (response.ok) {
    const keyResponse: KeyResponse = response.data
    if (keyResponse && keyResponse.status == 1) {
      yield put(AuthActions.loginSuccess(keyResponse))
      if (keyResponse.key && keyResponse.key.length > 0) {
        const key: Key = keyResponse.key[0]
        yield call(api.setKey, key.value)
        NavigationService.navigate("App")
      }
    }
  } else {
    debugger
    yield put(AuthActions.loginFailure('Error during login'))
  }
}
