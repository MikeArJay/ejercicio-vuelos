import React, { useEffect, useState } from 'react'

function Vuelo(props) {
    const [show, setShow] = useState(false);
    const [usedSeats, setUsedSeats] = useState(0);
    const [availableSeats, setAvailableSeats] = useState(props.seats);
    const [inBanner, setInBanner] = useState(false);

    const handleClickShow = () => {
        setShow(!show)
    };

    const bookSeat = () => {
        const newAvailableSeats = availableSeats - 1;
        const newUsedSeats = usedSeats + 1;

        if (usedSeats < props.seats) {
            setUsedSeats(newUsedSeats)
            setAvailableSeats(newAvailableSeats)
        }
        // Banner check
        if (newAvailableSeats< 3 && !inBanner){
            props.addBanner(
                {
                    "number": props.number,
                    "destination": props.destination
                }
            );
            setInBanner(true);


        }
    }
    const freeSeat = () => {
        const newAvailableSeats = availableSeats + 1;
        const newUsedSeats = usedSeats - 1;
        if (usedSeats > 0) {
            setUsedSeats(newUsedSeats)
            setAvailableSeats(newAvailableSeats)
        }
        //Banner Check
        if (newAvailableSeats >= 3) {
            props.removeBanner(props.number);
            setInBanner(false);
        }
    }

    const handleClickDelete = () => {
        props.deleteFlight(props.number);
        props.removeBanner(props.number);
    }

    return (
        <div key={props.number} className='divVuelo'>
            <div className='info'>
                <span className='field'>Numero de vuelo:</span>
                <span className='data'>{props.number}</span>
            </div>
            <div className='info'>
                <span className='field'>Fecha:</span>
                <span className='data'>{props.date}</span>
            </div>
            {(show) ?
                <div className='panel'>
                    <div className='info'>
                        <span className='field'>Destino:</span>
                        <span className='data'>{props.destination}</span>
                    </div>
                    <div className='info'>
                        <span className='field'>Fecha:</span>
                        <span className='data'>{props.date}</span>
                    </div>
                    <div className='info'>
                        <span className='field'>Hora:</span>
                        <span className='data'>{props.time}</span>
                    </div>
                    <div className='info'>
                        <span className='field'>Plazas totales:</span>
                        <span className='data'>{props.seats}</span>
                    </div>
                    <div className='info'>
                        <span className='field'>Disponibles:</span>
                        <span className='data'>{availableSeats}</span>

                    </div>
                    <div className='info'>
                        <span className='field'>Ocupadas:</span>
                        <span className='data'>{usedSeats}</span>
                    </div>
                    <div className='reservaVuelos'>
                        <button className='bookButtons' onClick={bookSeat}>Reservar plaza</button>
                        <button className='bookButtons' onClick={freeSeat}>Liberar plaza</button>
                    </div>
                    <button className='showButton' onClick={handleClickShow}>Ver menos</button>
                    <br/>
                    <button className='deleteButton' onClick={handleClickDelete}>Eliminar vuelo</button>
                </div> :
                <button className='showButton' onClick={handleClickShow}>Seleccionar</button>
            }


        </div>
    )

}
export default Vuelo