import React from 'react'
import * as timerStates from '../../constants/timer-states'
import './Timer.scss'
import TimerWaiting from '../TimerWaiting'
import TimerPlaying from '../TimerPlaying'
import TimerPaused from '../TimerPaused'

export default function Timer({ state, ...timer }) {
    if (state === timerStates.WAITING) {
        return <TimerWaiting {...timer} />
    } else if (state === timerStates.PLAYING || state === timerStates.DONE) {
        return <TimerPlaying state={state} {...timer} />
    } else if (state === timerStates.PAUSED) {
        return <TimerPaused {...timer} />
    } else return null
}
