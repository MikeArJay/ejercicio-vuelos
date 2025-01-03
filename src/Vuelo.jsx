import React, { useState } from 'react'

function Vuelo(props) {
    const [show, setShow] = useState(false);
    const [usedSeats, setUsedSeats] = useState(0)
    const [availableSeats, setAvailableSeats] = useState(props.seats)
    const handleClick = () => {
        setShow(!show)
    };
    const bookSeat = () => {
        if (usedSeats < props.seats) {
            setUsedSeats(usedSeats + 1)
            setAvailableSeats(availableSeats - 1)
        }
    }
    const freeSeat = () => {
        if (usedSeats > 0) {
            setUsedSeats(usedSeats - 1)
            setAvailableSeats(availableSeats + 1)
        }
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
                    <button className='showButton' onClick={handleClick}>Ver menos</button>
                </div> :
                <button className='showButton' onClick={handleClick}>Seleccionar</button>
            }


        </div>
    )

}
export default Vuelo