import React from 'react'
import { useNavigate } from 'react-router-dom'
import MyImage from './MyImage'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import star from '../assets/star.svg'

const Card = ({ obj }) => {

  const navigate = useNavigate()

  const handleCardClick = (animeId) => {
    navigate(`/animeDetails/${animeId}`)
  }

  return (
    <div onClick={() => handleCardClick(obj.mal_id)} className='w-[120px] sm:w-[230px] flex flex-col gap-2 relative flex-shrink-0 text-[15px] cursor-pointer transition-all hover:-translate-y-2 text-white'>

      <LazyLoadImage
        alt=""
        effect="blur"
        threshold={100}
        className={`w-[120px] sm:w-[230px] h-[180px] sm:h-[320px] rounded-lg`}
        src={obj.images.webp.image_url} />

      <span className='hidden sm:block'>{obj.title.split(" ").slice(0, 2).join(" ")}</span>

      {obj.score && <div className='w-[30px] h-[20px] sm:w-[50px] sm:h-[25px] rounded-lg flex justify-center items-center gap-1 absolute top-1 right-1 bg-blue-700 text-[8px] sm:text-[10px] p-1 text-white'>
        <span>{obj.score.toFixed(1)}</span>
        <img className='w-[8px] sm:w-[10px]' src={star} alt="" srcSet="" />
      </div>}

    </div>
  )
}

export default Card