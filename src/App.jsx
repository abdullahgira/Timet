import React, { useEffect } from 'react'
import TimerList from './components/TimerList'
import AddTimer from './components/AddTimer'
import Alarm from './components/Alarm'

import * as notification from './notifications'

function App() {
    useEffect(() => {
        let body = document.getElementsByTagName('body')[0]
        body.classList.add('bg-light')

        async function notificationPermission() {
            await notification.requestPermission()
        }

        notificationPermission()

        return () => {
            body.classList.remove('bg-light')
        }
    })

    return (
        <div className='column__list p-2'>
            <TimerList />
            <AddTimer />
            <Alarm />
        </div>
    )
}

export default App
