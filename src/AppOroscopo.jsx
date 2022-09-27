import React from 'react'
import POroscopos from './POroscopos'
import { useState } from 'react'
import OroscopoGet from './Components/Oroscopo';

const fechanaci= document.querySelector("#FechaNac");

const AppOroscopo = () => {
const [Horoscopo, setHoroscopo] = useState("");
//ejecutamos la funcion al cambiar la fecha de nacimiento
const fechaOnChange = (e) => {
    const fecha = e.target.value;
    const signo = OroscopoGet(fecha);
    setHoroscopo(signo);
    
  };

  return (
    //formulario de ingresar fecha de nacimiento
    <div>
      <form id='FechaNac-form'>
        <label htmlFor='FechaNac'><strong>Fecha de nacimiento</strong></label>
        <input type="date" onChange={fechaOnChange} id='FechaNac' name='FechaNac' className='form-control'/>       
      </form>
      
      <POroscopos Horoscopo={Horoscopo} />
    </div>

   
    
  )
}


export default AppOroscopo