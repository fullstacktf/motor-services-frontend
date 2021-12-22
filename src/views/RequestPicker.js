import { Grid } from "@mui/material";
import RequestContainer from "../components/pickerComponents/RequestContainer";


export default function RequestPicker (){
    return(
        <Grid container xs={12}>
            <RequestContainer></RequestContainer>
        </Grid>
    )
}