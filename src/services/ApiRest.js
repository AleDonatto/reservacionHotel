import axios from 'axios'

export function handleSearchRooms (reservacion = {}) {
    //console.log(reservacion)
    let data = [];
    
    axios.get('http://18.220.85.35/apirest/habitaciones/get')
    .then( (response) => {
        return response.data
    });

    return data;
}

export async function handleReservarhabitacion ()  {

}