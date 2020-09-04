import React, { useState } from 'react'
import CloseIcon from '../Icons/CloseIcon'
import PlayIcon from '../Icons/PlayIcon'
import useTimeWaiting from './hooks/useTimeWaiting'

import './timer-waiting.scss'

export default function TimerWaiting({ id, name: timerName, time }) {
    const [name, setName] = useState(timerName)
    const {
        hours,
        minutes,
        seconds,
        handlePlay,
        onDelete,
        onInputBlur,
        handleTimeInput,
        handleKeyDown,
    } = useTimeWaiting({ id, name, time })

    return (
        <div className='card__list bg-white border-radius box-shadow border mb-2 py-4 px-3 d-flex align-itmes-center  justify-content-center position-relative'>
            <a
                href='##'
                className='text-secondary timer__delete'
                onClick={onDelete}
            >
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
                    onClick={(e) => e.target.select()}
                    onChange={(e) => setName(e.target.value)}
                    onKeyUp={handleKeyDown}
                />
                <div className='d-flex'>
                    <span>
                        <input
                            type='text'
                            className='form-control mr-1 p-1 p-lg-2 text-center timer__time-input text-black'
                            placeholder='hh'
                            value={hours}
                            onClick={(e) => e.target.select()}
                            onChange={(e) =>
                                handleTimeInput({
                                    type: 'HOURS',
                                    value: e.target.value,
                                })
                            }
                            onBlur={() => onInputBlur({ type: 'HOURS' })}
                            onKeyUp={handleKeyDown}
                        />
                    </span>
                    <span className='h4 mr-1 timer__play-time-spliter text-black'>
                        :
                    </span>
                    <span>
                        <input
                            type='text'
                            className='form-control mr-1 p-1 p-lg-2 text-center timer__time-input text-black'
                            placeholder='mm'
                            value={minutes}
                            onClick={(e) => e.target.select()}
                            onChange={(e) =>
                                handleTimeInput({
                                    type: 'MINUTES',
                                    value: e.target.value,
                                })
                            }
                            onBlur={() => onInputBlur({ type: 'MINUTES' })}
                            onKeyUp={handleKeyDown}
                        />
                    </span>
                    <span className='h4 mr-1 timer__play-time-spliter text-black'>
                        :
                    </span>
                    <span>
                        <input
                            type='text'
                            className='form-control p-1 p-lg-2 text-center timer__time-input text-black'
                            placeholder='ss'
                            value={seconds}
                            onClick={(e) => e.target.select()}
                            onChange={(e) =>
                                handleTimeInput({
                                    type: 'SECONDS',
                                    value: e.target.value,
                                })
                            }
                            onBlur={() => onInputBlur({ type: 'SECONDS' })}
                            onKeyUp={handleKeyDown}
                        />
                    </span>
                </div>
            </div>
        </div>
    )
}
