import React from 'react'
import CartWidget from './CartWidget'

function NavBar() {
    return (
        <div className='navBox'>
            <img className='navLogo' src='./logo.svg'/>
        <nav>
            <a className='anchor' href='#'>Inicio</a>
            <a className='anchor' href='#'>Hombres</a>
            <a className='anchor' href='#'>Mujeres</a>
            <CartWidget/>
        </nav>
        </div>
    )
}

export default NavBar