import { put, call } from 'redux-saga/effects'
import AuthActions from 'App/Stores/Auth/Actions'
import { api } from 'App/Services/ApiService'
import NavigationService from 'App/Services/NavigationService'

export function* login(action: any) {
  const { userName, password } = action
  yield put(AuthActions.loginLoading())

  const user = yield call(api.login, userName, password)
  if (user) {
    yield put(AuthActions.loginSuccess(user))
    NavigationService.navigate("App")
  } else {
    yield put(
      AuthActions.loginFailure('There was an error while fetching user informations.')
    )
  }
}
