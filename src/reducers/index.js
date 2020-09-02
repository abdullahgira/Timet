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
                    pausedAt: 0,
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
