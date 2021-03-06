//icons
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalCarWashIcon from '@mui/icons-material/LocalCarWash';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import ColorLensIcon from '@mui/icons-material/ColorLens';

export const servicesItem = [
    {
        id:6,
        name:"ITV",
        icon: <FactCheckIcon style={{ fontSize: 40 }}/>
    },
    {
        id: 5,
        name:"Limpieza",
        icon: <LocalCarWashIcon style={{ fontSize: 40 }}/>
    },
    {
        id:3,
        name:"Mantenimiento",
        icon: <CarRepairIcon style={{ fontSize: 40 }}/>
    },
    {
        id:4,
        name:"Transporte",
        icon: <DirectionsCarIcon style={{ fontSize: 40 }}/>
    },
    {
        id:2,
        name:"Electricista",
        icon: <ElectricCarIcon style={{ fontSize: 40 }}/>
    },
    {
        id: 1,
        name:"Chapa y Pintura",
        icon: <ColorLensIcon style={{ fontSize: 40 }}/>
    }
]