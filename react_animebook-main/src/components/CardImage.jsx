import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardImage = ({ src, title, desc }) => {

    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`/searchPage/${title}`)} className='w-[100%] flex gap-2 justify-center md:justify-between p-4 bg-blue-950 rounded-lg'>

            <img className='w-[100px] h-[100px] sm:w-[200px] sm:h-[200px]' src={src} alt="" srcSet="" />

            <p className='hidden flex-col md:flex gap-4 text-white'>
                <span className='font-bold text-4xl capitalize'>{title}</span>
                <span>{desc}</span>
            </p>

        </div>
    )
}

export default CardImage