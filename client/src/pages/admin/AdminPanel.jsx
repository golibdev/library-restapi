import { useState, useEffect } from 'react'
import axios from 'axios'
import AdminNav from "../../components/adminNav/AdminNav"
import AdminSidebar from "../../components/adminSidebar/AdminSidebar"
import { Link } from 'react-router-dom'


const AdminPanel = () => {
    const [bookCount, setBookCount] = useState([])
    const [userCount, setUserCount] = useState([])

    useEffect(() => {
        const getBooks = async () => {
            const res = await axios.get('http://localhost:4000/api/v1/books')
            setBookCount(res.data.books)
        }
        getBooks()

        const getUser = async () => {
            const res = await axios.get('http://localhost:4000/api/v1/users')
            setUserCount(res.data.users)
        }

        getUser()
    }, [])

    return (
        <>
            <AdminNav/>
            <div id="layoutSidenav">
                <AdminSidebar/>
                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid px-4">
                            <h1 className="mt-4">Boshqaruv paneli</h1>
                            <ol className="breadcrumb mb-4">
                                <li className="breadcrumb-item active">Boshqaruv paneli</li>
                            </ol>
                            <div className="row">
                                <div className="col-xl-4 col-md-6">
                                    <div className="card bg-primary text-white mb-4">
                                            <div className="card-body">
                                                Jami kitoblar: <b className="mx-3">{bookCount.length} ta</b>
                                            </div>
                                        <div className="card-footer d-flex align-items-center justify-content-between">
                                            <Link className="small text-white stretched-link" to="/admin/books">Ma'lumotlarni ko'rish</Link>
                                            <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="card bg-warning text-white mb-4">
                                        <div className="card-body">Jami talabalar: <b className="mx-3">{userCount.length} ta</b></div>
                                        <div className="card-footer d-flex align-items-center justify-content-between">
                                            <Link className="small text-white stretched-link" to="/admin/users">Ma'lumotlarni ko'rish</Link>
                                            <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="card bg-danger text-white mb-4">
                                        <div className="card-body">Jami buyurtmalar: <b className="mx-3"> ta</b></div>
                                        <div className="card-footer d-flex align-items-center justify-content-between">
                                            <Link className="small text-white stretched-link" to="/admin/orders">Ma'lumotlarni ko'rish</Link>
                                            <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default AdminPanel
