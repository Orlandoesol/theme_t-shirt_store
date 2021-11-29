// import React from "react";
import React, {Fragment} from 'react';
import { useForm } from "react-hook-form";



export default function App() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
    console.log(data)
    e.target.reset()
    }
//   const onSubmit = data => console.log(data);

    return (
        <Fragment>
        <h2>Registro de camisetas</h2><br/>
        <form onSubmit={handleSubmit(onSubmit)}>

            <label htmlFor="nombre"><p>&nbsp; &nbsp;Nombre:&nbsp; &nbsp;</p></label>
            <input type="text" placeholder="Nombre del producto" id="nombre" {
                ...register('nombre', { required: true, maxLength: 10 })} />
            {errors.nombre && errors.nombre.type === "required" && <span>This is required</span>}
            {errors.nombre && errors.nombre.type === "maxLength" && <span>Max length exceeded</span> }

            <label htmlFor="descripcion"><p>&nbsp; &nbsp;Descripción:&nbsp; &nbsp;</p></label>
            <input type="text" placeholder="Describa el producto" id="descripcion" { 
                ...register('descripcion', { required: true, maxLength: 10 })} />
            {errors.descripcion && errors.descripcion.type === "required" && <span>This is required</span>}
            {errors.descripcion && errors.descripcion.type === "maxLength" && <span>Max length exceeded</span> }

            <label htmlFor="color"><p>&nbsp; &nbsp;Color:&nbsp; &nbsp;</p></label>
            <input type="text" placeholder="Color de la camiseta" id="color" { 
                ...register('color', { required: true, maxLength: 10 })} />
            {errors.color && errors.color.type === "required" && <span>This is required</span>}
            {errors.color && errors.color.type === "maxLength" && <span>Max length exceeded</span> }

            <label htmlFor="precio"><p>&nbsp; &nbsp;Precio:&nbsp; &nbsp;$&nbsp;</p></label>
            <input type="number" placeholder="Precio en pesos colombianos" id="precio" { 
                ...register('precio', { required: true, max: 10 })} />
            {errors.precio && errors.precio.type === "required" && <span>This is required</span>}
            {errors.precio && errors.precio.type === "max" && <span>Max length exceeded</span> }


            <label htmlFor="stock"><p>&nbsp; &nbsp;Stock:&nbsp; &nbsp;</p></label>
            <input type="number" placeholder="Productos disponibles" id="stock" { 
                ...register('stock', { required: true, max: 10 })} />
            {errors.stock && errors.stock.type === "required" && <span>This is required</span>}
            {errors.stock && errors.stock.type === "max" && <span>Max length exceeded</span> }

            {/* <label htmlFor="imgUrl"><p>&nbsp; &nbsp;Imagen:&nbsp; &nbsp;</p></label>
            <input type="image" alt="Foto del producto" src="./Foto-button.png" id="imgUrl" { 
                ...register('imgUrl', { required: true})} />
            {errors.imgUrl && errors.imgUrl.type === "required" && <span>This is required</span>} */}

            <input type="submit" value="Enviar datos"/>
        </form>
        </Fragment>

      

  );
}
