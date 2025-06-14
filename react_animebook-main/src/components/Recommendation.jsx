import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context';

const Recommendation = ({ animeId }) => {

    const [recommend, setRecommend] = useState(false)
    const navigate = useNavigate()
    const { getRecommendationList } = useContext(AppContext)


    const getRecommendationList1 = async () => {
        let data = await getRecommendationList(animeId)
        setRecommend(data);
    }

    useEffect(() => {
        setTimeout(() => {
            getRecommendationList1();
        }, 3000);
    }, [animeId])

    return (
        <div className='flex flex-col gap-2'>

            {recommend && recommend.length > 0 && <h1 className='text-2xl sm:text-4xl font-bold'>Recommend : </h1>}

            {recommend && recommend.length > 0 &&
                <div className='flex gap-5 overflow-x-scroll'>
                    {recommend.map((e) => (<div key={e.mal_id} onClick={() => navigate(`/animeDetails/${e.entry.mal_id}`)} className='flex flex-col gap-1 flex-shrink-0 w-[100px] h-[200px] sm:w-[225px] sm:h-[340px]'>
                        <LazyLoadImage
                            alt=""
                            effect="blur"
                            threshold={100}
                            className={`w-full h-full rounded-lg`}
                            src={e.entry.images.webp.image_url} />
                        <p>{e.entry.name}</p>
                    </div>))}
                </div>
            }

        </div>
    )
}

export default Recommendation