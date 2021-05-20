import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../hooks/Context'
//import { handleSearchRooms } from '../services/ApiRest'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import axios from 'axios'


export const ViewHabitacion = () => {

    const {data, setdata} = useContext(Context)
    const [rooms, setrooms] = useState([])
    const [isLoaded, setisLoaded] = useState(false)
    
    useEffect(() => {
       axios.get('http://18.220.85.35/apirest/habitaciones/get')
       .then( (response) => {       
            setrooms(response.data )
            setisLoaded(true)
        })
    }, [])

    
    const {fllegada, fsalida, nHabitaciones} = data

    const handleChange = (e) => {
        setdata()
    }

    const submitsearchrooms = (e) => {
        e.preventDefault();
        setisLoaded(false)

        axios.get('http://18.220.85.35/apirest/habitaciones/get')
       .then( (response) => {       
            setrooms(response.data )
            setisLoaded(true)
       } )
    }
    
    return (
        <div >
            <Navbar />   

            <div className="container mx-auto px-4">
                <div className="mt-4 shadow rounded-lg p-3 shadow-2xl border-2">
                    <h4 className="font-sans font-bold text-lg text-green-600">Su Busqueda</h4>
                    <hr className="divide-gray-500 divide-y-8" />
                    <form action="" className="p-3" onSubmit={submitsearchrooms}>
                        <div className="flex items-center space-x-4">
                        <div className="flex flex-col">
                                <label htmlFor="" className="leading-loose">Hotel</label>
                                <div className="relative focus-within:text-gray-600 text-gray-400">
                                    
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="" className="leading-loose">Llegada</label>
                                <div className="relative focus-within:text-gray-600 text-gray-400">
                                    <input type="text" className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                    value={fllegada} name="llegada" onChange={handleChange}/>
                                    <div className="absolute left-3 top-2">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="" className="leading-loose">Salida</label>
                                <div className="relative focus-within:text-gray-600 text-gray-400">
                                    <input type="text" className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" 
                                    value={fsalida} name="fsalida" onChange={handleChange}/>
                                    <div className="absolute left-3 top-2">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="" className="leading-loose">Habitaciones</label>
                                <div className="relative focus-within:text-gray-600 text-gray-400">
                                    <input type="text" className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                    value={nHabitaciones} name="nHabitaciones" onChange={handleChange}/>
                                    <div className="absolute left-3 top-2">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="" className="leading-loose">Adultos</label>
                                <div className="relative focus-within:text-gray-600 text-gray-400">
                                    <input type="text" className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" 
                                    value={nHabitaciones} name="adultos" onChange={handleChange}/>
                                    <div className="absolute left-3 top-2">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="" className="leading-loose">Menores</label>
                                <div className="relative focus-within:text-gray-600 text-gray-400">
                                    <input type="text" className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" 
                                    value={nHabitaciones} name="menores" onChange={handleChange}/>
                                    <div className="absolute left-3 top-2">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2">
                            <button type="submit" className="p-2 rounded-full hover:bg-blue-800 bg-blue-600 text-sm text-white focus:outline-none">Ver DIsponibilidad</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-5">
                <h4 className="font-sans font-bold text-lg text-green-600">Habitaciones</h4>
                {
                    isLoaded ?
                    <div>
                        { rooms.map( item => (
                            <div className="mt-2 rounded-lg p-2" key={item.idHabitacion }>
                                <div className="bg-white border-2 border-gray-300 p-2 rounded-md tracking-wide shadow-lg">
                                    <div id="header" className="flex"> 
                                        <img alt="mountain" className="w-80 rounded-md border-2 border-gray-300" src="https://picsum.photos/seed/picsum/200" />
                                        <div id="body" className="flex flex-col ml-5">
                                            <h4 className="text-xl font-semibold mb-2">{item.descripcion }</h4>
                                            <div className="leading-tight">
                                                <p className="text-gray-800 mt-2 text-sm">Vista: { item.vista }</p>
                                                <p className="text-gray-800 mt-2 text-sm">Camas: { item.camas }</p>
                                                <p className="text-gray-800 mt-2 text-sm">Servicios: { item.servicios }</p>
                                                <p className="text-gray-800 mt-2 text-sm">Entrada: { item.entrada } Salida: {item.salida } </p>
                                            </div>
                                            <p className="text-gray-800">Tarifas:</p>
                                            <table className="table-auto border-collapse border border-black">
                                                <thead>
                                                    <tr>
                                                        <th className="border border-black text-sm">Habitacion</th>
                                                        <th className="border border-black text-sm">Lunes</th>
                                                        <th className="border border-black text-sm">Martes</th>
                                                        <th className="border border-black text-sm">Miercoles</th>
                                                        <th className="border border-black text-sm">Jueves</th>
                                                        <th className="border border-black text-sm">Viernes</th>
                                                        <th className="border border-black text-sm">Sabado</th>
                                                        <th className="border border-black text-sm">Domingo</th>
                                                        <th className="border border-black text-sm">Total por habitacion</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="border border-black text-center text-sm">{item.descripcion} <small className="text-gray">sin desayumo</small> </td>
                                                        <td className="border border-black text-center text-sm">$50</td>
                                                        <td className="border border-black text-center text-sm">$50</td>
                                                        <td className="border border-black text-center text-sm">$50</td>
                                                        <td className="border border-black text-center text-sm">$50</td>
                                                        <td className="border border-black text-center text-sm">$50</td>
                                                        <td className="border border-black text-center text-sm">$50</td>
                                                        <td className="border border-black text-center text-sm">$50</td>
                                                        <td className="border border-black text-center text-sm">
                                                            $1500
                                                            <button className="ml-2 p-2 rounded-full hover:bg-blue-800 bg-blue-600 text-sm text-white focus:outline-none">Reservar</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-black text-center text-sm">{item.descripcion} <small className="text-gray">con desayumo</small> </td>
                                                        <td className="border border-black text-center text-sm">$50</td>
                                                        <td className="border border-black text-center text-sm">$50</td>
                                                        <td className="border border-black text-center text-sm">$50</td>
                                                        <td className="border border-black text-center text-sm">$50</td>
                                                        <td className="border border-black text-center text-sm">$50</td>
                                                        <td className="border border-black text-center text-sm">$50</td>
                                                        <td className="border border-black text-center text-sm">$50</td>
                                                        <td className="border border-black text-center text-sm">
                                                            $1500
                                                            <button className="ml-2 p-2 rounded-full hover:bg-blue-800 bg-blue-600 text-sm text-white focus:outline-none">Reservar</button>
                                                        </td>
                                                    </tr><tr>
                                                        <td className="border border-black text-center text-sm">{item.descripcion} <small className="text-gray">todo incluido</small> </td>
                                                        <td className="border border-black text-center text-sm">$50</td>
                                                        <td className="border border-black text-center text-sm">$50</td>
                                                        <td className="border border-black text-center text-sm">$50</td>
                                                        <td className="border border-black text-center text-sm">$50</td>
                                                        <td className="border border-black text-center text-sm">$50</td>
                                                        <td className="border border-black text-center text-sm">$50</td>
                                                        <td className="border border-black text-center text-sm">$50</td>
                                                        <td className="border border-black text-center text-sm">
                                                            $1500
                                                            <button className="ml-2 p-2 rounded-full hover:bg-blue-800 bg-blue-600 text-sm text-white focus:outline-none">Reservar</button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )) }
                    </div>
                    :
                    <p>cargando habitaciones</p>
                }
            </div>

            <Footer />
        </div>
    )
}