import { ActionCreators, createActions } from 'reduxsauce';

export enum SettingsTypes {
  SET_USER_NAME = 'SET_USER_NAME',
}

interface C extends ActionCreators {
  setUserName: (userName: string) => { type: SettingsTypes.SET_USER_NAME };
}

const CreatedActions = createActions( {
   setUserName: ['userName'],
} );

export default CreatedActions.Creators as C;