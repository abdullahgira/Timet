import { useRef, useState, useEffect } from 'react'
import { humanReadableTime } from '../../../utils'
import { useDispatch } from 'react-redux'
import { doneTimer, pauseTimer, playAudio } from '../../../actions'

import * as notification from '../../../notifications'

export default function useTimePlaying({ id, time, startedAt, name }) {
    const intervalRef = useRef()
    const dispatch = useDispatch()

    // this way the flickering that happens before starting any paused timer
    // is fixed ;)
    const { hours: dh, minutes: dm, seconds: ds } = humanReadableTime(time)
    const [timer, setTimer] = useState(time)
    const [hours, setHours] = useState(dh)
    const [minutes, setMinutes] = useState(dm)
    const [seconds, setSeconds] = useState(ds)

    function onDone() {
        setTimer(0)
        notification.sendNotification({
            body: `Timer ${name} is done!`,
        })
        dispatch(doneTimer({ id }))
        dispatch(playAudio())
        clearInterval(intervalRef.current)
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            const currTime = startedAt + time - Date.now()
            if (currTime < 0) {
                onDone()
            } else {
                setTimer(currTime)
            }
        }, 1000)
        intervalRef.current = intervalId
        return () => clearInterval(intervalRef.current)
    })

    useEffect(() => {
        const { hours, minutes, seconds } = humanReadableTime(timer)
        setHours(hours)
        setMinutes(minutes)
        setSeconds(seconds)
    }, [timer])

    function onPause() {
        clearInterval(intervalRef.current)
        dispatch(pauseTimer({ id, pausedAt: startedAt + time - Date.now() }))
    }

    return {
        hours,
        minutes,
        seconds,
        onPause,
    }
}
