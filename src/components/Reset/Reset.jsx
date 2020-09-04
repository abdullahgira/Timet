import React from 'react'
import { useDispatch } from 'react-redux'
import { resetTimer, pauseAudio } from '../../actions'

export default function Reset({ id }) {
    const dispatch = useDispatch()

    return (
        <a
            href='##'
            className='text-primary timer__reset'
            onClick={() => {
                dispatch(resetTimer({ id }))
                dispatch(pauseAudio())
            }}
        >
            RESET
        </a>
    )
}
