import { Grid } from "@mui/material";
import StatusContainer from "../components/pickerComponents/StatusContainer";

export default function RequestPicker (){
    return(
        <Grid container xs={12}>
            <StatusContainer></StatusContainer>
        </Grid>
    )
}