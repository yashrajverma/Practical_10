import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand m-2" to="/">Yashraj</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <NavLink className="m-2 text-decoration-none" activeClassName=" border-1 border-bottom  border-primary" exact to="/">Home <span activeClassName="sr-only"></span></NavLink>
                        </li>
                        <li activeClassName="nav-item">
                            <NavLink className="m-2 text-decoration-none" activeClassName=" border-1 border-bottom  border-primary" exact to="/about">About</NavLink>
                        </li>
                        <li activeClassName="nav-item">
                            <NavLink className="m-2 text-decoration-none" activeClassName=" border-1 border-bottom  border-primary" exact to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
