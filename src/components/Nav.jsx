import { useGSAP } from '@gsap/react'
import React from 'react'
import { Link } from 'react-router-dom'
import gsap from "gsap";


function Nav() {

    return (
        <div style={{ backgroundColor: "black" }}>
            <nav className="navbar navbar-expand-lg p-3">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className=" d-lg-flex justify-content-lg-center collapse navbar-collapse" id="navbarSupportedContent">
                    <div>
                        <ul style={{ fontFamily: "Bebas Neue , sans-serif", fontWeight: "400", fontStyle: "normal", fontSize: "30px" }} className="navbar-nav me-auto mb-2 mb-lg-0 gap-5">
                            <li className="nav-item m-0 p-0">
                                <Link className="nav-link text-light active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item  m-0 p-0">
                                <Link className="nav-link text-light" to="/skills">Skills</Link>
                            </li>
                            <li className="nav-item  m-0 p-0">
                                <Link className="nav-link text-light" to="/projects">Projects</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav
