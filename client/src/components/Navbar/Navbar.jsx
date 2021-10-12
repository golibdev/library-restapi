import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
            <div className="container">
                <Link className="navbar-brand text-uppercase" to="/">
                    Kutubxona
                </Link>
                <button className="navbar-toggler border" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className='fas fa-bars text-white'></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Bosh sahifa</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="#">Loyiha haqida</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="#">Bog'lanish</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <Link className="dropdown-item" to="/profile?user={{user.username}}">Profile</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/auth/logout">Chiqish</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/auth/signin">Kirish</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
