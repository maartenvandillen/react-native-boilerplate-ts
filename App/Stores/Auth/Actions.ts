import { ActionCreators, createActions } from 'reduxsauce';

export enum AuthTypes {
  LOGIN = 'LOGIN',
  LOGIN_LOADING = 'LOGIN_LOADING',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
}

interface C extends ActionCreators {
  login: (userName: string, password: string) => { type: AuthTypes.LOGIN };
  loginLoading: () => { type: AuthTypes.LOGIN_LOADING };
  loginSuccess: (user: object) => { type: AuthTypes.LOGIN_SUCCESS };
  loginFailure: (errorMessage: string) => { type: AuthTypes.LOGIN_FAILURE };
}

const CreatedActions = createActions( {
   login: ['userName', 'password'],
   loginLoading: null,
   loginSuccess: ['user'],
   loginFailure: ['errorMessage'],
} );

export default CreatedActions.Creators as C;