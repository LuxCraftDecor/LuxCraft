import React from 'react'
import NavLinks from './Navbar/NavLinks'

const Menubar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="btn-group" >
                    

                <ul className="md:flex hidden uppercase justify-center bg-black h-10 items-center ">
          
          <NavLinks />
        </ul>
                </div>
            </nav>
        </>
    )
}

export default Menubar
