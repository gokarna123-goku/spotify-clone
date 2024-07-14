import React from 'react'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const Navbar = () => {
    return (
        <div className='w-full flex items-center bg-neutral-950/75 justify-between px-5 py-4 fixed top-2 z-50'>

            {/* Arrow  */}
            <div className="flex items-center gap-x-2">
                <button className="w-8 h-8 rounded-full bg-neutral-950/70 text-neutral-400 flex items-center justify-center">
                    <GoChevronLeft className='w-7 h-7 mr-0.5' />
                </button>
                <button className="w-8 h-8 rounded-full bg-neutral-950/70 text-neutral-400 flex items-center justify-center">
                    <GoChevronRight className='w-7 h-7 ml-0.5' />
                </button>
            </div>

            {/* Buttons */}
            .
        </div>
    )
}

export default Navbar