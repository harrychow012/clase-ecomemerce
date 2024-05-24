import logo from "../../logo.svg"
import { Link } from "react-router-dom"
import SellerSideBar from "./SellerSideBar"
function SellerProducts(props) {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-3 col-12 mb-2">
                    <SellerSideBar />
                </div>
                <div className="col-md-9 col-12 mb-2">
                    <div className="row">
                        <div className="table responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <tr>
                                            <td colSpan='5' align="right">
                                                <Link to='/seller/add-product' className="btn btn-primary"><i className="fa fa-plus-circle">Agregar Producto</i>
                                                </Link>
                                            </td>
                                        </tr>
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
                                        <td>Nombre del producto</td>
                                        <td>c$.500</td>
                                        <td>publicado</td>
                                        <td>
                                            <a href="#" className="btn btn-info">ver</a>
                                            <a href="#" className="btn btn-primary">editar</a>
                                            <a href="#" className="btn btn-danger">Eliminar</a>
                                        </td>
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

export default SellerProducts