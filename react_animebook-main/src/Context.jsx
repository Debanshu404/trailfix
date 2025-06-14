import axios from 'axios';
import React, { createContext, useState } from 'react'

export const AppContext = createContext("");

const Context = ({ children }) => {

    const [type, setType] = useState(localStorage.getItem("animebook_category"))
    console.log(localStorage.getItem("animebook_category"));

    const getTop = async (filter) => {
        if (filter) {
            let { data } = await axios(`/top/${type}?filter=${filter}`)
            return (data.data)
        } else {
            let { data } = await axios(`/top/${type}`)
            return (data.data)
        }
    }


    const getFamousCharacter = async () => {

        let { data } = await axios(`https://api.jikan.moe/v4/top/characters`)
        return (data.data)

    }


    const getAnimeDetails = async (animeId) => {
        let { data } = await axios(`/${type}/${animeId}`)
        return (data.data)
    }

    const getMorePictures = async (animeId) => {
        let { data } = await axios(`/${type}/${animeId}/pictures`)
        return (data.data);
    }

    const getMoreVideos = async (animeId) => {
        let { data } = await axios(`/${type}/${animeId}/videos`)
        return (data.data?.promo);
    }

    const getRecommendationList = async (animeId) => {
        let { data } = await axios(`/${type}/${animeId}/recommendations`)
        return (data.data);
    }

    const getCharacters = async (animeId) => {
        let { data } = await axios(`/${type}/${animeId}/characters`)
        return (data.data);
    }

    const getCharacterDetails = async (characterId) => {
        let { data } = await axios(`https://api.jikan.moe/v4/characters/${characterId}`)
        return (data.data)
    }

    const getCharacterPictures = async (characterId) => {
        let { data } = await axios(`https://api.jikan.moe/v4/characters/${characterId}/pictures`)
        return (data.data)
    }

    async function getSearchResult(search) {
        const { data } = await axios(`https://api.jikan.moe/v4/${type}?q=${search}`)
        return (data.data);
    }



    return (
        <AppContext.Provider value={{ type, setType, getTop, getFamousCharacter, getAnimeDetails, getMorePictures, getMoreVideos, getRecommendationList, getCharacters, getCharacterDetails, getCharacterPictures, getSearchResult }}>
            {children}
        </AppContext.Provider>
    )
}

export default Context