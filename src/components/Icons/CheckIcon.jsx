import React from 'react'

function CheckIcon({ className, size }) {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={size || '1em'}
            height={size || '1em'}
            fill='currentColor'
            className={className}
            viewBox='0 0 16 16'
        >
            <path
                fillRule='evenodd'
                d='M10.97 4.97a.75.75 0 011.071 1.05l-3.992 4.99a.75.75 0 01-1.08.02L4.324 8.384a.75.75 0 111.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 01.02-.022z'
            ></path>
        </svg>
    )
}

export default CheckIcon
