import React, { Suspense, lazy } from 'react'
import Banner from './Banner'
import Carousel from '../../components/Carousel'
import Navbar from '../Navbar'
import Footer from '../Footer'
import FamousCharacters from './FamousCharacters'
import Gallery from './Gallery'
const VideoPage = lazy(() => (import("./VideoPage")))

const arr = [false, "upcoming", "bypopularity"]

const Home = () => {
    return (
        <div className='flex flex-col gap-10'>
            <Navbar />
            <Banner />
            <div className='flex flex-col'>
                {arr.map((e) => (
                    <div key={e}>
                        <Carousel filter={e} />
                    </div>
                ))}
            </div>
            <Suspense fallback={""}>
                <VideoPage />
            </Suspense>
            <FamousCharacters />
            <Gallery />
            <Footer />
        </div>
    )
}

export default Home