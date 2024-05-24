import SellerSideBar from "./SellerSideBar";

function AddProduct(){
    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-3 col-12 mb-2">
                    <SellerSideBar/>
                </div>
                <div className="col-md-9 col-12 mb-2">
                    <div className="card">
                        <h4 className="card-header">Agregar Producto</h4>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label for='category' className="form-label">
                                        Categoria del Producto
                                    </label>
                                    <select className="form-control">
                                    <option>python</option>
                                    <option>PHP</option>
                                    <option>ReactJs</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct;