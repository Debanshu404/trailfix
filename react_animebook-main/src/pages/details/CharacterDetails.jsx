import { data } from 'autoprefixer'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MyImage from '../../components/MyImage'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { AppContext } from '../../Context'

const CharacterDetails = () => {

  const [detail, setDetail] = useState(null)
  const [pics, setPics] = useState(null)
  const { getCharacterDetails, getCharacterPictures } = useContext(AppContext)

  const params = useParams();

  const getCharacterDetails1 = async () => {
    let data = await getCharacterDetails(params.characterId);
    setDetail(data)
  }

  const getCharacterPictures1 = async () => {
    // let { data } = await axios(`https://api.jikan.moe/v4/characters/${params.characterId}/pictures`)
    let data = await getCharacterPictures(params.characterId);
    setPics(data)
  }


  useEffect(() => {
    getCharacterDetails1();
    getCharacterPictures1();
  }, [])

  return (
    <div className='w-full h-dvh flex justify-center items-center p-2 md:p-10 mt-[40px] md:mt-2 overflow-scroll text-white'>
      {detail && pics
        ?
        <div className='flex flex-col gap-10'>

          <div className='w-[70vw] flex flex-col md:flex-row items-center gap-10 pt-2'>

            <img loading='lazy' className='w-[200px] h-[300px] md:w-[300px] md:h-[400px]' src={pics[0].jpg.image_url} alt="" srcSet="" />

            <div className='text-xl sm:text-3xl'>
              <span className='text-blue-400'>{detail.name} {detail.name_kanji}</span>
              <p className='text-[15px] sm:text-[20px]'>About : <span>{detail.about.split(" ").slice(0, 80).join(" ")}</span></p>
            </div>

          </div>

          <div className='w-[70vw] flex gap-5 overflow-x-scroll overflow-y-hidden'>
            {pics.map((e, i) => (<div key={i} className='flex-shrink-0'>
              <LazyLoadImage
                alt=""
                effect="blur"
                threshold={100}
                className={`w-[100px] h-[150px] rounded-lg`}
                src={e.jpg.image_url} />
            </div>))}
          </div>

        </div>
        :
        "loading...."}
    </div>
  )
}

export default CharacterDetails