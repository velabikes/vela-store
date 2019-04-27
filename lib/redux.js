import { createStore, applyMiddleware } from 'redux'
import loggerMiddleware from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const defaultInitialState = {
  checkoutId: null,
  persistLoaded: false
}

// REDUCERS
export const reducer = (state = defaultInitialState, action) => {
  switch (action.type) {
    case 'SET_CHECKOUT_ID':
      return Object.assign({}, state, {
        checkoutId: action.id
      })
    case 'persist/REHYDRATE':
      return Object.assign({}, state, {
        persistLoaded: true
      })
    default: return state
  }
}

// ACTIONS
export const setCheckoutId = (id) => dispatch => {
  return dispatch({ type: 'SET_CHECKOUT_ID', id: id })
}

export const initializeStore = (initialState = defaultInitialState) => {
  const { persistStore, persistReducer } = require('redux-persist')
  const storage = require('redux-persist/lib/storage').default
  const persistConfig = {
    key: 'nextjs',
    whitelist: ['checkoutId'], // make sure it does not clash with server keys
    storage
  }
  const persistedReducer = persistReducer(persistConfig, reducer)
  const store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware))
  )
  store.__persistor = persistStore(store) // Nasty hack

  return store
}
