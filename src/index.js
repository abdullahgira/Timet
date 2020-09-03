import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'

import './assets/scss/main.scss'

import reducers from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { v4 } from 'uuid'
import { loadState, saveState } from './local-storage'

const ids = [v4(), v4(), v4()]

// const persistedState = {
//     byId: {
//         [ids[0]]: {
//             id: ids[0],
//             name: 'Work',
//             time: 25 * 60 * 1000,
//             currentTime: 25 * 60 * 1000,
//             startedAt: 0,
//             pausedAt: 0,
//             state: 'WAITING',
//         },
//         [ids[1]]: {
//             id: ids[1],
//             name: 'Rest',
//             time: 5 * 60 * 1000,
//             startedAt: 1599069063160,
//             pausedAt: 0,
//             state: 'PLAYING',
//         },
//         [ids[2]]: {
//             id: ids[2],
//             name: 'Work',
//             time: 40 * 60 * 1000,
//             currentTime: 38 * 60 * 1000 + 22 * 1000,
//             startedAt: 0,
//             pausedAt: 0,
//             state: 'PAUSED',
//         },
//     },
//     allIds: ids,
// }

const persistedState = loadState()
const store = createStore(
    reducers,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
    saveState({
        byId: store.getState().byId,
        allIds: store.getState().allIds,
    })
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
