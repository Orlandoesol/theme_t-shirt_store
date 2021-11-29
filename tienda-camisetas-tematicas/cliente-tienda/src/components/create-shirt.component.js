import React, { Fragment, Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
// import { NavLink } from 'react-router-dom';



export default class CreateShirt extends Component {

    
    state = {
        nombre: '',
        descripcion: '',
        color: '',
        precio: '',
        stock: '',
        imgUrl: null
    }


    handleImgUrl = (e) => {
        this.setState({
            imgUrl: e.target.files[0]
        })
    }

    handleNombre = (e) => {
        this.setState({
            nombre: e.target
        })
    }

    handleDescripcion = (e) => {
        this.setState({
            descripcion: e.target
        })
    }

    handleColor = (e) => {
        this.setState({
            color: e.target
        })
    }

    handlePrecio = (e) => {
        this.setState({
            precio: e.target
        })
    }

    handleStock = (e) => {
        this.setState({
            stock: e.target
        })
    }



    handleSubmit = (e) => {
        e.preventDefault();
        console.log('posted ', this.state.imgUrl);
        let formData = new FormData();
        formData.append('imgUrl', this.state.imgUrl)
        formData.append('nombre', this.state.nombre.value)
        formData.append('descripcion', this.state.descripcion.value)
        formData.append('color', this.state.color.value)
        formData.append('precio', this.state.precio.value)
        formData.append('stock', this.state.stock.value)

        const secretKey = localStorage.getItem('key');
        debugger;
        let url = 'http://localhost:3001/api/nueva-camiseta';
        axios.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `token ${secretKey}`
            }
        })
        .then(resp => {
            console.log(resp.status);
        });
    }


    state = {
        camisetas: [],
        status: false
    }
    

    cargarCamisetas = () => {
        axios.get(`http://localhost:3001/api/camisetas`)
            .then(res => {
                this.setState({
                    camisetas: res.data,
                    status: true
                });
            })
    }


    componentDidMount() {
        this.cargarCamisetas();
    }

    
    state = {        
        status: false
    };

    eliminarCamisetas = (idCamiseta, e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('id', idCamiseta);
        


        const secretKey = localStorage.getItem('key');
        let url = 'http://localhost:3001/api/deletecamiseta';
        axios.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `token ${secretKey}`
            }
        })
        .then(resp => {
            debugger;
            const newListCamisetas = this.state.camisetas.filter((el) => el._id !== resp.data._id);
            this.setState({camisetas: newListCamisetas});            
        });

    }


    render() {
        return(
            <Fragment>
                <h1>Registrar camisetas</h1>

                <div className="form-wrapper">
                    <Form>
                        <Form.Group>
                            <Form.Label>Nombre</Form.Label>
                            <input name='nombre' placeholder='Nombre' className="form-control" onChange={e => this.handleNombre(e)}></input>
                            
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Descripción</Form.Label>
                            <input name='descripcion' placeholder='Descripción' className="form-control" onChange={e => this.handleDescripcion(e)}></input>
                        </Form.Group>

                        <Form.Group>
                        <Form.Label>Color</Form.Label>
                            <input name='color' placeholder='Color' className="form-control" onChange={e => this.handleColor(e)}></input>
                        </Form.Group>

                        <Form.Group>
                        <Form.Label>Precio</Form.Label>
                            <input name='precio' type="number" placeholder='Precio' className="form-control" onChange={e => this.handlePrecio(e)}></input>
                        </Form.Group>

                        <Form.Group>
                        <Form.Label>Stock</Form.Label>
                            <input name='stock' type="number" placeholder='Stock' className="form-control" onChange={e => this.handleStock(e)}></input>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Imagen</Form.Label>
                            <input name='imgUrl' type="file" className="form-control" onChange={e => this.handleImgUrl(e)}/>
                        </Form.Group>

                        <Form.Group>
                            <Button variant="danger" size="lg" block="block" type="submit" onClick={e => this.handleSubmit(e)}>Enviar</Button>
                        </Form.Group>

                        

                    </Form>
                </div>

                <table className='table table-info'>
                    <thead className='thead-dark'>
                        <tr>
                            {/* <th>Id Camisetas</th> */}
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Color</th>
                            <th>Precio</th>
                            <th>Stock</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.status === true &&
                        (
                            this.state.camisetas.map((cami, i) => {
                                return(
                                    <tr key={i}>
                                        {/* <td>{cami._id}</td> */}
                                        <td>{cami.nombre}</td>
                                        <td>{cami.descripcion}</td>
                                        <td>{cami.color}</td>
                                        <td>{cami.precio}</td>
                                        <td>{cami.stock}</td>
                                        <td>
                                            <button onClick={(e)=> this.eliminarCamisetas(cami._id, e)} className="btn btn-light">Eliminar</button>
                                        </td>
                                    </tr>
                                );
                            })
                        )}

                    </tbody>

                </table>


            </Fragment>
        )
    }
}
