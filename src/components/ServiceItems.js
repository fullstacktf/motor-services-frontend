//icons
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalCarWashIcon from '@mui/icons-material/LocalCarWash';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import ColorLensIcon from '@mui/icons-material/ColorLens';

export const servicesItem = [
    {
        name:"ITV",
        icon: <FactCheckIcon/>,

    },
    {
        name:"Limpieza",
        icon: <LocalCarWashIcon/>
    },
    {
        name:"Mantenimiento",
        icon: <CarRepairIcon/>
    },
    {
        name:"Transporte",
        icon: <DirectionsCarIcon/>
    },
    {
        name:"Electricista",
        icon: <ElectricCarIcon/>
    },
    {
        name:"Chapa y Pintura",
        icon: <ColorLensIcon/>
    }
]