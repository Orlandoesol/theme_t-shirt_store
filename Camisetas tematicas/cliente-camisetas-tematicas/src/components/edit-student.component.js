import React, {Fragment, useState} from 'react';

const Formulario = () => {


    const [datos, setDatos] = useState({
        nombre: '',
        descripcion: '',
        color: '',
        usuarioId: '',
        precio: '',
        stock: '',
        imgUrl: ''
    })

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + datos.nombre + ' ' + datos.apellido)
    }

    return (
        <Fragment>
            <h1>Formulario</h1>
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="nombre"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="Descripción" className="form-control" onChange={handleInputChange} name="descripcion"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="Color" className="form-control" onChange={handleInputChange} name="color"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="Usuario" className="form-control" onChange={handleInputChange} name="usuarioId"></input>
                </div>
                <div className="col-md-3">
                    <input type="number" placeholder="Precio" className="form-control" onChange={handleInputChange} name="precio"></input>
                </div>
                <div className="col-md-3">
                    <input type="number" placeholder="Stock" className="form-control" onChange={handleInputChange} name="stock"></input>
                </div>
                <div className="col-md-3">
                    <input type="image" alt="Foto" src="./Foto-button.png" placeholder="Imagen" className="form-control" onChange={handleInputChange} name="imgUrl"></input>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
            <ul>
                <li>{datos.nombre}</li>
                <li>{datos.descripcion}</li>
                <li>{datos.color}</li>
                <li>{datos.usuarioId}</li>
                <li>{datos.precio}</li>
                <li>{datos.stock}</li>
                <li>{datos.imgUrl}</li>
            </ul>
        </Fragment>
    );
}
 
export default Formulario;