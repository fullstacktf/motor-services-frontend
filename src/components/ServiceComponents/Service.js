import ServiceTitle from './ServiceTitle';
import ServiceInformation from './ServiceInformation';
import ServiceButton from './ServiceButton';
import { Grid } from "@mui/material";
import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Service(props) {
    const { idService } = useParams();

    const [service, setService] = useState([])
    const getServices= async () => {
        axios.get(`http://localhost:3001/services/${idService}`)
            .then(res => { setService(res.data) })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getServices()
    }, [])


    return (
        <Grid container sx={{ alignItems: 'center' }} p={2} direction={"column"} spacing={1} style={{ border: "solid 1px", height: "100%", width: '40%', margin: 'auto' }}>
            <Grid item>
                {service.map(service => <h1>{service.service_type}</h1>)}
            </Grid>
            <Grid item>
            {service.map(service => <h4>{service.service_description}</h4>)}

            </Grid>
            <Grid item>
                <ServiceButton></ServiceButton>
            </Grid>
        </Grid>
    )
}
