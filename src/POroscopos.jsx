import React from "react";
import PropTypes from "prop-types";

const Dataoroscopos = [
  {
    nombre: "Aries",
    fecha: "21 marzo - 20 abril",
    imagen:
      "https://rsc.lavanguardia.com/img/horoscopo/horoscopo-aries.jpg",
    descripcion:
     " Horóscopo de hoy: Estarás frustrado durante todo el día, por no poder encontrar aquello que andas buscando. Deberás buscar con mayor atención"+

      "Amor: Los encuentros virtuales con colegas de trabajo no serán bien vistos por tu pareja. Escoge un momento para explicarles las situaciones."+
      
      "Riqueza: Puede ser que críticas poco fundamentadas y muy mal intencionadas te lleven a perder los nervios o a dudar. Ten confianza."+
      
      "Bienestar: Busca cierto orden en tu trabajo y en tus actividades diarias, ya que en ellas se encuentran los placeres que te levantan el ánimo."
  },

  {
    nombre: "Tauro",
    fecha: "21 abril - 20 mayo",
    imagen:
      "https://larepublica.pe/resizer/5mlBLeBHaIIRR3lkVg18HxA6q2I=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/SINCYARBAVEGNEWZFUB7X4LQVM.jpg",
    descripcion: "Horóscopo de hoy: Alguien puede pedirte que te sumes a una de sus batallas hoy. Ese no es tu problema, concéntrate en tus propios asuntos."+

    "Amor: Hace falta que te presten más atención. Intenta impresionar y hacerle cambiar las costumbres establecidas a tu pareja."+
    
    "Riqueza: Debes cuidar hoy del sector económico, pues los ingresos ahora serán efímeros y las personas puede que no sean de fiar."+
    
    "Bienestar: No temas avocarte a aquella carrera que siempre deseaste, pero que has considerado no fructífera. Busca un momento en tu vida para hacerlo."
  },
  {
    nombre: "Geminis",
    fecha: "21 mayo - 21 junio",
    imagen:
      "https://t1.uc.ltmcdn.com/es/posts/2/3/6/como_seducir_a_un_geminis_3632_600.jpg",
    descripcion: "Horóscopo de hoy: Si no puedes hacer lo que quieres no los fuerces, ya que si lo haces las cosas podrían empeorar más de lo imaginable."+

    "Amor: Alguien que conoces está esperando un gesto de amor y comprensión. Presta atención, está más cerca de lo que crees."+
    
    "Riqueza: Tu economía mejorará sensiblemente. Actúa con prudencia y no tomes decisiones impulsivamente, no es momento de arriesgarse."+
    
    "Bienestar: Busca el momento justo para hablar con libertad. De nada sirve intentar mantener un diálogo con restricciones internas."
  },
  {
    nombre: "Cancer",
    fecha: "22 junio - 22 julio",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyZSlv1eoHhXYQCMRbLAAe_jrImq66UuJW2wH-Z4EZOBVAsrTj4Td7KvZaw6fmoBO2XGY&usqp=CAU",
    descripcion: "Horóscopo de hoy: Si estas enojado con alguien cuida tus actitudes para con el resto, podría traerte problemas no deseados."+

    "Amor: En el amor no te puede ir mejor, así que es un momento ideal. Aprovéchalo y no te arrepentirás."+
    
    "Riqueza: Hoy puedes tener una gran repercusión en tu vida económica y laboral dependiendo de tu propia actitud. Te están mirando."+
    
    "Bienestar: Tienes derecho de cambiar tu modo de pensar, no temas hacer un giro. Quizás se rompe algo en tu entorno, pero el resultado será positivo para todos.",
    
  },
  {
    nombre: "Leo",
    fecha: "23 julio - 23 agosto",
    imagen: "https://rsc.lavanguardia.com/img/horoscopo/horoscopo-leo.jpg",
    descripcion: "Horóscopo de hoy: Se acercan momentos de decisiones, si sabes decir no, puede que te ahorres muchos inconvenientes y malentendidos."+

    "Amor: Si sientes que nada podría empeorar es ahí donde te equivocas. De ahora en adelante depende de ambos resurgir del momento."+
    
    "Riqueza: Tu capacidad adquisitiva se verá muy mejorada a lo largo de los próximos períodos. Trata de no derrochar los ingresos."+
    
    "Bienestar: Debes revisar tu salud, ya que es una etapa de hipersensibilidad y la exageración puede estar presente en la comida o el alcohol. Se responsable."
  },
  {
    nombre: "Virgo",
    fecha: "24 agosto - 22 septiembre",
    imagen:
      "https://www.lavanguardia.com/files/image_948_465/uploads/2020/05/24/5fa9cd0b51508.jpeg",
    descripcion: "Horóscopo de hoy: Hoy te sentirás tentado a dejar todo de lado, ten en cuenta que no será la mejor de tus decisiones. Piensa bien que vas a elegir."+

    "Amor: Deben aprender que el amor no se termina si se transforma en algo mucho más apacible y tranquilo. Sé más romántico."+
    
    "Riqueza: Comprobarás que las cosas salen por si solas y no tendrás que esforzarte mucho para conseguir un poco de dinero extra."+
    
    "Bienestar: Ten cuidado con los excesos en el comer o beber, porque pueden traerte problemas de salud, sobre todo, en la digestión. Realiza alguna actividad."
  },
  {
    nombre: "Libra",
    fecha: "23 septiembre - 22 octubre",
    imagen: "https://rsc.lavanguardia.com/img/horoscopo/horoscopo-libra.jpg",
    descripcion: "Horóscopo de hoy: Trata de tener organizado tu trabajo y asuntos personales, ya que vienen momentos de inconvenientes que te tomarás desprevenido."+

    "Amor: En el último tiempo tu pareja y tú han logrado superar malos entendidos que tanto los perjudicaban. Continúa por el buen camino."+
    
    "Riqueza: Puede ser que una petición laboral que realices no sea bien recibida. Tómalo con calma y vuelve a intentarlo."+
    
    "Bienestar: Estás pasando por un buen momento en lo que respecta a tu salud, lo que no quiere decir que no tengas ningún tipo de cuidados."
  },
  {
    nombre: "Escorpio",
    fecha: "23 octubre - 22 noviembre",
    imagen: "https://rsc.lavanguardia.com/img/horoscopo/horoscopo-escorpio.jpg",
    descripcion: "Horóscopo de hoy: Tu fuerza está en tu voluntad, pero trata de no dejarte llevar por tus emociones que no siempre te dejan bien parado."+

    "Amor: Habrá algún elemento de dualidad en tu naturaleza que puede crear situaciones complicadas. Trata de sobrellevarlas."+
    
    "Riqueza: Estás pasando por un período de mucho trabajo y agotamiento, debes realizar otras actividades que te relajen."  +
    
    "Bienestar: Es posible que sientas los cambios continuos de temperatura. Toma tus precauciones. Presta atención a tu cuerpo y realiza actividades de relajación."
  },
  {
    nombre: "Sagitario",
    fecha: "23 noviembre - 21 diciembre",
    imagen:
      "https://rsc.lavanguardia.com/img/horoscopo/horoscopo-sagitario.jpg",
    descripcion: "Horóscopo de hoy: Tienes un don para la negociación hoy y suerte suficiente para tratar con gente que quiere alcanzar una solución propiciatoria."+

    "Amor: Entrarás en constantes discusiones con tu pareja por menesteres sin importancia. Procura evitar decir cosas que no sientes."+
    
    "Riqueza: Concéntrate en el trabajo bien hecho y nadie te podrá negar los resultados. Momento económico inseguro, no conviene arriesgar."+
    
    "Bienestar: No te aísles. Sal de la rutina y aviva esos deseos que están algo dormidos. Organiza una videollamada con amigos."
  },
  {
    nombre: "Capricornio",
    fecha: "22 diciembre - 20 enero",
    imagen:
      "https://rsc.lavanguardia.com/img/horoscopo/horoscopo-capricornio.jpg",
    descripcion: "Horóscopo de hoy: Te sentirás presionado por deseos contradictorios, no te dejes ganar por la vacilación. Hoy estás con la buena, aprovecha."+

    "Amor: Podrías estar totalmente dedicado a tomar una decisión importante en relación a tu vida. Noche especial para el amor."+
    
    "Riqueza: Utilizarás tus recientes fracasos como fuente de experiencia y motivación para encarar positivamente tus proyectos venideros."+
    
    "Bienestar: Vive el día de hoy con calma y sobre todo no pienses en el trabajo acumulado que te espera mañana. Aprovecha el día para relajarte."
  },
  {
    nombre: "Acuario",
    fecha: "21 enero - 19 febrero",
    imagen: "https://rsc.lavanguardia.com/img/horoscopo/horoscopo-acuario.jpg",
    descripcion: "Horóscopo de hoy: Tu ánimo oscilará entre las distintas tonalidades del gris. No juegues el personaje de jovial porque terminarás agotado. Amor: Período de crisis sentimental, pero estarás rodeado de personas que te quieren, no debes inquietarte para nada. <br/> Riqueza: Sin demasiados preámbulos, podrás adaptarte a nuevos entornos laborales, donde tomarás decisiones insólitas sobre la marcha. <br/> Bienestar: Aquellas cosas que no valoramos o damos por sentado son las que más extrañaremos cuando falten. No subestimes a los que te rodean.",





  },
  {
    nombre: "Piscis",
    fecha: "20 febrero - 20 marzo",
    imagen: "https://rsc.lavanguardia.com/img/horoscopo/horoscopo-piscis.jpg",
    descripcion: "Horóscopo de hoy: Afronta los hechos como son y disfruta íntegramente sin pensar en el mañana. Prudencia en tus relaciones pues domina la confusión."+

    "Amor: Tu frialdad no permite el acercamiento, sólo te relacionarás con personas de intereses intelectuales similares."+
    
    "Riqueza: Es momento de saber reivindicar activamente lo que te corresponde laboralmente. Hazlo de forma natural y sin irritarte."+
    
    "Bienestar: No te aísles emocionalmente de amigos y familiares cuando estés atravesando por momentos difíciles. Prueba con hacer reuniones virtuales."
  },
];

const POroscopos = (Horoscopo) => {
  //buscamos el signo por el nombre en el json Dataoroscopos y destructurarlo
  let horoscopo = Dataoroscopos.find(
    (signo) => signo.nombre === `${Horoscopo.Horoscopo}`
  );

  console.log(Horoscopo);
  console.log(horoscopo);
  if (horoscopo == null) {
    return (
      <>
        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">¡¡Cheque su horoscopo!!</h5>
            <p className="card-text">
              Ingrese su fecha de nacimieto para ver el horoscopo
            </p>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div class="container-fluid pt-3">
          <div class="row">
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-4">
                  
                </div>
                <div class="col-md-4">
                  <div class="card">
                    <h5 className="card-title">{horoscopo.nombre}</h5>
                    <img
                      class="card-img-top"
                      alt="Bootstrap Thumbnail Second"
                      src={horoscopo.imagen}
                    />
                    <div class="card-block">
                      <h6 className="card-subtitle mb-2 pt-3 text-muted">
                        {horoscopo.fecha}
                      </h6>
                      <p class="card-text">
                        <div class="container-fluid">
                          <div class="row">
                            <div class="col-md-12">
                              <a
                                id="modal-587766"
                                href="#modal-container-587766"
                                role="button"
                                class="btn btn-primary"
                                data-toggle="modal"
                              >
                                Ver Horoscopo
                              </a>

                              <div
                                class="modal fade "
                                id="modal-container-587766"
                                role="dialog"
                                aria-labelledby="myModalLabel"
                                aria-hidden="true"
                              >
                                <div class="modal-dialog modal-lg" role="document">
                                  <div class="modal-content">
                                    <div class="modal-header bg-dark text-white">
                                      <h5 class="modal-title" id="myModalLabel">
                                        {horoscopo.nombre}
                                      </h5>
                                      <button
                                        type="button"
                                        class="close"
                                        data-dismiss="modal"
                                      >
                                        <span aria-hidden="true" className="text-danger">×</span>
                                      </button>
                                    </div>
                                    <div class="modal-body"><p class="lead">
                                        
                    
                                        {horoscopo.descripcion}</p></div>
                                    <div class="modal-footer">
                                      <button
                                        type="button"
                                        class="btn btn-danger btn-block "
                                        data-dismiss="modal"
                                      >
                                        Close
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

POroscopos.propTypes = {
  Horoscopo: PropTypes.string,
};

export default POroscopos;
