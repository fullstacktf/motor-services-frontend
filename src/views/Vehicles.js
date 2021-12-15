import { Grid } from "@mui/material";
import FloatingButton from "../components/FloatingButton";
import ContainerCards from "../components/VehicleComponents/ContainerCards";

export default function Vehicles (){
    

    return(
        <Grid container xs={12}>
            <ContainerCards></ContainerCards>
            {/* <div style={{width: '100%', display: 'flex',alignItems: 'flex-end',  flexDirection: 'column'}}>
            <FloatingButton></FloatingButton>
            </div> */}
        </Grid>
       

    )
}