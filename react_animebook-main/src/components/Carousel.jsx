import React, { useContext, useEffect, useState } from 'react'
import Card from './Card';
import more from '../assets/more.svg'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context';

let typeArr = ["tv", "movie", "special", "music", "tv_special"]

const Carousel = ({ filter }) => {

    const [data, setData] = useState(null);
    const navigate = useNavigate();
    const { getTop } = useContext(AppContext)


    const getTop1 = async () => {
        let res = await getTop(filter);
        console.log(res);
        setData(res);
    }

    useEffect(() => {
        getTop1();
    }, [filter])

    return (
        <div className='h-[250px] sm:h-[470px] flex flex-col gap-2 overflow-x-scroll p-1 sm:p-4'>
            {data && <>

                <div className='flex justify-between'>

                    <h1 className='uppercase text-1xl sm:text-2xl font-semibold px-2 text-blue-500'>{filter ? filter : "Trending"}</h1>

                    <div onClick={() => navigate(`/explore/${filter ? filter : "all"}`)} className='text-blue-400 font-semibold flex gap-2 justify-center items-center hover:cursor-pointer'>
                        <span>More</span>
                        <img className='w-[25px]' src={more} alt="" srcSet="" />
                    </div>

                </div>

                <div className='flex gap-2 sm:gap-5 overflow-x-scroll overflow-y-hidden category p-2'>
                    {data?.map((e) => (
                        <Card key={e.mal_id} obj={e} />
                    ))}
                </div>

            </>}
        </div>
    )
}

export default Carousel