import React, { useEffect, useState } from 'react'
import searchIcon from '../assets/searchIcon.svg'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {

    const navigate = useNavigate();
    const [input, setInput] = useState("");
    const [bg, setBg] = useState(false);
    const [show, setShow] = useState(false);

    const handleKeyUp = (e) => {
        if (e.key == "Enter") {
            navigate(`/searchPage/${input}`)
        }
    }

    const getScroll = (e) => {

        if (window.scrollY > 100) {
            setBg(true)
        }

        if (window.scrollY < 100) {
            setBg(false)
        }

    }


    useEffect(() => {
        window.addEventListener("scroll", getScroll);

        return () => {
            window.removeEventListener("scroll", getScroll);
        }

    }, [])

    return (
        <div className={`w-full flex justify-between ${!bg ? "" : "bg-[#0a0825af]"} transition-all duration-700 items-center py-3 px-6 fixed top-0 left-0 z-50`}>

            <h1 className='text-[18px] sm:text-4xl text-white font-bold uppercase'>anime<span className='text-blue-500'>book</span></h1>

            <div className='w-[250px] flex justify-end gap-2'>
                <input onChange={(e) => setInput(e.target.value)} onKeyUp={handleKeyUp} className='w-full rounded-md border-none outline-none p-2 hidden sm:flex' placeholder='Search Amime...' type="text" name="" id="" />
                <img onClick={() => navigate(`/searchPage/${input}`)} className='w-[30px] hidden sm:block' src={searchIcon} alt="" srcSet="" />
                <img onClick={() => setShow(true)} className='w-[30px] sm:hidden' src={searchIcon} alt="" srcSet="" />
            </div>

            {/* FIXED SEARCH FOR SMALL SCREEN */}
            {show && <div onClick={() => setShow(false)} className='fixed top-0 left-0 w-full h-dvh flex justify-center items-center bg-gradient-to-tr from-black'>
                <div onClick={(e) => e.stopPropagation()} className='flex gap-2'>
                    <input onChange={(e) => setInput(e.target.value)} onKeyUp={handleKeyUp} className='w-full rounded-md border-none outline-none p-2 ' placeholder='Search Amime...' type="text" name="" id="" />
                    <img onClick={() => navigate(`/ searchPage / ${input}`)} className='w-[30px]' src={searchIcon} alt="" srcSet="" />
                </div>
            </div>}

        </div>
    )
}

export default Navbar