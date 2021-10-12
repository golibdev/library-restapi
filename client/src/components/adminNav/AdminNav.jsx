import { Link } from 'react-router-dom'
import './adminNav.css'

const AdminNav = () => {
    return (
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <Link className="navbar-brand ps-3" to="/useradmin/panel">Kutubxona</Link>
            <button className="btn toogle-btn" id="sidebarToggle">
                <i className="fas fa-bars"></i>
            </button>
            <div className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fas fa-user fa-fw">
                            </i>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <li>
                                <Link className="dropdown-item" to="/admin/auth/logout">Logout</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            
        </nav>
    )
}

export default AdminNav
