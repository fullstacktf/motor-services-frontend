import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import CardVehicle from './CardVehicle'
import vehiclesData from '../../utils/data/vehicles.json'
import FloatingButton from '../FloatingButton'
import axios from 'axios'

export default function ContainerCards(){

    const [vehicles, setVehicle] = useState([])

    const getVehicles = async() => {
        await axios.get('http://localhost:3001/vehicles/user/12345671')
        .then(res=>{setVehicle(res.data)})
        .catch(err=>console.log(err))   
    }

    useEffect(() => {
        getVehicles()
    }, [])

    return(
        <Grid container xs={12} md={12} style={{height:'100vh'}}>
                {
                    !vehicles.length ? <h1>No hay vehiculos</h1> : vehicles.map((vehicle) =>(
                        <CardVehicle vehicle={vehicle}></CardVehicle>
                    ))
                }
            <div style={{width: '100%', display: 'flex',alignItems: 'flex-end',  flexDirection: 'column'}}>
            <FloatingButton></FloatingButton>
            </div>
        </Grid>

    )
}