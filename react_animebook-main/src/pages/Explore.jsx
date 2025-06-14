import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import loader from '../assets/loader.svg'
import filterIcon from '../assets/filterIcon.svg'

let ages = [{ title: 'all', value: 'G' }, { title: 'Children', value: 'PG' }, { title: 'Teens', value: 'PG-13' }, { title: 'violence 17+', value: 'R' }, { title: 'Adult', value: 'R+' }, { title: 'Hentai', value: 'Rx' }]

let typeArr = ["tv", "movie", "special", "music"]

const Explore = () => {

  const [data, setData] = useState(false)
  const [url, setUrl] = useState("")
  const [showFilter, setShowFilter] = useState(false)
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(null)

  const { filter } = useParams();

  const getTop = async (url) => {
    console.log("fetching data wait a minute");
    let { data } = await axios(url)
    setUrl(url)
    setTotal(data.pagination.items.total)
    setData(data.data)
  }

  const fetchNextData = async () => {
    let { data: res } = await axios(`${url}&page=${page}`)
    console.log(res);
    setData([...data, ...res.data])
  }

  const getUrl = (type = false, filter = false, rating = false) => {

    let obj = { type: type, filter: filter, rating: rating }

    if (filter == 'all') {
      obj = { type: type, rating: rating }
    }

    let urlArr = [];

    for (let val in obj) {
      if (obj[val]) {
        urlArr.push(`${val}=` + obj[val]);
      }
    }

    console.log(urlArr);

    let str = "";
    if (urlArr.length > 1 && urlArr.length > 0) {
      str = urlArr.join("&")
      console.log(str);
    } else if (urlArr.length > 0) {
      str = urlArr[0]
    } else {
      str = "";
    }



    let url = `/top/anime`;
    url = url + `?${str}`
    console.log(url);

    getTop(url);


  }

  useEffect(() => {
    getUrl(false, filter, false);
  }, [])

  useEffect(() => {
    fetchNextData();
  }, [page])

  return (
    <div className='text-white'>

      <div className='flex justify-between px-10 py-4 '>

        <p className='capitalize font-semibold text-[20px] sm:text-3xl'>{filter}</p>

        <img onClick={() => setShowFilter(!showFilter)} className='w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] bg-white p-1 rounded-xl' src={filterIcon} alt="" srcSet="" />

      </div>


      <InfiniteScroll
        dataLength={page * 25}
        next={() => setPage((prev) => prev + 1)}
        hasMore={page * 25 < (total - 25)}
        loader={<img className='width-[50px] h-[50px] m-auto' src={loader} alt="" srcSet="" />}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >

        {data ? <div className='flex gap-4 flex-wrap justify-center'>
          {data.map((e) => (<Card key={e.mal_id} obj={e} />))}
        </div> : <div className='w-full h-dvh flex justify-center items-center'>Loading...</div>}

      </InfiniteScroll>

      {showFilter && <div onClick={() => setShowFilter(!showFilter)} className='fixed top-0 left-0 w-full h-dvh flex justify-center items-center bg-gradient-to-tr from-black'>

        <div onClick={(e) => e.stopPropagation()} className='w-[80%] h-[80%] sm:h-[50%] flex flex-col gap-5 justify-start items-start bg-blue-600 rounded-lg shadow-lg shadow-white p-5'>

          <div className='flex flex-col gap-2'>
            <h1 className='font-bold text-xl'>AGES</h1>
            <div className='flex flex-wrap gap-2'>{ages.map((e) => (<button key={e.value} onClick={() => {
              getUrl(false, filter, e.value);
              setShowFilter(!showFilter)
            }} className='w-[200px] bg-white text-black px-2 py-1 border-2 border-black rounded-md capitalize'>{e.title}</button>))}</div>
          </div>

          <div className='flex flex-col gap-2'>
            <h1 className='font-bold text-xl'>TYPES</h1>
            <div className='flex flex-wrap gap-2'>{typeArr.map((e) => (<button key={e} onClick={() => {
              getUrl(e, filter, false);
              setShowFilter(!showFilter)
            }} className='w-[200px] bg-white text-black px-2 py-1 border-2 border-black rounded-md capitalize'>{e}</button>))}</div>
          </div>

        </div>

      </div>}



    </div>
  )
}

export default Explore