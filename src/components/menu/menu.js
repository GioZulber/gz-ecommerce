import React from "react";

export const Menu = ({ className }) => {

    const defaultClass = "linksMenu "

    return (   
            <div className={defaultClass + className}>
                <a href='/#' className='active'>Inicio</a>
                <a href='/#'>Tienda</a>
                <a href='/#'>Contacto</a>
                <a href='/#'>Como comprar</a>
            </div>              
    )
};