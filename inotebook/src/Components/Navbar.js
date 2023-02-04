import React,{useEffect} from 'react'
import { useLocation,Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
export default function Navbar() {
    let location = useLocation();
    useEffect(() => {
        // If we want to see console.log message empty filter in inspect element
        // console.log(location.pathname);
      }, [location]);
    return ( 
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                {/* bg-dark and navbar-dark are bootstrap classes for making navbar dark and light */}
                <div className="container-fluid">
                    <Link  className="navbar-brand" to="/Home">iNotebook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link  className={`nav-link ${location.pathname}==='/Home' ?'active':""`} aria-current="page" to="/Home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link  className={`nav-link ${location.pathname}==='/About'?'active':""`} to="/About">About</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link  className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Navigation
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link  className="dropdown-item" to="/">Action</Link></li>
                                    <li><Link  className="dropdown-item" to="/">Another action</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link  className="dropdown-item" to="/">Something else here</Link></li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}
