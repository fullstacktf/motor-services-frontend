import ServiceTitle from './ServiceTitle';
import ServiceInformation from './ServiceInformation';
import ServiceButton from './ServiceButton';
import { Grid } from "@mui/material";


export default function Service(service) {

    return (
        <Grid container sx={{ alignItems: 'center' }} p={2} direction={"column"} spacing={1} style={{ border: "solid 1px", height: "100%", width:'40%', margin:'auto'}}>
            <Grid item>
                <ServiceTitle service = {service}></ServiceTitle>

            </Grid>
            <Grid item>
                <ServiceInformation></ServiceInformation>

            </Grid>
            <Grid item>
                <ServiceButton></ServiceButton>
            </Grid>
        </Grid>
    )
}
