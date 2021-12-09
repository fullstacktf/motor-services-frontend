import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import CardVehicle from './CardVehicle'
import vehiclesData from '../../utils/data/vehicles.json'
import FloatingButton from '../FloatingButton'

export default function ContainerCards(){

    const [vehicles, setVehicle] = useState([])

    const getVehicles = async() => {
        setVehicle(vehiclesData)
        console.log(vehicles);

        // const requestOptions = {
        //     method: 'GET',
        //     body: { "owner_id":12345671 }
        // };

        // await fetch('http://127.0.0.1:3001/vehicles',requestOptions)
        //     .then(response=> console.log(response.json()))
        //     .then(data => setVehicle(data))
        //     .catch(err=>console.error(err))        
    }

    useEffect(() => {
        getVehicles()
    }, [])

    return(
        <Grid container xs={12}>
                {
                    !vehicles.length ? <h1>No hay vehiculos</h1> : vehicles.map((vehicle) =>(
                        <CardVehicle vehicle={vehicle}></CardVehicle>
                    ))
                }
        </Grid>

    )
}