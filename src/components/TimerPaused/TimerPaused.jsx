import React from 'react'
import { humanReadableTime } from '../../utils'
import Reset from '../Reset'

export default function TimerPaused({ name, time, startedAt, pausedAt }) {
    const { hours, minutes, seconds } = humanReadableTime(time)
    return (
        <div className='card__list bg-white box-shadow border-radius border mb-2 py-4 px-3 d-flex align-itmes-center justify-content-center position-relative'>
            <Reset />
            <div className='d-flex align-items-center mr-4'>
                <div className='p-2 pause-button'>
                    <svg
                        width='4em'
                        height='4em'
                        viewBox='0 0 16 16'
                        className='text-dark p-3'
                        fill='currentColor'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path d='M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z' />
                    </svg>
                </div>
            </div>
            <div className='d-flex flex-column justify-content-center text-dark mr-3'>
                <h6>{name}</h6>
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
        </div>
    )
}
