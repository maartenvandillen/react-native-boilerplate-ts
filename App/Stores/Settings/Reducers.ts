import { INITIAL_STATE, SettingsState } from './InitialState'
import { createReducer } from 'reduxsauce'
import { SettingsTypes } from './Actions'

export const setUserName = (state: SettingsState, payload: any) => ({
  ...state,
  userName: payload.userName
})

export const reducer = createReducer(INITIAL_STATE, {
  [SettingsTypes.SET_USER_NAME]: setUserName,
})
