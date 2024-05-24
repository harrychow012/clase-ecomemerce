import logo from "../../logo.svg"
import { Link } from "react-router-dom"
import SideBar from "./SideBar"
function Orders(props) {
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
                                        <th>Estado</th>
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
                                        <td><span className="text-success"><i className="fa fa-check-circle"></i>Completado</span></td>
                                        <td><button className="btn btn-primary btn-sm">Descargas</button></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>
                                            <Link><img src={logo} className="img-thumbnail" width='80' alt="..." /></Link>
                                            <p><Link>Nest</Link></p>
                                        </td>
                                        <td>c$500.00</td>
                                        <td><span className="text-success"><i className="fa fa-check-circle"></i>Completado</span></td>
                                        <td><button className="btn btn-primary btn-sm">Descargas</button></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>
                                            <Link><img src={logo} className="img-thumbnail" width='80' alt="..." /></Link>
                                            <p><Link>Flask</Link></p>
                                        </td>
                                        <td>c$500.00</td>
                                        <td><span className="text-warning"><i className="fa fa-spin fa-spinner"></i> procesando</span></td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>
                                            <Link><img src={logo} className="img-thumbnail" width='80' alt="..." /></Link>
                                            <p><Link>ReactJs</Link></p>
                                        </td>
                                        <td>c$500.00</td>
                                        <td><span className="text-danger"><i className="fa fa-times-circle"></i>cancelado</span></td>
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

export default Orders