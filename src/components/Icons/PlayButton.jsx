import React from 'react'

function PlayButton({ className, size }) {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={size}
            height={size}
            className={`${className}`}
            fill='currentColor'
            viewBox='0 0 16 16'
        >
            <path d='M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 010 1.393z'></path>
        </svg>
    )
}

export default PlayButton
