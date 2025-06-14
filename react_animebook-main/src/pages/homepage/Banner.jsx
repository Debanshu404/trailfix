import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const handelSearch = () => {
        navigate(`/searchPage/${input}`)
    }

    const handleEnter = (e) => {
        if (e.key == "Enter") {
            handelSearch();
        }
    }

    return (
        <div className='bg w-full h-[60vh] sm:h-dvh flex justify-center items-center relative text-white'>

            <div className='w-[85%] sm:w-[60%] flex flex-col justify-center items-center gap-3 z-10'>

                <h1 className='text-4xl sm:text-8xl font-bold'>Welcome</h1>

                <p className='text-[14px] sm:text-xl font-semi-bold text-center capitalize'>millions of anime, people and manga to discover</p>

                <div className='text-xl flex'>

                    <input onKeyUp={handleEnter} onChange={(e) => setInput(e.target.value)} className='w-full bg-white text-[16px] sm:text-xl p-1 sm:p-2 rounded-l-lg border-none outline-none text-blue-700' type="text" placeholder='Search Anime...' />

                    <button onClick={handelSearch} className='w-[30%] text-[15px] sm:text-xl bg-blue-500 rounded-r-lg flex justify-center items-center capitalize'>search</button>

                </div>


            </div>

            <div className="shadow"></div>

        </div >
    )
}

export default Banner