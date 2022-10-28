//import React, {useContext, useState} from 'react'
//import React, {useEffect, useRef, useState} from 'react'
import React, {useState, useEffect, useContext} from 'react'
import {productsData} from '../../Data/ProductsData'
import  CartContext from '../../Context/CartContext'
import Card from '../Card'
import styles from "./styles.module.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap'

var temp = productsData;

const tele = window.Telegram.WebApp; //conectar a telegram

function Products () {
  /* Traemos del context la funcion para agregar un producto */
  /*const { addItemToCart } = useContext(CartContext);*/

  /* Traemos del context la funcion para agregar un producto */
  const { products } = useContext(CartContext);

  console.log("chupamelooo",products);

  const [dropdown,setDropdown] = useState(false);

  useEffect(() => {              //conectar a telegram
    tele.ready();
  });

/*
  useEffect(() => {
    
    document.addEventListener('click',clickAfuera,true);
  
  }, []);

  const btnRef = useRef();

  const clickAfuera = (e) =>{
    //console.log(e);
    if(e.path[0] === btnRef.current){
      //!btnRef.current.contains(e.target)){
      console.log("click afuera");
    }else{
      console.log("click adentro");
    }
  }
  */
  
/*  useEffect(effect: () =>{

    const cerrarDropdown = e =>{
      if(e.path[0].tagname !== "button"){
        setDropdown(value:false);
      }
    };


    document.body.addEventListener('click',cerrarDropdown);

    return () => document.body.removeEventListener('click',cerrarDropdown);
  }, deps:[]);
*/
  //var temp = productsData;

  const abrirCerrarDropdown = () =>{
    setDropdown(!dropdown);
  }

  //var Aseo=0;

  /*const accionTodas =() =>{
    //alert("soy la accion 1");
    //Aseo = Aseo + 1;
    //console.log(Aseo)
    temp=productsData;     //cambia para mostrar todos los productos
    //console.log(temp)
    //console.log("aber:")
    //console.log(cartItems)
  }*/

  /*const accionAseo =() =>{
    //alert("soy la accion 1");
    //Aseo = Aseo + 1;
    //console.log(Aseo)
    temp=filteredAseo;     //cambia todos los productos por solo los de aseo
    //console.log(temp)
    //console.log("aber:")
    //console.log(cartItems)
  }*/

  // Find multiple objects that satisfy condition
  /*const filteredAseo = productsData.filter(obj => {
    return obj.category === 'Aseo';
  });*/

  return (
    <>

    <Dropdown /*ref={btnRef}*/ isOpen={dropdown} toggle={abrirCerrarDropdown}>
        <DropdownToggle caret className="botonDropdown">
          Categorias
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem /*onClick={()=>accionTodas()}*/> Todas </DropdownItem>
          <DropdownItem divider/>
          <DropdownItem /*onClick={()=>accionAseo()}*/> Aseo </DropdownItem>
          <DropdownItem divider/>
          <DropdownItem /*onClick={()=>accionComida()}*/> Comida </DropdownItem>
          <DropdownItem divider/>
          <DropdownItem> Hogar </DropdownItem>
        </DropdownMenu>
      </Dropdown>


    <div className={styles.cards__container}>
      {products.map((product,codigo)=>{
        return (
            <Card food={product} key={codigo} /*onAdd={onAdd} onRemove={onRemove}*/ />
          );
        /*<div key={i} className={styles.card}>
          <img src={product.img} alt={product.name} />
          <div>
            <p>
              {product.name} - ${product.price}
            </p>
          </div>
          <button onClick={()=> addItemToCart(product)}>Agregar al carrito</button>
        </div>*/
        })}
    </div>
    </>
  )
}

export default Products;