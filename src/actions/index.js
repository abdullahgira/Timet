import * as types from '../constants/action-types'

export const addTimer = (payload) => ({
    type: types.ADD_TIMER,
    payload,
})

export const editTimer = (payload) => ({
    type: types.EDIT_TIMER,
    payload,
})

export const startTimer = (payload) => ({
    type: types.START_TIMER,
    payload,
})

export const pauseTimer = (payload) => ({
    type: types.PAUSE_TIMER,
    payload,
})

export const resetTimer = (payload) => ({
    type: types.RESET_TIMER,
    payload,
})
