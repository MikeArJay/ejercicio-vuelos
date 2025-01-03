import React, { useState, useEffect } from "react";
import importedVuelos from "./vuelos.json"
import Vuelo from "./Vuelo.jsx"
import FormularioVuelo from "./assets/FormularioVuelo.jsx";

function Vuelos() {
    const [data, setData] = useState(importedVuelos);


    const addFlight = (flight, destination) => {

        /*TODO setData With info form child
        {
                "date": "2023-12-12",
                "time": "10:00",
                "number": "VO123",
                "seats": 150
            }
            */
        let newData = JSON.parse(JSON.stringify(data))
        // check
        newData.forEach((item)=>{
            if (item.destination === destination){
                item.flights.push(flight)
            }
        })
        setData(newData)

    }

    return (
        <>
            {data && data.map((e =>
                <ul className="destinations" key={e.destination}>
                    <li>
                        <h2>{e.destination}</h2>
                        <FormularioVuelo parentAddFlight = {addFlight} parentDestination = {e.destination}/>
                        <ul>
                            {e.flights.map((flight =>
                                <Vuelo
                                    key={flight.number}
                                    number={flight.number}
                                    date={flight.date}
                                    time={flight.time}
                                    seats={flight.seats}
                                    destination={e.destination}
                                />

                            ))}
                        </ul>

                    </li>
                </ul>

            ))}
        </>
    )

}
export default Vuelos