import React from 'react'
import jjk from '../../assets/jjk.png'
const VideoPage = () => {
    return (
        <div className='flex aspect-video sm:aspect-auto justify-center items-center'>


            <div className='w-[100vw] aspect-video flex justify-center items-center'>
                <iframe className='w-[100%] sm:w-[70%] aspect-video shadow-lg shadow-black' src="https:\/\/www.youtube.com\/embed\/4A_X-Dvl0ws?enablejsapi=1&wmode=opaque&autoplay=1&modestbranding=1&autohide=1&showinfo=0&loop=1" frameBorder="0"></iframe>
            </div >


            <div className='hidden sm:flex w-[50%] justify-center items-center relative'>
                <img className='w-[100px] sm:w-[200px] md:w-[350px]' src={jjk} alt="" srcSet="" />
            </div>

        </div >
    )
}

export default VideoPage