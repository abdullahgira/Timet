import React, { useState, useEffect } from 'react'
import PlayButton from '../Icons/PlayButton'
import { humanReadableTime } from '../../utils'

export default function Timer({ name: timerName = '', time = 0, state }) {
    const [name, setName] = useState(timerName || 'Timer #')
    const [hours, setHours] = useState('')
    const [minutes, setMinutes] = useState('')
    const [seconds, setSeconds] = useState('')

    function handleSetHours(hours) {
        let h = Number(hours)
        if (!isNaN(h) && h < 25 && h >= 0) {
            hours = h < 10 ? '0' + h : h
            setHours(hours)
        }
    }

    function handleSetMinutes(minutes) {
        let m = Number(minutes)
        if (!isNaN(m) && m < 60 && m >= 0) {
            minutes = m < 10 ? '0' + m : m
            setMinutes(minutes)
        }
    }

    function handleSetSeconds(seconds) {
        let s = Number(seconds)
        if (!isNaN(s) && s < 60 && s >= 0) {
            seconds = s < 10 ? '0' + s : s
            setSeconds(seconds)
        }
    }

    useEffect(() => {
        const { hours, minutes, seconds } = humanReadableTime(time)
        setHours(hours)
        setMinutes(minutes)
        setSeconds(seconds)
    }, [time])

    function handlePlay() {
        console.log('PLAYING!')
    }

    return (
        <div className='card__list bg-white border-radius box-shadow border mb-2 py-4 px-3 d-flex align-itmes-center  justify-content-center position-relative'>
            <div className='d-flex align-items-center mr-4'>
                <div className='p-2 play-button' onClick={handlePlay}>
                    <PlayButton className='text-secondary p-3' size='4em' />
                </div>
            </div>
            <div className='d-flex flex-column justify-content-center timer__form'>
                <input
                    type='text'
                    className='form-control mb-3 timer__title-input text-black'
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
