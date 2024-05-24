import { Link } from "react-router-dom";
import SideBar from "./SideBar";

function AddAdress() {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-3 col-12 mb-2">
                    <SideBar />
                </div>
                <div className="col-md-9 col-12 mb-2">
                    <div className="card">
                        <h4 className="card-header">Agregar Direccion</h4>
                        <form>
                            <div className="mb-3">
                                <label for='address' className="form-label">Direccion</label>
                                <textarea className="form-control" id="address"></textarea>
                                <br />
                                <button type="submit" className="btn btn-primary">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AddAdress;