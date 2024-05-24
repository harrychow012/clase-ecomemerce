

 import SellerSideBar from "./SellerSideBar";

function SellerDashboard(props) {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-3 col-12 mb-2">
                    <SellerSideBar/>
                </div>
                <div className="col-md-9 col-12 mb-2"> {/* Utilizamos col-md-8 para que ocupe el resto del ancho en dispositivos medianos y más grandes */}
                    <div className="row"> {/* Nueva fila para los elementos internos */}
                        <div className="col-md-4 mb-2">
                            <div className="card">
                                <div className="card-body text-center">
                                    <h4>Total de productos</h4>
                                    <h4><a href="#">123</a></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-2">
                            <div className="card">
                                <div className="card-body text-center">
                                    <h4>Total de ordenes</h4>
                                    <h4><a href="#">123</a></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-2">
                            <div className="card">
                                <div className="card-body text-center">
                                    <h4>Total de clientes</h4>
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

export default SellerDashboard;