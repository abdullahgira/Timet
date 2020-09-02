import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'

import './assets/scss/main.scss'

import reducers from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const persistedState = undefined
const store = createStore(
    reducers,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
