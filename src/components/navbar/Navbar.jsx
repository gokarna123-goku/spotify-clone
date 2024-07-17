import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const Navbar = ({ className }) => {
    // Back button logic

    const handleBack = () => {
        window.history.back();
    };


    // Next button logic

    const handleNext = () => {
        window.history.forward();
    };


    return (
        <nav className={`w-full ${className} flex items-center justify-between md:pl-5 pl-4 md:pr-7 sm:pr-5 pr-4 py-2 z-50`}>
            {/* Arrow  */}
            <div className="flex items-center gap-x-2">
                <button onClick={handleBack} className="w-8 h-8 rounded-full bg-neutral-950/70 text-neutral-400 flex items-center justify-center">
                    <GoChevronLeft className='w-7 h-7 mr-0.5' />
                </button>
                <button onClick={handleNext} className="w-8 h-8 rounded-full bg-neutral-950/70 text-neutral-400 flex items-center justify-center">
                    <GoChevronRight className='w-7 h-7 ml-0.5' />
                </button>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-x-5">
                <button className="w-fit text-neutral-400 text-sm font-semibold hover:scale-105 ease-in-out duration-100">
                    Sign up
                </button>
                <button className="w-fit px-8 h-12 rounded-full bg-neutral-50 text-base text-neutral-900 font-semibold flex items-center justify-center hover:scale-105 ease-in-out duration-100">
                    Log in
                </button>
            </div>
        </nav>
    )
}

export default Navbar