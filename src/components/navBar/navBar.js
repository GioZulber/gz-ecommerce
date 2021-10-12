import React from "react"
import logo from "../../images/logo-final.png"

export const NavBar = () => {
    //Al querer ejecutar la funcion desplegable(), dice que no puede capturar un evento a algo "null"
    //El null se lo da a botonResponsive y no se el por que. 

    // const botonResponsive = document.getElementById("icono");
    // const enlaces = document.getElementById("enlaces");
    // let contador = 0;    
    // botonResponsive.addEventListener('click', desplegable());
    // function desplegable () {
    //     console.log("funciona");
    //     if(contador == 0){
    //             enlaces.className = ("enlaces dos");
    //             contador++; 
    //     }else{
    //             enlaces.classList.remove("dos");
    //             enlaces.className = ("enlaces uno");
    //             contador = 0;
    //     }
    // }  
    return (
        <nav> 

            <div className="logo">
                <img src= {logo} alt="logo" />
            </div>

            <div className="icono" id="icono">
                {/* <span onClick={ () => desplegable()}> &#9776;</span> */}
                <span> &#9776;</span>
            </div>

            <div className="enlaces uno" id="enlaces">
                <a href="/#" className="active">Inicio</a>
                <a href="/#">Tienda</a>
                <a href="/#">Contacto</a>
                <a href="/#">Como comprar</a>
            </div>
        </nav>
    )
    
};