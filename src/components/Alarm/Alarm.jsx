import React, { useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as audioStates from '../../constants/audio-states'

import alarmSrc from '../../assets/sounds/alarm-2.mp3'
import { pauseAudio } from '../../actions'

const ALARM_TIME = 2500

export default function Alarm() {
    const audioRef = useRef()
    const intervalRef = useRef()

    const alarm = useSelector((state) => state.alarm)
    const dispatch = useDispatch()

    useEffect(() => {
        switch (alarm.state) {
            case audioStates.PLAYING:
                audioRef.current.play()
                break
            case audioStates.PAUSED:
                audioRef.current.pause()
                audioRef.current.currentTime = 0
                break
            default:
                break
        }
    }, [alarm.state])

    useEffect(() => {
        if (alarm.state === audioStates.PLAYING) {
            const intervalId = setInterval(() => {
                const currTime = alarm.startedAt + ALARM_TIME - Date.now()
                if (currTime < 0) {
                    clearInterval(intervalRef.current)
                    dispatch(pauseAudio())
                }
            }, 1000)
            intervalRef.current = intervalId
        }

        return () => clearInterval(intervalRef.current)
    }, [alarm.state, alarm.startedAt, dispatch])

    return <audio src={alarmSrc} loop ref={audioRef} />
}
