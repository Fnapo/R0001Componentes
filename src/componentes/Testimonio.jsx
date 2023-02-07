
import React, { FunctionComponent } from 'react';
//import ReactDOM from 'react-dom';
import '../estilos/Testimonio.css';

class TestimonioProps {
    imagenURL: string;
    altImagen: string;
    nombre: string;
    oficio: string;
    comentario: string;

    constructor(imagen: string, alt: string, nombre: string, oficio: string, comentario: string) {
        this.altImagen = alt;
        this.imagenURL = imagen;
        this.nombre = nombre;
        this.oficio = oficio;
        this.comentario = comentario;
    }
}

const Testimonio: FunctionComponent<TestimonioProps> = (props) => {
    return (
        <div className="container d-flex mb-3 flex-wrap shadow">
            <img src={require(`../imagenes/${props.imagenURL}`)} alt={props.altImagen} className="col-3 float-start" />
            <div className="col-9 float-end text-center d-flex justify-content-center align-items-center">
                <div>
                    <h5 className="nombre-testimonio">{props.nombre}</h5>
                    <h5 className="oficio-testimonino">{props.oficio}</h5>
                    <h6 className="comentario-testimonio texto-justificado ps-2">{props.comentario}</h6>
                </div>
            </div>
        </div>
    );
}

export default Testimonio;
