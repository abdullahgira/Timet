import { combineReducers } from 'redux'
import alarmReducer from '../components/Alarm/alarm-reducer'
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
                    remainingTime: 0,
                    state: timerState.WAITING,
                },
            }
        case actionTypes.UPDATE_TIMER:
            return {
                ...state,
                [action.payload.id]: {
                    ...state[action.payload.id],
                    name: action.payload.name || state[action.payload.id].name || `Timer`,
                    time: action.payload.time || state[action.payload.id].time || 0, // time in ms
                },
            }
        case actionTypes.PAUSE_TIMER:
            return {
                ...state,
                [action.payload.id]: {
                    ...state[action.payload.id],
                    // pausedAt: action.payload.pausedAt,
                    remainingTime: action.payload.remainingTime,
                    state: timerState.PAUSED,
                },
            }
        case actionTypes.START_TIMER:
            return {
                ...state,
                [action.payload.id]: {
                    ...state[action.payload.id],
                    name: action.payload.name,
                    time: action.payload.time,
                    startedAt: Date.now(),
                    state: timerState.PLAYING,
                },
            }
        case actionTypes.DONE_TIMER:
            return {
                ...state,
                [action.payload.id]: {
                    ...state[action.payload.id],
                    doneAt: action.payload.doneAt,
                    state: timerState.DONE,
                },
            }
        case actionTypes.RESET_TIMER:
            return {
                ...state,
                [action.payload.id]: {
                    ...state[action.payload.id],
                    startedAt: 0,
                    // pausedAt: 0,
                    remainingTime: 0,
                    state: timerState.WAITING,
                },
            }
        case actionTypes.DELETE_TIMER:
            return {
                ...state,
                [action.payload.id]: undefined,
            }
        default:
            return state
    }
}

const allIds = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADD_TIMER:
            return [...state, action.payload.id]
        case actionTypes.DELETE_TIMER:
            return state.filter((id) => id !== action.payload.id)
        default:
            return state
    }
}

const timers = combineReducers({
    byId,
    allIds,
})

export const getAllTimers = (state) => state.allIds.map((id) => state.byId[id])

export default combineReducers({
    timers,
    alarm: alarmReducer,
})
