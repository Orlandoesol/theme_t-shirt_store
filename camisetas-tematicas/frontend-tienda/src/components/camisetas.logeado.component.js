import React, { Component } from "react";
import axios from 'axios';
import Card from 'react-bootstrap/Card';
// import IconButton from '@material-ui/core/IconButton';
import Button from 'react-bootstrap/Button';
// import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import classCamisetas from './camisetas.module.css';
import Logueo from './Logueo'
// import Carrito from './carrito.component'
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
        mostrar: "camisetas",
        pagoTotal : 0
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
        e.preventDefault();
        item.verCarrito = !item.verCarrito;
        if (item.cantidadDeseada === 0){
            item.cantidadDeseada = 1;
        }
        let listCamisetas = this.state.camisetas;
        listCamisetas[index] = item;
        this.setState({
            camisetas: listCamisetas
        });
    }

    changecantidadDeseada = (item, index, e) => {
        e.preventDefault();
        item.cantidadDeseada = e.target.value;
        let listCamisetas = this.state.camisetas;
        listCamisetas[index] = item;
        this.setState({
            camisetas: listCamisetas
        });



    }

    masCantidadDeseada = (item, index, e) => {
        e.preventDefault();
        item.cantidadDeseada = item.cantidadDeseada + 1;
        let listCamisetas = this.state.camisetas;
        listCamisetas[index] = item;
        let precioTotal = 0;
        listCamisetas.forEach((obj) => {
            if(obj.cantidadDeseada > 0){
                precioTotal = precioTotal + (obj.precio * obj.cantidadDeseada);
            }
        });

        this.setState({
            precioTotal : precioTotal,
            camisetas: listCamisetas
        });

    }

    menosCantidadDeseada = (item, index, e) => {
        e.preventDefault();
        item.cantidadDeseada = item.cantidadDeseada - 1;
        let listCamisetas = this.state.camisetas;
        listCamisetas[index] = item;
        let precioTotal = 0;
        listCamisetas.forEach((obj) => {
            if(obj.cantidadDeseada > 0){
                precioTotal = precioTotal + (obj.precio * obj.cantidadDeseada);
            }
        });

        this.setState({
            precioTotal : precioTotal,
            camisetas: listCamisetas
        });

        
    }

    
    guardarcantidadDeseada = (item, e) => {
    //TODO
    console.log(item.cantidadDeseada);
    e.preventDefault();

    this.axios.get("http://localhost:3001/api/nueva-camiseta-deseada")
    }

    mostrarCarritoCompras = (e) => {
        e.preventDefault();
        let precioTotal = 0;
        this.camisetas.forEach((obj) => {
            if(obj.cantidadDeseada > 0){
                precioTotal = precioTotal + (obj.precio * obj.cantidadDeseada);
            }
        });

        this.setState({
            precioTotal : precioTotal,
            mostrar: "carrito"
        });


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

                this.state.mostrar === "carrito" ?
                    <div className={classCamisetas.cardCarrito}>
                    
                        <div className="row">
                            <div className={classCamisetas.botonRegistrarCamiseta}
                            onClick={(e)=> this.setState({mostrar: "camisetas"})}>
                                                <Button className={classCamisetas.seguirComprando} variant="primary">Camisetas</Button>
                                            </div>
                                            {this.state.camisetas.map((cami, index) => (

                                                
                                                cami.cantidadDeseada > 0 ?
                                                    <div key={index} className={[classCamisetas.classCol4, "col-4"].join(" ")}>

                                                        {/* <div className={classCamisetas.iconShoppingCart}
                                                            // aria-label="AddShoppingCartIcon"
                                                            onClick={(e)=> this.clickBtnCarrito(cami, index, e)}
                                                            >
                                                            <ShoppingCartIcon/>
                                                        </div> */}
                                                        
                                                        <Card img-alt="Card image" img-top>
                                                            <img src={ cami.imgUrl } alt={cami.imgUrl} />



                                                                <div className={classCamisetas.cardIntro}>
                                                                    {/* <div className={classCamisetas.buttonsCenter}>

                                                                        <Button className={classCamisetas.seguirComprando} variant="outline-dark">SEGUIR COMPRANDO</Button>&nbsp;

                                                                        <Button className={classCamisetas.agregarCarrito} variant="outline-dark" onClick={(e)=> this.guardarcantidadDeseada(cami, e)}><AddShoppingCartIcon/></Button>
                                                                    </div> */}
                                                                    
                                                                    <div>
                                                                        {cami.nombre}
                                                                    </div>


                                                    <div className="flex mt-11">



                                                        <div className={classCamisetas.mt11px}>
                                                            <label>
                                                                ${cami.precio}&nbsp; &nbsp;
                                                            </label>
                                                        </div>
                                                        <div  className={[classCamisetas.flex, classCamisetas.unidadesDeseadas].join(" ")}>
                                                                        <label>
                                                                            Unidades deseadas:&nbsp; &nbsp;
                                                                        </label>
                                                                        <label className={classCamisetas.contentUnidadesDeseadas}>
                                                                            &nbsp; &nbsp; {cami.cantidadDeseada} &nbsp; &nbsp;
                                                                        </label>

                                                                        <div className={classCamisetas.contentBtnsMasMenos}>
                                                                            <div className={classCamisetas.contentBtnsMas} onClick={(e)=> this.masCantidadDeseada(cami, index, e)}>
                                                                                <div className={classCamisetas.btnMas}>
                                                                                    +
                                                                                </div>
                                                                            </div>
                                                                            <div className={classCamisetas.contentBtnsMenos} onClick={(e)=> this.menosCantidadDeseada(cami, index, e)}>
                                                                                <div className={classCamisetas.btnMenos}>
                                                                                    -
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                        </div>
                                                    </div>


                                                                </div>
                                                            
                                                            

                                                        </Card>
                                                    
                                                    </div>
                                                    :
                                                    ''
                                                        

                                                

                                            ))}
                                            <hr />
                                            <div>
                                                <h5>
                                                    <label>Precio total: &nbsp;</label>{this.state.precioTotal}
                                                </h5>
                                            </div> 

                            </div>
                            
                        </div>
                :



                    <div >
                        <div className={classCamisetas.botonRegistrarCamiseta}>
                            <Button className={classCamisetas.seguirComprando} variant="primary" onClick={(e)=> this.mostrarCarritoCompras(e)}><ShoppingCartIcon/>&nbsp; &nbsp; Carrito de compras</Button>
                        </div>

                        <div className={[classCamisetas.bannerSecond, classCamisetas.banner].join(" ")}>
                            <div className={classCamisetas.bannerCover}>
                                <h1>&nbsp; &nbsp; &nbsp; CAMISETAS TEMATICAS</h1>
                            </div>
                        </div>

                        <hr />
                        <p className={classCamisetas.buttonsCenter}><h2>Camisetas estampadas</h2></p>
                        <hr />
                        
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

                                                <div className={classCamisetas.cardIntro}>
                                                    {/* <div className={classCamisetas.buttonsCenter}>

                                                        <Button className={classCamisetas.seguirComprando} variant="outline-dark">SEGUIR COMPRANDO</Button>&nbsp;

                                                        <Button className={classCamisetas.agregarCarrito} variant="outline-dark" onClick={(e)=> this.guardarcantidadDeseada(cami, e)}><AddShoppingCartIcon/></Button>
                                                    </div> */}
                                                    
                                                    <div>
                                                        {cami.nombre}
                                                    </div>


                                                    <div className="flex mt-11">



                                                        <div className={classCamisetas.mt11px}>
                                                            <label>
                                                                ${cami.precio}&nbsp; &nbsp;
                                                            </label>
                                                        </div>
                                                        <div  className={[classCamisetas.flex, classCamisetas.unidadesDeseadas].join(" ")}>
                                                                        <label>
                                                                            Unidades deseadas:&nbsp; &nbsp;
                                                                        </label>
                                                                        <label className={classCamisetas.contentUnidadesDeseadas}>
                                                                            &nbsp; &nbsp; {cami.cantidadDeseada} &nbsp; &nbsp;
                                                                        </label>

                                                                        <div className={classCamisetas.contentBtnsMasMenos}>
                                                                            <div className={classCamisetas.contentBtnsMas} onClick={(e)=> this.masCantidadDeseada(cami, index, e)}>
                                                                                <div className={classCamisetas.btnMas}>
                                                                                    +
                                                                                </div>
                                                                            </div>
                                                                            <div className={classCamisetas.contentBtnsMenos} onClick={(e)=> this.menosCantidadDeseada(cami, index, e)}>
                                                                                <div className={classCamisetas.btnMenos}>
                                                                                    -
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                        </div>
                                                    </div>


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
