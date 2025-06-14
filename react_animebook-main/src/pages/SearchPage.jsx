import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card';
import { AppContext } from '../Context';

const SearchPage = () => {

    const params = useParams();
    const [data, setData] = useState(false);
    const { getSearchResult } = useContext(AppContext);

    async function getSearchResult1(search) {
        // const { data } = await axios(`https://api.jikan.moe/v4/anime?q=${params.search}`)
        const data = await getSearchResult(params.search);
        setData(data);
    }

    useEffect(() => {
        getSearchResult1();
    }, [])


    return (
        <div className='text-white'>

            <h1 className='text-4xl font-semibold capitalize text-center p-6'>{params.search}</h1>

            {data ? <div className='flex gap-5 flex-wrap justify-center'>
                {data && data.map((e) => (<Card key={e.mal_id} obj={e} />))}
            </div> : <div className='w-full h-dvh flex flex-col justify-center items-center'>
                <p>Getting Results...</p>
            </div>}

        </div>
    )
}

export default SearchPage