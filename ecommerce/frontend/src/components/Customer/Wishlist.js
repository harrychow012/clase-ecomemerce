import logo from "../../logo.svg"
import { Link } from "react-router-dom"
import SideBar from "./SideBar"
function WishList(props) {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-3 col-12 mb-2">

                    <SideBar />
                </div>
                <div className="col-md-9 col-12 mb-2">
                    <div className="row">
                        <div className="table responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Producto</th>
                                        <th>Precio</th>
                                        <th>Acción</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            <Link><img src={logo} className="img-thumbnail" width='80' alt="..." /></Link>
                                            <p><Link>Django</Link></p>
                                        </td>
                                        <td>c$500.00</td>
                                        <td><button className="btn btn-danger btn-sm">Eliminar</button></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>
                                            <Link><img src={logo} className="img-thumbnail" width='80' alt="..." /></Link>
                                            <p><Link>Nest</Link></p>
                                        </td>
                                        <td>c$500.00</td>
                                        <td><button className="btn btn-danger btn-sm">Eliminar</button></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>
                                            <Link><img src={logo} className="img-thumbnail" width='80' alt="..." /></Link>
                                            <p><Link>Flask</Link></p>
                                        </td>
                                        <td>c$500.00</td>
                                        <td><button className="btn btn-danger btn-sm">Eliminar</button></td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>
                                            <Link><img src={logo} className="img-thumbnail" width='80' alt="..." /></Link>
                                            <p><Link>ReactJs</Link></p>
                                        </td>
                                        <td>c$500.00</td>
                                        <td><button className="btn btn-danger btn-sm">Eliminar</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WishList