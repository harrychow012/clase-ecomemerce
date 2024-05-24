// import logo from "../logo.svg";
// import { Link } from "react-router-dom";

import SideBar from "./SideBar";

function Dashboard(props) {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-3 col-12 mb-2">
                    <SideBar/>
                </div>
                <div className="col-md-9 col-12 mb-2"> {/* Utilizamos col-md-8 para que ocupe el resto del ancho en dispositivos medianos y más grandes */}
                    <div className="row"> {/* Nueva fila para los elementos internos */}
                        <div className="col-md-4 mb-2">
                            <div className="card">
                                <div className="card-body text-center">
                                    <h4>Ordenes Totales</h4>
                                    <h4><a href="#">123</a></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-2">
                            <div className="card">
                                <div className="card-body text-center">
                                    <h4>Deseos Totales</h4>
                                    <h4><a href="#">123</a></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-2">
                            <div className="card">
                                <div className="card-body text-center">
                                    <h4>Direcciones</h4>
                                    <h4><a href="#">123</a></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;