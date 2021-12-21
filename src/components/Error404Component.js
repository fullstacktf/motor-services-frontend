import axios from 'axios'
import {useEffect, useState} from 'react'

export default function Error404Component(){

    const [gif, setGif] = useState({
        width: "480",
        height: "200",
        url:"https://media2.giphy.com/media/UqT2lYmgB4MJrr3jbS/giphy.gif?cid=e37e3d48b2974ff76fd4d52fa3bc6ea877c073ec28423803&rid=giphy.gif&ct=g"
    })

    const getGif = async() => {
    await axios.get('https://api.giphy.com/v1/gifs/random?api_key=6nDQ1NfJSJljUIbxo6urfJbCUBUMcNpY&tag=car%22crash')
            .then(res => {
                setGif(res.data.data.images.downsized_medium)
            })
            .catch(err => {console.log(err)})
    }


    useEffect(() => {
        getGif()
    }, [])

    return(
        <div style={{width: '100vw' ,display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
            <img width={gif.width} height={gif.height} src={gif.url}/>
            <h3>No mires aqui, tu vehiculo 🚗 esta en otro sitio</h3>
            </div>
        </div>
    )
}