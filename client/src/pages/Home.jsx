import { useState, useEffect } from 'react'
import './home.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

const Home = () => {
    const [getBooks, setGetBooks] = useState([])

    useEffect(() => {
        const getBooks = async () => {
            const res = await axios.get(`http://localhost:4000/api/v1/books`)
            setGetBooks(res.data.books)
        }

        getBooks()
    }, [])

    return (
        <>
            <Navbar/>
            <div className="container mt-5 mb-5">
                <div className="card">
                    <div className="card-header bg-white">
                        <h3 style={{ fontWeight: "600" }}>Fondagi mavjud kitoblar</h3>
                    </div>
                    <div className="card-body mt-3">
                        <div className="table-responsive ">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th className="border">Kategoriya</th>
                                        <th className="border">Kitob nomi</th>
                                        <th className="border">Muallifi</th>
                                        <th className="border"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <form action="/" method="GET">
                                            <td className="border">
                                                <select className="form-select" name="category" id="category">
                                                    <option value=""></option>
                                                    <option value="Tabiiy fanlar">Tabiiy fanlar</option>
                                                    <option value="Texnika">Texnika</option>
                                                    <option value="Qishloq xo'jaligi">Qishloq xo'jaligi</option>
                                                    <option value="Sog'liqni saqlash">Sog'liqni saqlash</option>
                                                    <option value="Umumiy va sohalararo bilimlar">Umumiy va sohalararo bilimlar</option>
                                                    <option value="Umuman tabiiy fanlar">Umuman tabiiy fanlar</option>
                                                    <option value="Fizika-Matematika">Fizika-Matematika</option>
                                                    <option value="Ximiya fanlari">Ximiya fanlari</option>
                                                    <option value="Yer haqidagi fanlar">Yer haqidagi fanlar</option>
                                                    <option value="Biologiya fanlari">Biologiya fanlari</option>
                                                    <option value="Ijtimoiy gumanitar fanlar">Ijtimoiy gumanitar fanlar</option>
                                                    <option value="Sotsiologiya">Sotsiologiya</option>
                                                    <option value="Statistika">Statistika</option>
                                                </select>
                                            </td>
                                            <td className="border">
                                                <input type="text" className="form-control" id="title" name="title" placeholder="Kitob nomi..."/>
                                            </td>
                                            <td className="border">
                                                <input type="author" className="form-control" id="author" name="author" placeholder="Muallifi.."/>
                                            </td>
                                            <td className="border">
                                                <button type="submit" className="btn btn-success">
                                                    <i className="fas fa-filter"></i>
                                                </button>
                                            </td>
                                        </form>
                                    </tr>
                                    {getBooks.map(book => (
                                        <tr>
                                        <td style={{width: "500px"}} className="border"> {book.category} </td>
                                        <td style={{width: "500px"}} className="border"> {book.title} </td>
                                        <td style={{width: "500px"}} className="border"> {book.author} </td>
                                        <td className="border text-center">
                                            <Link to={`/bookDetails/${book._id}`} className="btn btn-success">
                                                <i className="fas fa-eye text-white"></i>
                                            </Link>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
