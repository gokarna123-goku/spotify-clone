import React from 'react'
import { Link } from 'react-router-dom'

const Tag = ({ title, link }) => {
    return (
        <div className="w-full flex items-center justify-between">
            <h1 className="md:text-xl text-lg text-neutral-50 font-bold">
                {title}
            </h1>
            <Link to={link} className='text-sm text-neutral-400 font-medium hover:underline ease-in-out duration-75'>
                Show all
            </Link>
        </div>
    )
}

export default Tag