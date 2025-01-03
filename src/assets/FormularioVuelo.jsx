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
    }



    return (
        <>
            <button type="button" className="add bookButtons" onClick={handleShowForm}>Añadir vuelo</button>
            {showForm &&
                <form onSubmit={handleSubmit}>

                    <label>Fecha:
                        <input
                            type="text"
                            name="date"
                            value={flightForm.date}
                            onChange={handleChange}
                        />
                    </label>

                    <label>Hora:
                        <input
                            type="text"
                            name="time"
                            value={flightForm.time}
                            onChange={handleChange}
                        />
                    </label>
                    <label>Número:
                        <input
                            type="text"
                            name="number"
                            value={flightForm.number}
                            onChange={handleChange}
                        />
                    </label>
                    <label>Nº asientos:
                        <input
                            type="number"
                            name="seats"
                            value={flightForm.seats}
                            onChange={handleChange}
                        />
                    </label>
                    <input type="submit" />

                </form>
            }
        </>
    );

}

export default FormularioVuelo;
