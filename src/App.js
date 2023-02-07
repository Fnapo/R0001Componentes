import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <header className="d-flex align-items-center">
        <h1 className="text-center col-12 m-0">Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
      </header>
      <Testimonio
        imagenURL="Shawn.png"
        altImagen="Foto de Shawn"
        nombre={<><b>Shawn Wang</b> en Singapur</>}
        oficio={<>Ingeniero de Software en <b>Amazon</b></>}
        comentario={<>&quot;Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. <b>freeCodeCamp cambió mi vida</b>.&quot;</>} />
      <Testimonio
        imagenURL="Sarah.png"
        altImagen="Foto de Sarah"
        nombre={<><b>Sarah Chima</b> en Nigeria</>}
        oficio={<>Ingeniera de Software en <b>ChatDesk</b></>}
        comentario={<>&quot;<b>freeCodeCamp fue la puerta de entrada a mi carrera</b> como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.&quot;</>} />
      <Testimonio
        imagenURL="Emma.png"
        altImagen="Foto de Emma"
        nombre={<><b>Emma Bostian</b> en Suecia</>}
        oficio={<>Ingeniera de Software en <b>Spotify</b></>}
        comentario={<>&quot;Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en <b>freeCodeCamp me dio las habilidades</b> y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.&quot;</>} />
    </div >
  );
}

export default App;
