import React, { Component } from "react";
import axios from 'axios';
import Card from 'react-bootstrap/Card';
// import IconButton from '@material-ui/core/IconButton';
import Button from 'react-bootstrap/Button';
// import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import classCamisetas from './camisetas.module.css';
import Logueo from './Logueo'
// import Form from 'react-bootstrap/Form';
// import classGeneral from '../sass/general.module.css';



export default class Camisetas extends Component {

    // state = {
    //     nombre: '',
    //     descripcion: '',
    //     color: '',
    //     precio: '',
    //     stock: '',
    //     imgUrl: null
    // }
    

    state = {
        camisetas: [],
        mostrar: "camisetas"
    }

    listarCamisetas = () => {
        axios.get("http://localhost:3001/api/camisetas")
          .then((res) => {
            console.log(res.data);
            this.camisetas = res.data.map(obj => {
                obj.imgUrl = "http://localhost:3001/" + obj.imgUrl;
                obj.verCarrito = false;
                obj.cantidadDeseada = 0;
                return obj
            });
            this.setState({
                camisetas: this.camisetas
            });
        })
        .catch((e) => {
        console.log(e.response);
        });
    }

    componentDidMount() {
        this.listarCamisetas();
    }

    clickBtnCarrito = (item, index, e) => {
        debugger;
        e.preventDefault();
        item.verCarrito = !item.verCarrito;
        if (item.cantidadDeseada === 0 || !item.verCarrito){
            item.cantidadDeseada = 1;
        }
        let listCamisetas = this.state.camisetas;
        listCamisetas[index] = item;
        this.setState({
            camisetas: this.state.camisetas
        });
    }

    changeUnidadesDeseadas = (item, index, e) => {
        debugger;
        e.preventDefault();
        item.unidadesDeseadas = e.target;
        let listCamisetas = this.state.camisetas;
        listCamisetas[index] = item;
        this.setState({
            camisetas: this.state.camisetas
        });



    }


    
    guardarUnidadesDeseadas = (item, e) => {
    //TODO
    console.log(item.cantidadDeseada);
    e.preventDefault();
    // debugger;
    this.axios.get("http://localhost:3001/api/nueva-camiseta-deseada")
    }




    render() {
        return (
            
            <div className="container">
                {this.state.mostrar === "logueo" ?
                    <div>
                        <div className={classCamisetas.botonCancelar}
                        onClick={(e)=> this.setState({mostrar: "camisetas"})}>
                                            <Button className={classCamisetas.seguirComprando} variant="danger">Cancelar</Button>
                                        </div>
                        <Logueo />
                    </div>
                :

                // this.state.mostrar === "logueo" ?
                //     <div>
                //         <div className={classCamisetas.botonCancelar}
                //         onClick={(e)=> this.setState({mostrar: "camisetas"})}>
                //                             <Button className={classCamisetas.seguirComprando} variant="danger">Cancelar</Button>
                //                         </div>
                //         <Logueo />
                //     </div>
                // :



                    <div >
                        <div className={[classCamisetas.bannerSecond, classCamisetas.banner].join(" ")}>
                            <div className={classCamisetas.bannerCover}>
                                <h1>&nbsp; &nbsp; &nbsp; CAMISETAS TEMATICAS</h1>
                            </div>
                        </div>

                        <hr />
                        <p className={classCamisetas.buttonsCenter}><h2>Camisetas estampadas</h2></p>
                        <hr />
                        
                        <div className={classCamisetas.botonIniciarSesion}>
                                            <Button className={classCamisetas.seguirComprando} variant="primary" onClick={(e)=> this.setState({mostrar: "logueo"})}>Iniciar sesión</Button>
                                        </div>


                        <div className="row">
                    
                            <div className="row">

                                {this.state.camisetas.map((cami, index) => (
                                    <div key={index} className={[classCamisetas.classCol4, "col-4"].join(" ")}>

                                        <div className={classCamisetas.iconShoppingCart}
                                            // aria-label="AddShoppingCartIcon"
                                            onClick={(e)=> this.clickBtnCarrito(cami, index, e)}
                                            >
                                            <ShoppingCartIcon/>
                                        </div>
                                        
                                        <Card img-alt="Card image" img-top>
                                            <img src={ cami.imgUrl } alt={cami.imgUrl} />

                                            {!cami.verCarrito?
                                                <div className={[classCamisetas.textLeft, classCamisetas.mt26px, classCamisetas.card].join(" ")}>
                                                    <div>
                                                        {cami.nombre}
                                                    </div>
                                                    <div>
                                                        <b>{'$' + cami.precio}</b>
                                                    </div>
                                                    <div>
                                                        {cami.stock}&nbsp;unidades disponibles
                                                    </div>
                                                    <div>
                                                        {cami.descripcion}
                                                    </div>
                                                </div>
                                            :

                                                <div className={classCamisetas.textLeft}>
                                                    <p>Por favor inicie sesión</p>
                                                    {/* <div className={classCamisetas.buttonsCenter}>

                                                        <Button className={classCamisetas.seguirComprando} variant="outline-dark">SEGUIR COMPRANDO</Button>&nbsp;

                                                        <Button className={classCamisetas.agregarCarrito} variant="outline-dark" onClick={(e)=> this.guardarUnidadesDeseadas(cami, e)}><AddShoppingCartIcon/></Button>
                                                    </div>
                                                    
                                                    <div>
                                                        {cami.nombre}
                                                    </div>


                                                    <div className="flex mt-11">



                                                        <div className={classCamisetas.mt11px}>
                                                            <label>
                                                                ${cami.precio}&nbsp; &nbsp;
                                                            </label>
                                                            <input name='unidadesDeseadas' type="number" max={cami.stock} min="1" onChange={(e)=> this.changeUnidadesDeseadas(cami, index, e)}></input>
                                                        </div>

                                                    </div> */}


                                                </div>
                                            
                                            }

                                        </Card>
                                    
                                    </div>

                                ))}




                    
                    
                            </div>
                    
                        </div>
                    </div>
                }

            </div>
            
        );
    }
}
