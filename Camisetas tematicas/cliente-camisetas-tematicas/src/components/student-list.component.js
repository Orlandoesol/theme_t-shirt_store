// import React, { Component } from "react";

// export default class StudentList extends Component {
//     render() {
//         return (
//             <div>
//                 <p>React Student List Component!</p>
//             </div>
//         );
//     }
// }


import React, {Fragment} from 'react'
import { useForm } from 'react-hook-form';


const HookForm = () => {

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <Fragment>
            <h2>Registro</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Nombre:
                    <input
                        placeholder="Ingrese nombre del producto"
                        className="form-control mb-2"
                        {...register("usuario", {
                            // required: {
                            //     value: true, 
                            //     message: 'Nombre es requerido'
                            //     }, 
                            maxLength: {
                                value: 5, 
                                message: 'No más de 5 carácteres!'
                            //     },
                            // minLength: {
                            //     value: 2, 
                            //     message: 'Mínimo 2 carácteres'
                                }
                        })}
                    ></input>

                    <span className="text-danger text-small d-block mb-2">
                        {errors?.usuario?.message}
                    </span>
                </label>
 
                <span className="text-danger text-small d-block mb-2">
                    {errors?.usuario?.message}
                </span>
                
                {/* <input
                    placeholder="Ingrese nombre del producto"
                    className="form-control mb-2"
                    name="usuario"
                    {...register("usuario", {
                        required: {
                            value: true, 
                            message: 'Nombre es requerido'
                            }, 
                        maxLength: {
                            value: 5, 
                            message: 'No más de 5 carácteres!'
                            },
                        minLength: {
                            value: 2, 
                            message: 'Mínimo 2 carácteres'
                            }
                    })}
                ></input>
                <span className="text-danger text-small d-block mb-2">
                    {errors?.usuario?.message}
                </span> */}
                <button type="submit" className="btn btn-primary">
                    Enviar
                </button>
            </form>
            
        </Fragment>
    );
}
 
export default HookForm;

