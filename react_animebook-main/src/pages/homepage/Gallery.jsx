import React from 'react'
import cute1 from '../../assets/cute1.png'
import cute2 from '../../assets/cute2.png'
import cute3 from '../../assets/cute3.png'
import cute4 from '../../assets/cute4.png'
import CardImage from '../../components/CardImage'

const Gallery = () => {

    let aot = "Attack on Titan is an anime TV series that ran from 2013–2023 and is set in a post-apocalyptic world where humanity is on the brink of extinction due to giant, man-eating humanoid creatures called Titan.";

    let naruto = "Naruto is a Japanese manga series and anime television series that follows the adventures of Naruto Uzumaki, a young ninja who dreams of becoming the Hokage, or leader, of his village.";

    let jjk = "Jujutsu Kaisen is a 2020 TV anime series that follows Yuji Itadori, a high school student who becomes cursed after swallowing a demon's finger To exorcise himself, Yuji enrolls in a shaman's school.";

    let demon = "The story follows Tanjiro Kamado, a kind and intelligent 13-year-old boy who sets out to become a demon slayer after his family is murdered by man-eating demons and his sister Nezuko is turned into a demon.";

    return (
        <div className='w-full flex flex-col justify-center items-center gap-2 p-2'>

            <div className='w-full flex gap-2'>
                <CardImage src={cute1} title={"attack on titan"} desc={aot} />
                <CardImage src={cute2} title={"Demon slayer"} desc={naruto} />
            </div>

            <div className='w-full flex gap-2'>
                <CardImage src={cute3} title={"jujtsu kaisen"} desc={jjk} />
                <CardImage src={cute4} title={"one piece"} desc={demon} />
            </div>

        </div>
    )
}

export default Gallery