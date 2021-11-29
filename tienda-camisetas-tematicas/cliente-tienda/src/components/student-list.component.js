// import React, { Component } from "react";

// export default class StudentList extends Component {
//     render() {
//         return (
//             <div>
//                 <p>Carrito de compras</p>
//             </div>
//         );
//     }
// }

// // import React, {Component} from "react";
// // import Form from 'react-bootstrap/Form'
// // import Button from 'react-bootstrap/Button';
// // import axios from 'axios';

// // export default class EditStudent extends Component {

// //     constructor(props) {
// //         super(props)

// //         // Setting up functions
// //         this.onChangeShirtNombre = this.onChangeShirtNombre.bind(this);
// //         this.onChangeShirtDescripcion = this.onChangeShirtDescripcion.bind(this);
// //         this.onChangeShirtColor = this.onChangeShirtColor.bind(this);
// //         this.onChangeShirtPrecio = this.onChangeShirtPrecio.bind(this);
// //         this.onChangeShirtStock = this.onChangeShirtStock.bind(this);
// //         this.onChangeShirtImgUrl = this.onChangeShirtImgUrl.bind(this);
// //         this.onSubmit = this.onSubmit.bind(this);
        
// //         // Setting up state
// //         this.state = {
// //             nombre: '',
// //             descripcion: '',
// //             color: '',
// //             precio: '',
// //             stock: '',
// //             imgUrl: ''
// //         }
// //     }
    
// //     onChangeShirtNombre(e) {
// //         this.setState({nombre: e.target.value})
// //     }
    
// //     onChangeShirtDescripcion(e) {    
// //         this.setState({descripcion: e.target.value})
// //     }
    
// //     onChangeShirtColor(e) {
// //         this.setState({color: e.target.value})
// //     }

// //     onChangeShirtPrecio(e) {
// //         this.setState({precio: e.target.value})
// //     }

// //     onChangeShirtStock(e) {
// //         this.setState({stock: e.target.value})
// //     }

// //     onChangeShirtImgUrl(e, file ) {
// //         this.setState({imgUrl: e.target.value})
// //     }
    
// //     async onSubmit(e) {
// //         e.preventDefault()
        
// //         // console.log(`Shirt successfully created!`);
// //         // console.log(`nombre: ${this.state.nombre}`);
// //         // console.log(`descripcion: ${this.state.descripcion}`);
// //         // console.log(`color: ${this.state.color}`);
// //         // console.log(`precio: ${this.state.precio}`);
// //         // console.log(`stock: ${this.state.stock}`);
// //         // console.log(`imUrl: ${this.state.imgUrl}`);


// //         const camisetaObject = {
// //             nombre: this.state.nombre,
// //             descripcion: this.state.descripcion,
// //             color: this.state.color,
// //             precio: this.state.precio,
// //             stock: this.state.stock,
// //             imgUrl: this.state.imgUrl
// //         };

        
// //         const resp = await axios.post('http://localhost:3001/api/nueva-camiseta', camisetaObject);
        
// //         console.log("la respuesta fue: "+ resp)
        
// //         this.setState({
// //             nombre: '',
// //             descripcion: '',
// //             color: '',
// //             precio: '',
// //             stock: '',
// //             imgUrl: ''
// //         });


// //     }


// //     render() {
// //         return (
// //             <div className="form-wrapper">

// //                 <Form onSubmit={this.onSubmit} id="formCamisetas">
// //                     <Form.Group controlId="nombre">
// //                         <Form.Label>Nombre</Form.Label>
// //                         <Form.Control type="text" value={this.state.nombre} onChange={this.onChangeShirtNombre}/>
// //                     </Form.Group>
                        
// //                     <Form.Group controlId="descripcion">
// //                         <Form.Label>Descripción</Form.Label>
// //                         <Form.Control type="text" value={this.state.descripcion} onChange={this.onChangeShirtDescripcion}/>
// //                     </Form.Group>
                    
// //                     <Form.Group controlId="color">
// //                         <Form.Label>Color</Form.Label>
// //                         <Form.Control type="text" value={this.state.color} onChange={this.onChangeShirtColor}/>
// //                     </Form.Group>
                    
// //                     <Form.Group controlId="precio">
// //                         <Form.Label>Precio</Form.Label>
// //                         <Form.Control type="number" value={this.state.precio} onChange={this.onChangeShirtPrecio}/>
// //                     </Form.Group>
                    
// //                     <Form.Group controlId="stock">
// //                         <Form.Label>Stock</Form.Label>
// //                         <Form.Control type="number" value={this.state.stock} onChange={this.onChangeShirtStock}/>
// //                     </Form.Group>

// //                     <Form.Group controlId="imgUrl">
// //                         <Form.Label>Imagen</Form.Label>
// //                         <Form.Control type="file" ref="input" onChange={this.onChangeShirtImgUrl}/>
// //                     </Form.Group>

// //                     <Button variant="danger" size="lg" block="block" type="submit">
// //                         Enviar
// //                     </Button>
// //                 </Form>
// //             </div>
// //         );
// //     }
// // }

import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
  );
}

