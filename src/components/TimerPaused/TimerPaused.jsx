import React from 'react'
import { humanReadableTime } from '../../utils'
import Reset from '../Reset'
import { useDispatch } from 'react-redux'
import { startTimer } from '../../actions'
import PlayIcon from '../Icons/PlayIcon'

export default function TimerPaused({ id, name, time, pausedAt }) {
    const { hours, minutes, seconds } = humanReadableTime(pausedAt || time)
    const dispatch = useDispatch()

    function handleResume() {
        dispatch(startTimer({ id, name, time }))
    }

    return (
        <div className='card__list bg-white box-shadow border-radius border mb-2 py-4 px-3 d-flex align-itmes-center justify-content-center position-relative'>
            <Reset id={id} />
            <div className='d-flex align-items-center mr-4'>
                <div className='p-2 border-button-dark' onClick={handleResume}>
                    <PlayIcon size={'4em'} className='text-dark p-3' />
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
