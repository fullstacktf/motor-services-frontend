import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormVehicle from "../components/VehicleComponents/FormVehicle";

export default function EditVehicle(){
    
    const { idVehicle } = useParams();
    const [vehicleUpdate, setVehicleUpdate] = useState({})

    useEffect(() => {
        getVehicle(idVehicle)
    },[])

    const getVehicle = (id) => {
        const URL_GETVEHICLE = 'http://localhost:3001/vehicles/'+id
        axios.get(URL_GETVEHICLE)
            .then(res => {
                const result = res.data[0];
                setVehicleUpdate(result);
                })
            .catch(err => console.log(err))
    }



    return(
        <FormVehicle edit={true} vehicleEdit={vehicleUpdate}></FormVehicle>
    )
}