import { createStore, applyMiddleware } from 'redux'
import loggerMiddleware from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const defaultInitialState = {
  persistLoaded: false
}

// REDUCERS
export const reducer = (state = defaultInitialState, action) => {
  switch (action.type) {
    case 'SET_CHECKOUT_ID':
      return Object.assign({}, state, {
        checkoutId: action.id
      })
    case 'SET_CUSTOMER_ACCESS_TOKEN':
      return Object.assign({}, state, {
        customerAccessToken: action.token
      })
    case 'TOGGLE_DRAWER':
      return Object.assign({}, state, {
        openDrawer: action.key === state.openDrawer ? null : action.key
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
  return dispatch({ type: 'SET_CHECKOUT_ID', id })
}

export const setCustomerAccessToken = (token) => dispatch => {
  return dispatch({ type: 'SET_CUSTOMER_ACCESS_TOKEN', token })
}

export const toggleDrawer = (key) => dispatch => {
  return dispatch({ type: 'TOGGLE_DRAWER', key })
}

// STORE
export const makeStore = (initialState, { isServer, req, debug, storeKey }) => {
  if (isServer) {
    return createStore(
      reducer,
      initialState || defaultInitialState,
      composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware))
    )
  }

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
