import React from 'react'
import Timer from '../Timer'
import { useSelector } from 'react-redux'
import { getAllTimers } from '../../reducers'

export default function TimerList() {
    const state = useSelector((state) => state.timers)
    const timers = getAllTimers(state)
    return (
        <>
            {timers.map((t) => (
                <Timer key={t.id} {...t} />
            ))}
        </>
    )
}
