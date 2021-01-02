import React from 'react'
import { useDispatch } from 'react-redux'
import { addTimer } from '../../actions'
import { v4 } from 'uuid'

import './add-timer.scss'

export default function AddTimer() {
    const dispatch = useDispatch()
    return (
        <button
            className='btn btn-info box-shadow p-5 text-center add-timer border-radius'
            onClick={() => dispatch(addTimer({ id: v4() }))}
        >
            <span>+</span>
        </button>
    )
}
