import React from 'react'
import PropTypes from 'prop-types'

export const Tarifas = ({fllegada, fsalida, idhab, descripcion}) => {
    return (
        <div className="container mt-2 md:">
            <table className="table-auto border-collapse border border-black">
                <thead>
                    <tr>
                        <th className="border border-black text-sm">Habitacion</th>
                        <th className="border border-black text-sm">LU</th>
                        <th className="border border-black text-sm">MA</th>
                        <th className="border border-black text-sm">MI</th>
                        <th className="border border-black text-sm">JU</th>
                        <th className="border border-black text-sm">Vi</th>
                        <th className="border border-black text-sm">SA</th>
                        <th className="border border-black text-sm">DO</th>
                        <th className="border border-black text-sm">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-black text-center text-sm px-2">{descripcion} <small className="text-gray">sin desayumo</small> </td>
                        <td className="border border-black text-center text-sm px-2">$50</td>
                        <td className="border border-black text-center text-sm px-2">$50</td>
                        <td className="border border-black text-center text-sm px-2">$50</td>
                        <td className="border border-black text-center text-sm px-2">$50</td>
                        <td className="border border-black text-center text-sm px-2">$50</td>
                        <td className="border border-black text-center text-sm px-2">$50</td>
                        <td className="border border-black text-center text-sm px-2">$50</td>
                        <td className="border border-black text-center text-sm px-2">
                            $1500
                            <button className="ml-2 p-2 rounded-full hover:bg-blue-800 bg-blue-600 text-sm text-white focus:outline-none">Reservar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

Tarifas.propTypes = {
    fllegada: PropTypes.string.isRequired,
    fsalida : PropTypes.string.isRequired,
    idhab: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
}
