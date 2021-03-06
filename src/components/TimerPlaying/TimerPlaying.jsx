import React from 'react'
import useTimePlaying from './hooks/useTimePlaying'
import PauseIcon from '../Icons/PauseIcon'
import * as timerState from '../../constants/timer-states'
import CheckIcon from '../Icons/CheckIcon'
import Reset from '../Reset'

import './timer-playing.scss'

export default function TimerPlaying({
    id,
    name,
    time,
    startedAt,
    remainingTime,
    state,
}) {
    const { hours, minutes, seconds, onPause } = useTimePlaying({
        id,
        time: remainingTime || time,
        startedAt,
        name,
    })
    const doneAt = (remainingTime ? 
                        new Date(startedAt + remainingTime + 2000) : 
                        new Date(startedAt + time + 2000)
                    ).toString().slice(0, 24)

    return (
        <div
            className={`card__list bg-white box-shadow border-radius mb-2 py-4 px-3 d-flex align-itmes-center justify-content-center position-relative ${
                state === timerState.DONE ? `done` : ''
            }`}
        >
            {state === timerState.DONE ? <Reset id={id} /> : null}
            <div className='d-flex align-items-center mr-4'>
                {state === timerState.DONE ? (
                    <div className='p-2 border-button-success'>
                        <CheckIcon className='text-success p-3' size={'4em'} />
                    </div>
                ) : (
                    <div
                        className='p-2 border-button-info text-info'
                        onClick={onPause}
                    >
                        <PauseIcon className='p-3' size={'4em'} role='button'/>
                    </div>
                )}
            </div>
            <div className='d-flex flex-column justify-content-center mr-3'>
                <h6 className='text-dark'>{name}</h6>
                <div className='d-flex'>
                    <h2 className='mr-1 font-weight-bold'>{hours}</h2>
                    <span className='h2 font-weight-bold mr-1 timer__playing-time-spliter'>
                        :
                    </span>
                    <h2 className='mr-1 font-weight-bold'>{minutes}</h2>
                    <span className='h2 font-weight-bold mr-1 timer__playing-time-spliter'>
                        :
                    </span>
                    <h2 className='font-weight-bold'>{seconds}</h2>
                </div>
            </div>
            {state === timerState.DONE ? (
                <div className='timer__done-at'>
                    Done at: <span className="font-weight-bold">{doneAt}</span>
                </div>
            ) : (
                null
            )}
        </div>
    )
}
