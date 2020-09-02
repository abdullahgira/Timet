import { useState, useEffect } from 'react'

export default function useLocalStorageState(key, defaultValue = '') {
    const [state, setState] = useState(
        () => window.localStorage.getItem(key) || ''
    )

    useEffect(() => {
        window.localStorage.setItem(key, state)
    }, [key, state])

    return [state, setState]
}
