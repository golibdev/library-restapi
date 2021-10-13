import { useLocation, Link, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from "axios"
import './bookDetails.css'
import Navbar from '../../components/Navbar/Navbar'

const BookDetails = () => {
    const history = useHistory()
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }

    const query = useQuery()
    const name = query.get("id")

    const [getBook, setGetBook] = useState({})

    const orderHandler = async (e) => {
        e.preventDefault()
        try {
            await axios.post(`http://localhost:4000/api/v1/orders/${name}`)
            history.push(`/bookDetails/?id=${name}`)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        const getOneBook = async () => {
            const res = await axios.get(`http://localhost:4000/api/v1/book/${name}`)
            setGetBook(res.data.book)
        }
        getOneBook()

    }, [name])

    return (
        <>
            <Navbar/>
            <div className="container mt-4 mb-4">
                <div className="row">
                    <div className="col-12">
                        <nav aria-label="breadcrumb mt-3">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/">Bosh sahifa</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Kitob haqida ma'lumot</li>
                            </ol>
                        </nav>
                        <h1 className="mb-3">Kitob haqida ma'lumot</h1>
                        <Link to="/" className="btn btn-success mb-4">
                            <i className="fas fa-long-arrow-alt-left"></i> Ortga qaytish
                        </Link>
                        <div className="card pt-3">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-striped border">
                                        <tr>
                                            <th style={{width: "350px"}} className="border p-3">ID</th>
                                            <td className="border p-3">{getBook._id}</td>
                                        </tr>
                                        <tr>
                                            <th style={{width: "350px"}} className="border p-3">Nomi</th>
                                            <td className="border p-3">{getBook.title}</td>
                                        </tr>
                                        <tr>
                                            <th style={{width: "350px"}} className="border p-3">Muallif</th>
                                            <td className="border p-3">{getBook.author}</td>
                                        </tr>
                                        <tr>
                                            <th style={{width: "350px"}} className="border p-3">Yili</th>
                                            <td className="border p-3">{getBook.year}</td>
                                        </tr>
                                        <tr>
                                            <th style={{width: "350px"}} className="border p-3">Nusxasi</th>
                                            <td className="border p-3">{getBook.count}</td>
                                        </tr>
                                        <tr>
                                            <th style={{width: "350px"}} className="border p-3">Kategoriyasi</th>
                                            <td className="border p-3">{getBook.category}</td>
                                        </tr>
                                        <tr>
                                            <th style={{width: "350px"}} className="border p-3">Seria raqami</th>
                                            <td className="border p-3">{getBook.seriaNumber}</td>
                                        </tr>
                                        <tr>
                                            <th style={{width: "350px"}} className="border p-3">Buyurtma qilish</th>
                                            <td className="border p-3">
                                                <form onSubmit={orderHandler}>
                                                    <button className="btn btn-success" type="submit">
                                                        Buyurtma qilish
                                                    </button>
                                                </form>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookDetails
