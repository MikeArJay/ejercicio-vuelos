import React, { useState, useEffect } from "react";
import importedVuelos from "./vuelos.json"
import Vuelo from "./Vuelo.jsx"
import FormularioVuelo from "./FormularioVuelo.jsx";

function Vuelos() {
    const [data, setData] = useState(importedVuelos);
    const [bannersData, setBannersData] = useState([])

   

    const addFlight = (flight, destination) => {

        let newData = JSON.parse(JSON.stringify(data))

        newData.forEach((item) => {
            if (item.destination === destination) {
                item.flights.push(flight)
            }
        })
        setData(newData)

    }
    const deleteFlight = (flightNumber) => {
        // Vamos a crear un nuevo set de datos filtrando el antiguo
        const newData = data.map((destination) => ({
            ...destination,
            flights: destination.flights.filter((flight) => flight.number !== flightNumber)
        }));

        setData(newData);

    }
    const addBanner = (bannerObject) => {
        const newBannersData = [...bannersData];
        newBannersData.push(bannerObject);
        setBannersData(newBannersData);
    }

    const removeBanner = (flightNumber) => {
        const newData = bannersData.filter((bannerObject) => bannerObject.number !== flightNumber);
        setBannersData(newData);
    }



    return (
        <>
            {bannersData.map((bannerInfo =>
                <div key={bannerInfo.number} className="banner">
                    <h3>Últimas plazas disponibles para el vuelo {bannerInfo.number} con destino {bannerInfo.destination}</h3>
                </div>

            ))}


            {data && data.map((e =>
                <ul className="listDestinations" key={e.destination}>
                    <li>
                        <div className="divDestinations">
                            <h2>{e.destination}</h2>
                            <FormularioVuelo
                                parentAddFlight={addFlight}
                                parentDestination={e.destination}
                            />
                            {e.flights.map((flight =>
                                <Vuelo
                                    key={flight.number}
                                    number={flight.number}
                                    date={flight.date}
                                    time={flight.time}
                                    seats={flight.seats}
                                    destination={e.destination}
                                    deleteFlight={deleteFlight}
                                    addBanner={addBanner}
                                    removeBanner={removeBanner}
                                />
                            ))}

                        </div>
                    </li>
                </ul>

            ))}
        </>
    )

}
export default Vuelos