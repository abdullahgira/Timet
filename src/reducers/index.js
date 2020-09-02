import { combineReducers } from 'redux'
import * as actionTypes from '../constants/action-types'
import * as timerState from '../constants/timer-states'

const byId = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.ADD_TIMER:
            return {
                ...state,
                [action.payload.id]: {
                    id: action.payload.id,
                    name: `Timer`,
                    time: 0, // time in ms
                    startedAt: 0,
                    state: timerState.WAITING,
                },
            }
        case actionTypes.PAUSE_TIMER:
            return {
                ...state,
                [action.payload.id]: {
                    ...state[action.payload.id],
                    state: timerState.PAUSED,
                },
            }
        case actionTypes.START_TIMER:
            return {
                ...state,
                [action.payload.id]: {
                    ...state[action.payload.id],
                    startedAt: Date.now(),
                    state: timerState.PLAYING,
                },
            }
        case actionTypes.DONE_TIMER:
            return {
                ...state,
                [action.payload.id]: {
                    ...state[action.payload.id],
                    startedAt: 0,
                    state: timerState.DONE,
                },
            }

        case actionTypes.RESET_TIMER:
            return {
                ...state,
                [action.payload.id]: {
                    ...state[action.payload.id],
                    startedAt: 0,
                    state: timerState.WAITING,
                },
            }
        default:
            return state
    }
}

const allIds = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADD_TIMER:
            return [...state, action.payload.id]
        default:
            return state
    }
}

const timers = combineReducers({
    byId,
    allIds,
})

export const getAllTimers = (state) => state.allIds.map((id) => state.byId[id])

export default timers
