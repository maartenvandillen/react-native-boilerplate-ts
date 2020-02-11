import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistReducer, persistStore, createMigrate } from 'redux-persist'
import logger from 'redux-logger'
import AsyncStorage from '@react-native-community/async-storage'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [
  ],
  whitelist: ['settings'],
  version: 0,
  migrate: createMigrate({
    1: (state) => {
      console.log("==============> MIGRATION state", state)
      const migratedState = {  //Immutable({
        settings: {
          // ...state.settings,
          // settingTimerEnabled: true,
        },
      }   //)
      console.log("==============> MIGRATION migratedState", migratedState)
      return migratedState
    },
  }, { debug: true }),
}

export default (rootReducer: any, rootSaga: any) => {
  const middleware = []
  const enhancers = []

  // Connect the sagas to the redux store
  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  enhancers.push(applyMiddleware(...middleware, logger))

  // Redux persist
  const persistedReducer = persistReducer(persistConfig, rootReducer)

  const store = createStore(persistedReducer, compose(...enhancers))
  const persistor = persistStore(store)

  // Kick off the root saga
  sagaMiddleware.run(rootSaga)

  return { store, persistor }
}
