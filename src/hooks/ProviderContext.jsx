import React, { useState } from 'react'
import { Context } from './Context'

export const ProviderContext = ({children}) => {
    const [data, setdata] = useState({
        paquete: false,
        destino: '',
        fsalida: '',
        fllegada: '',
        nHabitaciones: 0,
        promo:'', 
        personas: []
    })

    return (
        <Context.Provider value={{data, setdata}}>
            {children}
        </Context.Provider>
    )
}
