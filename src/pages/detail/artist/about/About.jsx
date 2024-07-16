import React from 'react'

const About = () => {
    return (
        <div className='w-full space-y-4 md:block hidden'>
            <h1 className="md:text-xl text-lg text-neutral-50 font-bold">
                About
            </h1>
            <div className="w-10/12 h-80 bg-neutral-800/70 rounded-md shadow hover:scale-[1.01] relative p-6 flex justify-center flex-col space-y-7 ease-in-out duration-300">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" className="w-48 aspect-square rounded-full object-cover object-center" />
                <p className="text-base text-neutral-100">40,373,319 monthly listeners</p>
                <div className="absolute top-5 right-10 w-20 h-20 rounded-full bg-blue-400 flex items-center justify-center flex-col">
                    <h5 className="text-xl font-bold text-neutral-50">#79</h5>
                    <p className="text-xs text-neutral-100 font-light">in the world</p>
                </div>
            </div>
        </div>
    )
}

export default About