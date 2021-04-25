import React from 'react'
import { useState } from "react"

export const RowInputs = ({nAdultos, nNinos, numero, handleAddPersonas }) => {
    const [adultos, setadultos] = useState(nAdultos)
    const [ninos, setninos] = useState(nNinos)

    const addAdulto = () => {
        setadultos(
            adultos+1
        )
    }
    const resAdulto = () => {
        if(adultos===1){
            return adultos
        }
        setadultos(adultos-1)
    }

    const addNinos = () => {
        setninos(ninos+1)
    }

    const resNinos = () => {
        if(ninos===0){
            return ninos
        }
        setninos(ninos-1)

    }

    return (
        <div className="shadow border">
            <p className="text-center m-2">Habitacion {numero+1}</p>
            <div className="flex flex-row justify-between">
                <div className="p-2">
                    <label htmlFor="adultos" className="text-center">Adultos</label>
                    <div className="flex flex-row">
                        <div className="">
                            <button type="button" className="focus:outline-none text-gray-400" onClick={resAdulto}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </button>
                        </div>
                        <div className="">
                            <p className="px-2 text-sm">{adultos}</p>                                  
                        </div>
                        <div className="">
                            <button type="button" className="focus:outline-none text-gray-400" onClick={addAdulto}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="p-2">
                    <label htmlFor="ninos" className="text-center w-full">Niños</label>
                    <div className="flex flex-row">
                        <div className="">
                            <button type="button" className="focus:outline-none text-gray-400" onClick={resNinos}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </button>
                        </div>
                        <div className="">
                            <p className="px-2 text-sm">{ninos}</p>
                        </div>
                        <div className="">
                            <button type="button" className="focus:outline-none text-gray-400" onClick={addNinos}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="p-2 mt-3">
                    <div className="flex flex-row">
                        <div className="flex justify-center">
                            <button type="button" className="text-white p-1 rounded-lg bg-green-400 hover:bg-green-500" onClick={() => handleAddPersonas(adultos,ninos,numero) }>
                                {/*}
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                */}
                                Agregar    
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

/*
export default function RowInputs ({nAdultos, nNinos, numeroHabitaciones}){

    const [adultos, setadultos] = useState(nAdultos)
    const [ninos, setninos] = useState(nNinos)

    const addAdulto = () => {
        setadultos(
            adultos+1
        )
    }

    const resAdulto = () => {
        if(adultos===1){
            return adultos
        }
        setadultos(adultos-1)
    }

    const addNinos = () => {
        setninos(ninos+1)
    }

    const resNinos = () => {
        if(ninos===0){
            return ninos
        }
        setninos(ninos-1)
    }

    return (
        <div className="shadow border">
            <p className="text-center m-2">Habitacion {numeroHabitaciones} </p>
            <div className="flex flex-row justify-between">
                <div className="p-2">
                    <label htmlFor="adultos" className="text-center">Adultos</label>
                    <div className="flex flex-row">
                        <div className="">
                            <button type="button" className="focus:outline-none text-gray-400" onClick={resAdulto}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </button>
                        </div>
                        <div className="">
                            <p className="px-2 text-sm">{adultos}</p>                                  
                        </div>
                        <div className="">
                            <button type="button" className="focus:outline-none text-gray-400" onClick={addAdulto}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="p-2">
                    <label htmlFor="ninos" className="text-center w-full">Niños</label>
                    <div className="flex flex-row">
                        <div className="">
                            <button type="button" className="focus:outline-none text-gray-400" onClick={resNinos}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </button>
                        </div>
                        <div className="">
                            <p className="px-2 text-sm">{ninos}</p>
                        </div>
                        <div className="">
                            <button type="button" className="focus:outline-none text-gray-400" onClick={addNinos}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}*/