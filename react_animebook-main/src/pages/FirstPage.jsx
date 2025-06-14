import React, { useContext } from 'react'
import { AppContext } from '../Context'
import { Navigate } from 'react-router-dom'
import cute from '../assets/cute5.png'

const FirstPage = () => {

    const { type, setType } = useContext(AppContext)
    console.log(type);

    const handleType = (category) => {
        setType(category)
        localStorage.setItem("animebook_category", category)
    }




    return (
        <div className='w-full h-dvh flex flex-col sm:flex-row justify-center items-start gap-8 sm:gap-20 first text-white'>

            {type != null && <Navigate to={"/home"} />}
            <p className='absolute top-[15px] left-[15px] text-2xl z-10'>ANIME<span className='text-blue-500'>BOOK</span> </p>

            <div className='flex flex-col justify-center items-center gap-12 p-2 mt-[15vh]'>

                <img className='w-[300px] h-[300px] p-2 z-10' src={cute} alt="" srcset="" />

                <div className='flex justify-center items-center gap-5'>

                    <span onClick={() => handleType("anime")} className='bg-[#584C96] transition-all duration-800 px-10 py-2 rounded-lg z-10 cursor-pointer hover:bg-blue-800'>ANIME</span>

                    <span onClick={() => handleType("manga")} className='bg-[#584C96] transition-all duration-800 px-10 py-2 rounded-lg z-10 cursor-pointer hover:bg-blue-800'>MANGA</span>
                    <div className='shadow'></div>

                </div>

            </div>

        </div>
    )
}

export default FirstPage