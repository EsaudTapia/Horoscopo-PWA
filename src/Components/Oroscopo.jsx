import React from 'react'



const Oroscopo = (fecha) => {
 //validar el horoscopo segun la fecha
//conveertimos ffecha a date
const fechaDate = new Date(fecha)

//obtenemos el mes
const mes = fechaDate.getMonth()+1

//obtenemos el day 
const dia = fechaDate.getDate()+1

console.log(mes)
console.log(dia)
  
 if ((dia>=21 && mes==3) || (dia<=20 && mes==4))
 { return "Aries";}

  else if ((dia>=21 && mes==4) || (dia<=20 && mes==5))
 { return "Tauro";}

  else if ((dia>=21 && mes==5) || (dia<=21 && mes==6))
 { return "Geminis";}

  else if ((dia>=22 && mes==6) || (dia<=22 && mes==7))
 { return "Cancer";}

  else if ((dia>=23 && mes==7) || (dia<=23 && mes==8))
 { return "Leo";}

  else if ((dia>=24 && mes==8) || (dia<=22 && mes==9))
 { return "Virgo";}

  else if ((dia>=23 && mes==9) || (dia<=22 && mes==10))
 { return "Libra";}

  else if ((dia>=23 && mes==10) || (dia<=22 && mes==11))
 { return "Escorpio";}

 else if ((dia>=23 && mes==11) || (dia<=21 && mes==12))
 { return "Sagitario";}

 else if ((dia>=22 && mes==12) || (dia<=20 && mes==1))
 { return "Capricornio";}

 else if ((dia>=21 && mes==1) || (dia<=19 && mes==2))
 { return"Acuario";}

 else if ((dia>=20 && mes==2) || (dia<=20 && mes==3))
 { return "Piscis";}

 else {
  return"No ingresaste ninguna fecha bro";
 }
}



export default Oroscopo