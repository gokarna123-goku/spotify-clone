import React, { useState, useEffect } from 'react';
import { FaRegClock } from 'react-icons/fa6'

const TitleNav = () => {
    const [scrolling, setScrolling] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className={`w-full md:grid hidden grid-cols-4 ${scrolling ? 'bg-red-500' : 'bg-transparent'} border-b border-neutral-700/40 gap-4 items-center px-6 py-2 sticky top-14`}>
            <div className="col-span-2 flex items-center gap-x-2">
                <p className="text-neutral-400 text-sm font-medium pt-1">
                    <span className='w-5 h-5'>#</span>
                </p>
                <p className="text-sm text-neutral-400 font-normal ml-1">
                    Title
                </p>
            </div>
            <div className="col-span-1 md:flex hidden items-center justify-center">
                <p className="text-sm text-neutral-400 font-normal">
                    Album
                </p>
            </div>
            <div className="col-span-1 flex items-center justify-end gap-x-3">
                <p className="text-base text-neutral-400 font-normal">
                    <FaRegClock />
                </p>
            </div>
        </div>
    )
}

export default TitleNav