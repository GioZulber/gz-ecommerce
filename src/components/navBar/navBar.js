import React, { useState } from "react";
import logo from "../../images/logo-final.png";
import { Menu } from "../menu/menu";
import { CartWidget } from "../cartWidget/cartWidget";

export const NavBar = () => {

    const [open, setOpen] = useState(false)
    const toggleOpen = () => {
		return setOpen(!open)
	}

	return (
		<nav>		
				<div className='logo'>
					<img src={logo} alt='logo' />
				</div>

				<Menu className={open ? "dos" : "uno" }/>

				<CartWidget />

				<div className='icono' id='icono'>
					{<span onClick={toggleOpen}> &#9776;</span>}
				</div>
	
		</nav>
	)
    
    
};