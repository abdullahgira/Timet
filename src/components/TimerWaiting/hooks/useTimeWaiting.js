import { useState, useEffect } from 'react'
import { humanReadableTime } from '../../../utils'
import { useDispatch } from 'react-redux'
import { startTimer } from '../../../actions'

export default function useTimeWaiting({ id, name, time }) {
    const [hours, setHours] = useState('')
    const [minutes, setMinutes] = useState('')
    const [seconds, setSeconds] = useState('')

    const dispatch = useDispatch()

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

    function handlePlay() {
        let time =
            Number(seconds) * 1000 +
            Number(minutes) * 60 * 1000 +
            Number(hours) * 60 * 60 * 1000
        dispatch(startTimer({ id, name, time }))
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
        handleSetHours,
        handleSetMinutes,
        handleSetSeconds,
        handlePlay,
    }
}
