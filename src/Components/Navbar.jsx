import React from 'react'
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#b655fe' }} >
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand">
                        {/* <img src="images/logo.svg" height="28" alt="SHAIL DAVE" /> */}
                        <h1 className="navbar-brand App-link" style={{ color: '#feb101',fontWeight:'900' }}>SHAIL DAVE</h1>
                    </NavLink>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
                        <div className="navbar-nav ml-auto">
                            <NavLink exact to="/shaildave" className="nav-item nav-link" style={{ color: 'white' }}>Home</NavLink>
                            <NavLink exact to="/shaildave/about" className="nav-item nav-link" style={{ color: 'white' }}>About</NavLink>
                            <NavLink exact to="/shaildave/skills" className="nav-item nav-link" style={{ color: 'white' }}>Skills</NavLink>
                            <NavLink exact to="/shaildave/projects" className="nav-item nav-link" style={{ color: 'white' }}>Projects</NavLink>
                            <NavLink exact to="/shaildave/certificates" className="nav-item nav-link" style={{ color: 'white' }}>Certificates</NavLink>

                            {/* <a href="/" className="nav-item nav-link">Profile</a>
                            <a href="/" className="nav-item nav-link">Messages</a>
                            <a href="/" className="nav-item nav-link disabled" tabindex="-1">Reports</a> */}
                        </div>
                        <div className="navbar-nav ms-auto">
                            {/* <a href="/" className="nav-item nav-link">Login</a> */}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;