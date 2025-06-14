import React, { useContext, useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context';

const AllCharacters = ({ animeId }) => {

    const [characters, setCharacters] = useState(false)
    const navigate = useNavigate()
    const { getCharacters } = useContext(AppContext)

    const getCharacters1 = async () => {
        let data = await getCharacters(animeId);
        setCharacters(data);
    }

    useEffect(() => {
        setTimeout(() => {
            getCharacters1();
        }, 2000);
    }, [animeId])

    return (
        <div className='flex flex-col gap-2'>

            {characters && characters.length > 0 && <h1 className='text-2xl sm:text-4xl font-bold'>Characters : </h1>}

            {characters && <div className='flex justify-center gap-4 flex-wrap px-2 sm:px-10'>
                {characters.map((e) => (<div key={e.mal_id} onClick={() => navigate(`/characterDetails/${e.character.mal_id}`)} className='flex flex-col gap-2 hover:cursor-pointer'>

                    <LazyLoadImage
                        alt=""
                        effect="blur"
                        threshold={100}
                        className={`w-[70px] h-[102px] sm:w-[180px] sm:h-[250px] rounded-lg`}
                        src={e.character.images.webp.image_url} />

                    <p className='text-[14px] sm:text-xl'>{e.character.name.split(" ").slice(0, 1).join(" ")}</p>

                </div>))}
            </div>}

        </div>
    )
}

export default AllCharacters