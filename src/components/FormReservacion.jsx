import React, { createRef, useContext, useEffect, useState } from 'react'
import { createPopper } from '@popperjs/core'
//import { useForm } from '../hooks/useForm'
import {RowInputs} from './RowInputs'
import { useHistory } from 'react-router'
import { Context } from '../hooks/Context'

export const FormReservacion = () => {
    
    const [inputValues, setinputValues] = useState({
        paquete: false,
        destino: '',
        fsalida: '',
        fllegada: '',
        nHabitaciones: 0,
        promo:'',
        nAdultos: 2,
        nNinos: 0, 
        personas: []
    })

    const [popperShow, setpopperShow] = useState(false);
    const btnRef = createRef();
    const popoverRef = createRef();
    const history = useHistory();
    const { paquete,destino ,nHabitaciones, nAdultos, nNinos, personas} = inputValues
    const [rows, setrows] = useState([])
    const [numeroHabitaciones, setstateHabitacion] = useState(0)    
    const {data, setdata} = useContext(Context)

    const handleInputChangeTow = (event) => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        const name = event.target.name;

        setinputValues({
            ...inputValues,
            [name] : value
        })
    }
    const openPopover = () => {
        createPopper(btnRef.current, popoverRef.current, {
            placement: "bottom"
        })
        setpopperShow(true);
    }
    const closePopover = () => {
        setpopperShow(false);
    }    
    const addHabitacion = () => {
        setstateHabitacion(
            numeroHabitaciones+1
        )
        setrows(rows.concat({nAdultos, nNinos}) )

        const array = [];
        if(personas.length === 0){
            array.push({ adultos:2 , ninos:0})
        
            setinputValues({
                ...inputValues,
                personas: array
            })
        }else {
            array.push(...personas, { adultos:2 , ninos:0})
        
            setinputValues({
                ...inputValues,
                personas: array
            })
        }
    }
    const resHabitacion = () => {
        if(numeroHabitaciones === 1){
            return numeroHabitaciones;
        }

        setstateHabitacion(numeroHabitaciones-1)
        handleOnRemove() 

        const copyArray = [...inputValues.personas]
        copyArray.splice(copyArray.length-1, 1)
        setinputValues({
            ...inputValues,
            personas: copyArray
        })

    }
    const handleOnRemove = index => {
        const copyRows = [...rows];
        copyRows.splice(index, 1);
        setrows(copyRows);
    };
    const confirmationHabitacion = () => {
        closePopover();
    }
    const changePersonRoom = (adultos, menores, index) => {

        const copyArray = inputValues.personas
        copyArray[index].adultos = adultos
        copyArray[index].ninos = menores

        setinputValues({
            ...inputValues,
            personas: copyArray
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        
        setdata({
            ...data,
            destino: inputValues.destino,
            paquete: inputValues.paquete,
            fsalida: inputValues.fsalida,
            fllegada: inputValues.fllegada,
            nHabitaciones: inputValues.nHabitaciones,
            promo: inputValues.promo,
            personas: inputValues.personas
        })

        history.push(`/habitaciones`)
    }

    useEffect(() => {
        setinputValues({
            ...inputValues,
            nHabitaciones: numeroHabitaciones
        })
    }, [numeroHabitaciones])

    /*useCallback(
        () => {
            setinputValues({
                ...inputValues,
                nHabitaciones: numeroHabitaciones
            })
        },
        [numeroHabitaciones],
    )*/

    return (
        <div className="container mx-auto px-4 -mt-32">
            <div className="grid grid-rows-2 grid-flow-col gap-4">
                <div className="flex justify-center">
                    <p className="text-white text-3xl">Reservar Ahora</p>
                    <p>{}</p>
                </div>
                <div className="flex justify-center">
                    <svg className="animate-bounce w-8 h-8 text-white text-3xl" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7"></path></svg>
                </div>
            </div>
            <div className="shadow shadow-2xl rounded rounded-lg bg-white p-8">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="">
                            <p className="text-lg text-black text-center font-bold mb-5">{ paquete ? 'Paquete' : 'Hotel' }</p>
                            <input type="checkbox" name="paquete" id="paquete" checked={paquete} onChange={handleInputChangeTow} />
                        </div>        
                        <div className="col-span-2 sm:col-span-2">
                            <p className="text-lg text-black text-center font-bold mb-5">Habitaciones</p>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="">
                                    <label htmlFor="destino" className="block text-gray-700 text-sm font-semibold mb-2">Destino</label>
                                    <select name="destino" id="" className="w-full text-xs pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                    onChange={handleInputChangeTow} value={destino}>
                                        <option value="">Seleccione</option>
                                        <option value="Acapulco">Acapulco</option>
                                    </select>
                                </div>
                                <div className="">
                                    <label htmlFor="fllegada" className="block text-gray-700 text-sm font-semibold mb-2">Fecha Llegada</label>
                                    <input type="date" name="fllegada" id="fllegada" onChange={handleInputChangeTow} 
                                    className="w-full text-xs pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" />
                                </div>
                                <div className="">
                                    <label htmlFor="fllegada" className="block text-gray-700 text-sm font-semibold mb-2">Fecha Salida</label>
                                    <input type="date" name="fsalida" id="fsalida" onChange={handleInputChangeTow}  
                                    className="w-full text-xs pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" />
                                </div>
                                <div className="">
                                    <label htmlFor="" className="block text-gray-700 text-sm font-semibold mb-2">Personas</label>
                                    
                                    <div className=""></div>
                                    <button type="button" className="w-full text-xs pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 focus:outline-none"
                                    onClick={()=> { popperShow ? closePopover() : openPopover() }} ref={btnRef}>
                                        Habitaciones: { nHabitaciones }
                                    </button>

                                    <div className={ (popperShow ? "": "hidden") + " bg-white border-2 border-gray-400 mb-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg"  }
                                    ref={popoverRef}>
                                        <div>
                                            <div className="bg-white text-black opacity-75 font-semibold p-3 mb-0 border-b border-solid border-blueGray-200 uppercase rounded-t-lg">
                                                Detalle de Habitaciones 
                                            </div>
                                            <div className="text-black p-3">
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="">
                                                        <label htmlFor="habitaciones">Habitaciones</label>
                                                    </div>
                                                    <div className="flex flex-row">
                                                        <div>
                                                            <button type="button" onClick={resHabitacion} className="focus:outline-none text-gray-400">
                                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                            </button>
                                                        </div>
                                                        <div>
                                                            <p className="px-2 text-sm">{numeroHabitaciones}</p>
                                                        </div>
                                                        <div>
                                                            <button type="button" onClick={addHabitacion} className="focus:outline-none text-gray-400">
                                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 grap-4">
                                                    {
                                                        rows.map((row,index) => (
                                                            <RowInputs 
                                                                nAdultos={nAdultos} 
                                                                nNinos={nNinos} 
                                                                numero={index} 
                                                                handleAddPersonas={changePersonRoom} 
                                                                key={index} 
                                                                values={inputValues}
                                                                setInpunt={setinputValues}
                                                            />
                                                        ))
                                                    }
                                                </div>
                                                <div className="">
                                                    <button type="button" className="mt-2 p-2 w-full bg-blue-900 text-white hover:bg-opacity-75" onClick={confirmationHabitacion}>Listo</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <label htmlFor="codigo" className="block text-gray-700 text-sm font-semibold mb-2">Promocion</label>
                                    <input type="text" name="promo" id="promo" onChange={handleInputChangeTow} autoComplete="off"
                                    className="w-full text-xs pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Escribe tu codigo" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap content-center">
                            <button type="submit" className="uppercase border-2 w-full border-blue-800 rounded-full bg-white text-blue-600 text-center text-base hover:text-white hover:bg-blue-800">Reservar Ahora</button>
                        </div>
                    </div>
                </form>
            </div>    
        </div>
    )
}
