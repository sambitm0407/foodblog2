import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="row">
                        <div className="col-md-3">
                            <Link className="navbar-brand" exact to="/">Logo</Link>
                        </div>
                        <div className="col-md-9"></div>
                        
                    </div>
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" exact to="/">Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" exact to="/about">About </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" exact to="/gallery">Gallery </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" exact to="/contact">Contact Us </Link>
                        </li>
                    </ul>
                    
                    </div>
                </nav>
            </div>   
        </>
    )
}
