import React from 'react'
import { Content } from './Content'
//import { ContextProvider } from './ContextProvider'
import { FormReservacion } from './FormReservacion'
import { Navbar } from './Navbar'

export const Home = () => {
    return (
        <div>
            <Navbar/>
            <div className="bg-acapulco bg-cover bg-center h-96"> 
                <div className="grid grid-rows-2 grid-flow-col gap-4 py-20">
                    <div className="flex justify-center">
                        <p className="text-white text-xl px-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                    <div className="flex justify-center">
                    </div>
                </div>
            </div>

            <FormReservacion />
            <Content />
        </div>
    )
}
