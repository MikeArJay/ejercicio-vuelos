import React, { useState } from "react";

function FormularioVuelo(props) {
    const [showForm, setShowForm] = useState(false);
    const [flightForm, setFlightForm] = useState({
        "date": "",
        "time": "",
        "number": "",
        "seats": ""
    })

    const handleShowForm = () => {
        setShowForm((prev)=> !prev);
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFlightForm((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newFlight = {
            "date": flightForm.date,
            "time": flightForm.time,
            "number": flightForm.number,
            "seats": parseInt(flightForm.seats)
        }
        props.parentAddFlight(newFlight, props.parentDestination);

        setFlightForm({
            "date": "",
            "time": "",
            "number": "",
            "seats": ""
        })
        setShowForm((prev)=> !prev);
    }



    return (
        <>
            <button type="button" className="add bookButtons" onClick={handleShowForm}> {showForm ? 'Cancelar' : 'Añadir vuelo'}</button>
            {showForm &&
                <form onSubmit={handleSubmit}>

                    <label className="addFlightLabel">Fecha:
                        <input
                            type="text"
                            name="date"
                            value={flightForm.date}
                            onChange={handleChange}
                        />
                    </label>

                    <label className="addFlightLabel">Hora:
                        <input
                            type="text"
                            name="time"
                            value={flightForm.time}
                            onChange={handleChange}
                        />
                    </label>
                    <label className="addFlightLabel">Número:
                        <input
                            type="text"
                            name="number"
                            value={flightForm.number}
                            onChange={handleChange}
                        />
                    </label>
                    <label className="addFlightLabel">Nº asientos:
                        <input
                            type="number"
                            name="seats"
                            value={flightForm.seats}
                            onChange={handleChange}
                        />
                    </label>
                    <button type="submit" className="add bookButtons">Añadir Vuelo</button> 

                </form>
            }
        </>
    );

}

export default FormularioVuelo;
