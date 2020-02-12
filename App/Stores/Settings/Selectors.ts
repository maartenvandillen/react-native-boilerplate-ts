import { AppState } from 'App/Stores'

export const getUserName = (state: AppState) => {
  return state.settings.userName
}
