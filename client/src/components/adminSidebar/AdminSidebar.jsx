import { Link } from 'react-router-dom'

const AdminSidebar = () => {
    return (
        <>
            <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">Asosiy</div>
                            <Link className="nav-link" to="/admin">
                                <div className="sb-nav-link-icon">
                                    <i className="fas fa-home"></i> Bosh sahifa
                                </div>
                            </Link>
                            <Link className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div className="sb-nav-link-icon">
                                    <i className="fas fa-plus"></i> Qo'shish
                                </div>
                            </Link>
                            <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <Link className="nav-link" to="/admin/add/user">Talaba qo'shish</Link>
                                    <Link className="nav-link" to="/admin/add/book">Kitoblar qo'shish</Link>
                                </nav>
                            </div>
                            <div className="sb-sidenav-menu-heading">Umumiy</div>
                            <Link className="nav-link" to="/admin/books">
                                <div className="sb-nav-link-icon">
                                    <i className="fas fa-book"></i> Barcha kitoblar
                                </div>
                            </Link>
                            <Link className="nav-link" to="/admin/users">
                                <div className="sb-nav-link-icon">
                                    <i className="fas fa-user"></i> Barcha talabalar
                                </div>
                            </Link>
                            <Link className="nav-link" to="/admin/orders">
                                <div className="sb-nav-link-icon">
                                    <i className="fas fa-sort"></i> Buyurtmalar
                                </div>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default AdminSidebar
