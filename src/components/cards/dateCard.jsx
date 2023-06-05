import React, { useState } from "react";
import Pet from "../form/pet";

export function Card({petName, ownerName, date, time, signs}) {
  
  
  const [deleted, setDeleted] = useState(false)
  const handleClick = e => setDeleted(!deleted)
  return !deleted &&
    <div class="date">
        <p>Mascota: <span>{petName}</span></p>
        <p>Dueño: <span>{ownerName}</span></p>
        <p>Fecha: <span>{date}</span></p>
        <p>Hora: <span>{time}</span></p>
        <p>Sintomas: <span>{signs}</span></p>
        <button class="button elimnar u-full-width" onClick={handleClick}>Eliminar</button>
    </div>
  
}

