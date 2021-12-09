import { Grid } from "@mui/material";
import FloatingButton from "../components/FloatingButton";
import ContainerCards from "../components/VehicleComponents/ContainerCards";

export default function Vehicles (){
    

    return(
        <Grid container xs={12}>
            <ContainerCards></ContainerCards>
            <FloatingButton></FloatingButton>
        </Grid>
       

    )
}