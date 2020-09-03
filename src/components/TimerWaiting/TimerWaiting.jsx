import React, { useState } from 'react'
import CloseIcon from '../Icons/CloseIcon'
import PlayIcon from '../Icons/PlayIcon'
import useTimeWaiting from './hooks/useTimeWaiting'

export default function TimerWaiting({ id, name: timerName, time }) {
    const [name, setName] = useState(timerName || 'Timer #')
    const {
        hours,
        minutes,
        seconds,
        handleSetHours,
        handleSetMinutes,
        handleSetSeconds,
        handlePlay,
    } = useTimeWaiting({ id, name, time })

    return (
        <div className='card__list bg-white border-radius box-shadow border mb-2 py-4 px-3 d-flex align-itmes-center  justify-content-center position-relative'>
            <a href='##' className='text-secondary timer__delete'>
                <CloseIcon className='text-secondary' size={'1em'} />
            </a>
            <div className='d-flex align-items-center mr-4'>
                <div className='p-2 play-button' onClick={handlePlay}>
                    <PlayIcon className='text-secondary p-3' size='4em' />
                </div>
            </div>
            <div className='d-flex flex-column justify-content-center timer__form'>
                <input
                    type='text'
                    className='form-control mb-2 timer__title-input text-black'
                    placeholder='Timer name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <div className='d-flex'>
                    <input
                        type='text'
                        className='form-control mr-1 p-1 p-lg-2 text-center timer__time-input text-black'
                        placeholder='hh'
                        value={hours}
                        onChange={(e) => handleSetHours(e.target.value)}
                    />
                    <span className='h4 mr-1 timer__play-time-spliter text-black'>
                        :
                    </span>
                    <input
                        type='text'
                        className='form-control mr-1 p-1 p-lg-2 text-center timer__time-input text-black'
                        placeholder='mm'
                        value={minutes}
                        onChange={(e) => handleSetMinutes(e.target.value)}
                    />
                    <span className='h4 mr-1 timer__play-time-spliter text-black'>
                        :
                    </span>
                    <input
                        type='text'
                        className='form-control p-1 p-lg-2 text-center timer__time-input text-black'
                        placeholder='ss'
                        value={seconds}
                        onChange={(e) => handleSetSeconds(e.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}
