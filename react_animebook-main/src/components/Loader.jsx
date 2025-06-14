import React from 'react'
import loader from "../assets/loader.svg"

const Loader = () => {
    return (
        <div className='w-full h-dvh flex flex-col justify-center items-center'>
            <img className='w-[70px] h-[70px]' src={loader} alt="" srcSet="" />
        </div>
    )
}

export default Loader