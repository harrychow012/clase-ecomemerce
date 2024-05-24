import { Link } from "react-router-dom";

function SellerSideBar() {
    return (
        <div className="list-group">
            <Link to="/seller/dashboard" className="list-group-item list-group-item-action active">Panel de control</Link>
            <Link to="/seller/products" className="list-group-item list-group-item-action">Productos</Link>
            <Link to="/seller/add-product" className="list-group-item list-group-item-action">Agregar Producto</Link>
            <Link to="/seller/orders" className="list-group-item list-group-item-action">Ordenes</Link>
            <Link to="/seller/customers" className="list-group-item list-group-item-action">Clientes</Link>
            <Link to="/seller/reports" className="list-group-item list-group-item-action">Reportes</Link>
            <Link to="/seller/profile" className="list-group-item list-group-item-action">Perfil</Link>
            <Link to="/seller/change-password" className="list-group-item list-group-item-action">Change Password</Link>
            <Link to="#" className="list-group-item list-group-item-action text-danger">Salir</Link>
        </div>
    )
}
export default SellerSideBar