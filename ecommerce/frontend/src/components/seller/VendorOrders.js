import { Link } from "react-router-dom";
import logo from "../../logo.svg";

import SellerSideBar from "./SellerSideBar";

function VendorOrders(props) {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-3 col-12 mb-2">
                    <SellerSideBar />
                </div>
                <div className="col-md-9 col-12 mb-2">
                    <div className="row">
                        <div className="table-responsive">
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
                                            <Link>
                                                <img src={logo} className="img-thumbnail" width="80" alt="..." />
                                            </Link>
                                            <p>
                                                <Link>Django</Link>
                                            </p>
                                        </td>
                                        <td>$. 5000</td>
                                        <td>Pendiente</td>
                                        <td>
                                            <span className="text-success">
                                                <i className="fa fa-check-circle"></i> completado
                                            </span>
                                        </td>
                                        <td>
                                            <div className="dropdown">
                                                <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Cambiar Estado
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="#">Aprobado</a></li>
                                                    <li><a className="dropdown-item" href="#">Enviado</a></li>
                                                    <li><a className="dropdown-item" href="#">Completado</a></li>
                                                </ul>
                                            </div>
                                        </td>                                  
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>
                                            <Link>
                                                <img src={logo} className="img-thumbnail" width="80" alt="..." />
                                            </Link>
                                            <p>
                                                <Link>Django</Link>
                                            </p>
                                        </td>
                                        <td>$. 5000</td>
                                        <td>Pendiente</td>
                                        <td>
                                            <span className="text-success">
                                                <i className="fa fa-check-circle"></i> completado
                                            </span>
                                        </td>
                                        <td>
                                            <div className="dropdown">
                                                <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Cambiar Estado
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="#">Aprobado</a></li>
                                                    <li><a className="dropdown-item" href="#">Enviado</a></li>
                                                    <li><a className="dropdown-item" href="#">Completado</a></li>
                                                </ul>
                                            </div>
                                        </td>                                  
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VendorOrders;