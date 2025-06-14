import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context';

const Footer = () => {

    const { setType, type } = useContext(AppContext)
    const navigate = useNavigate()

    const handleChangeCategory = (category) => {
        setType(category);
        localStorage.setItem("animebook_category", category)
        navigate("/")
    }

    return (
        <div className='w-full flex flex-col justify-center items-center gap-5 text-white'>

            <h1 className='text-2xl sm:text-4xl font-bold uppercase px-2 pt-6'>anime book</h1>

            <p className='text-[14px] sm:text-xl text-center px-2'>Dive and Explore the world of anime and Manga a place where all characters plays a real character and face the world </p>

            <div className='sflex justify-center items-center gap-2 px-2'>
                <button onClick={() => handleChangeCategory(type == "anime" ? "manga" : "anime")} className='bg-blue-700 px-4 py-2 shadow-md shadow-blue-600 cursor-pointer'>{type == "anime" ? "Manga" : "Anime"}</button>
            </div>

         

        </div>
    )
}

export default Footer