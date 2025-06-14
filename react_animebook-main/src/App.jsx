import { Suspense, lazy, useState } from 'react'
import './App.css'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Loader from './components/Loader';
import Explore from './pages/Explore';
import FirstPage from './pages/FirstPage';
const Home = lazy(() => import('./pages/homepage/Home'));
const AnimeDetails = lazy(() => import('./pages/details/AnimeDetails'));
const CharacterDetails = lazy(() => import('./pages/details/CharacterDetails'));
const SearchPage = lazy(() => import('./pages/SearchPage'));


function App() {
  const [count, setCount] = useState(0)

  axios.defaults.baseURL = "https://api.jikan.moe/v4"

  return (
    <>
      {/* <Navbar /> */}
      <BrowserRouter>
        <Suspense fallback={<div><Loader /></div>}>
          <Routes>
            <Route path='/' element={<FirstPage />} />
            <Route path='/home' element={<Home />} />
            <Route path='/explore/:filter' element={<Explore />} />
            <Route path='/animeDetails/:animeId' element={<AnimeDetails />} />
            <Route path='/characterDetails/:characterId' element={<CharacterDetails />} />
            <Route path='/searchPage/:search' element={<SearchPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
