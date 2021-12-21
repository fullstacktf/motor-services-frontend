
import ContainerCardServices from "../components/ServiceComponents/ContainerCardServices";
import ContainerCards from "../components/VehicleComponents/ContainerCards";
import ContainerCardAppointmentsPresent from "../components/AppointmentComponents/ContainerCardAppointmentsPresent";

export default function Main() {

    const appointmentFilter = { //status!= no recogido && status != entregado
        request: 'Aceptada'
    }
    return (
        <div>
            <h1>Citas en curso</h1>
            <ContainerCardAppointmentsPresent appointmentFilter={appointmentFilter}></ContainerCardAppointmentsPresent>
            <h1>Mis Servicios</h1>
            <ContainerCardServices></ContainerCardServices>
            <h1>Mis Vehículos</h1>
            <ContainerCards></ContainerCards></div>

    )
}