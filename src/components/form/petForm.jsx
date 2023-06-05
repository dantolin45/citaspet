
import { Button } from 'reactstrap'
import React, { useEffect } from "react";
// import { Formik, Form } from 'formik'
import Pet from './pet';

    export const PetF = ({setCards}) => {
        return(
            <div>
                <label>Nombre de Mascota</label>
                <input type="text" id="pet" placeholder="Mascota"  className="u-full-width" required />
                <label>Nombre completo del Dueño</label>
                <input type="text" id="owner" placeholder="Dueño" className="u-full-width"required  />
                <label>Fecha</label>
                <input type="date" id="date" placeholder="Fecha" className="u-full-width" required />
                <label>Hora</label>
                <input type="time" id="time" placeholder="Hora" className="u-full-width" required />
                <label>Sintomas</label>
                <textarea id="signs" placeholder="Describa los sintomas.." className="u-full-width" required />
                <button color='primary w-100' type='button'  onClick={() => setCards((prev=>[...prev,{
                    petName:document.getElementById('pet').value,
                    ownerName:document.getElementById('owner').value,
                    date:document.getElementById('date').value,
                    time:document.getElementById('time').value,
                    signs:document.getElementById('signs').value
                }]))}>Agregar Cita</button>
            </div>
        )
    }










