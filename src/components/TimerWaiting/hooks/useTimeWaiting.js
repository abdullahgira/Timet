import { useState, useEffect } from 'react'
import { humanReadableTime } from '../../../utils'
import { useDispatch } from 'react-redux'
import { startTimer, deleteTimer, updateTimer } from '../../../actions'

export default function useTimeWaiting({ id, name, time }) {
    const [hours, setHours] = useState('')
    const [minutes, setMinutes] = useState('')
    const [seconds, setSeconds] = useState('')

    const dispatch = useDispatch()

    function onInputBlur({ type }) {
        let hasBeenSuccessfullyUpdated = true
        switch (type) {
            case 'HOURS':
                let h = Number(hours)
                setHours(h < 10 ? '0' + h : h)
                break
            case 'MINUTES':
                let m = Number(minutes)
                setMinutes(m < 10 ? '0' + m : m)
                break
            case 'SECONDS':
                let s = Number(seconds)
                setSeconds(s < 10 ? '0' + s : s)
                break
            default:
                hasBeenSuccessfullyUpdated = false
                return null
        }

        if (hasBeenSuccessfullyUpdated)
            handleTimerUpdate()
    }

    function handleTimeInput({ type, value }) {
        switch (type) {
            case 'HOURS':
                let h = Number(value)
                if (!isNaN(h) && h < 25 && h >= 0) setHours(value)
                break
            case 'MINUTES':
                let m = Number(value)
                if (!isNaN(m) && m < 60 && m >= 0) setMinutes(value)
                break
            case 'SECONDS':
                let s = Number(value)
                if (!isNaN(s) && s < 60 && s >= 0) setSeconds(value)
                break
            default:
                return null
        }
    }

    function handleTimerUpdate() {
        let time =
            Number(seconds) * 1000 +
            Number(minutes) * 60 * 1000 +
            Number(hours) * 60 * 60 * 1000
        dispatch(updateTimer({ id, name, time }))
    }

    function handlePlay() {
        let time =
            Number(seconds) * 1000 +
            Number(minutes) * 60 * 1000 +
            Number(hours) * 60 * 60 * 1000
        dispatch(startTimer({ id, name, time }))
    }

    function onDelete() {
        dispatch(deleteTimer({ id }))
    }

    function handleKeyDown(e) {
        if (e.which === 13) {
            handlePlay()
        }
    }

    useEffect(() => {
        const { hours, minutes, seconds } = humanReadableTime(time)
        setHours(hours)
        setMinutes(minutes)
        setSeconds(seconds)
    }, [time])

    return {
        hours,
        minutes,
        seconds,
        handlePlay,
        onDelete,
        onInputBlur,
        handleTimeInput,
        handleKeyDown,
        handleTimerUpdate
    }
}
