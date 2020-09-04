import React, { useEffect } from 'react'
import TimerList from './components/TimerList'
import AddTimer from './components/AddTimer'
import Alarm from './components/Alarm'

function App() {
    useEffect(() => {
        let body = document.getElementsByTagName('body')[0]
        body.classList.add('bg-light')
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
