import { Link } from "react-router-dom";
import logo from '../../logo.svg';
import SideBar from "./SideBar";

function AddresList() {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-3 col-12 mb-2">
                    <SideBar />
                </div>
                <div className="col-md-9 col-12 mb-2">
                    <div className="row">
                        <div className="col-12">
                            <Link
                                to="/Customer/add-address"
                                className="btn btn-outline-success mb-4 float-end">
                                <i className="fa fa-plus-circle"></i> Agregar Direccion
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 mb4">
                            <div className="card shadow">
                                <div className="card-body text muted">
                                    <h6>
                                        <i className="fa fa-check-circle text-success mb-2"></i>
                                        <br />
                                        Nueva Guinea, ZC, Hotel Aguilar 1C Sur, 100mts Oeste
                                    </h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-4 mb4">
                            <div className="card">
                                <div className="card-body text muted">
                                    <h6>
                                        <span className="badge bg-secondary mb-2">Mark default
                                        </span>
                                        <br />
                                        Nueva Guinea, ZC, Hotel Aguilar 1C Sur, 100mts Oeste
                                    </h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-4 mb4">
                            <div className="card">
                                <div className="card-body text muted">
                                    <h6>
                                        <span className="badge bg-secondary mb-2">Mark default
                                        </span>
                                        <br />
                                        Nueva Guinea, ZC, Hotel Aguilar 1C Sur, 100mts Oeste
                                    </h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-4 mb4">
                            <div className="card">
                                <div className="card-body text muted">
                                    <h6>
                                        <span className="badge bg-secondary mb-2">Mark default
                                        </span>
                                        <br />
                                        Nueva Guinea, ZC, Hotel Aguilar 1C Sur, 100mts Oeste
                                    </h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-4 mb4">
                            <div className="card">
                                <div className="card-body text muted">
                                    <h6>
                                        <span className="badge bg-secondary mb-2">Mark default
                                        </span>
                                        <br />
                                        Nueva Guinea, ZC, Hotel Aguilar 1C Sur, 100mts Oeste
                                    </h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-4 mb4">
                            <div className="card">
                                <div className="card-body text muted">
                                    <h6>
                                        <span className="badge bg-secondary mb-2">Mark default
                                        </span>
                                        <br />
                                        Nueva Guinea, ZC, Hotel Aguilar 1C Sur, 100mts Oeste
                                    </h6>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>
            </div>
        </div>
    );
}
export default AddresList;