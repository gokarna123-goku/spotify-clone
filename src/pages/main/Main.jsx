import React from 'react'
import Sidebar from './sidebar/Sidebar'
import Content from './content/Content'

const Main = () => {
    return (
        <>
            <div className="w-full flex-1 flex gap-x-2 relative">
                {/* Sidebar */}
                <Sidebar />

                {/* Content */}
                <Content />

                {/* Bottom or Player */}
            </div>
        </>
    )
}

export default Main