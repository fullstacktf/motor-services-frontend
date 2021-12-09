
import CardService from './CardService'

import {servicesItem} from '../ServiceItems.js'
import { Grid } from '@mui/material'

export default function ContainerCardServices(){


    return (
        <div>
            <Grid container xs={12}>
                {servicesItem.map((service)=>(
                    <CardService service={service}></CardService>
                ))
                }
            </Grid>
        </div>
        
    )
}