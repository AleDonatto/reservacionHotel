import { createContext } from "react";

export const Context = createContext({
    data: {
        paquete: false,
        destino: '',
        fsalida: '',
        fllegada: '',
        nHabitaciones: 0,
        promo:'',
        personas: []
    },
    setdata: () => {}
}
);