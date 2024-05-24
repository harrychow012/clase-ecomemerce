// import logo from '../../logo.svg';
// import { Link } from "react-router-dom";
import SellerSideBar from './SellerSideBar';

function Customer(props){
    return(
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <SellerSideBar/>
                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <div className='row'>
                        <div className='table-responsive'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nombre</th>
                                        <th>Email</th>
                                        <th>Mobil</th>
                                        <th>Acción</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Bryan Alvarado</td>
                                        <td>bryanalvarado@gmail.com</td>
                                        <td>89124672</td>
                                        <td>
                                            <button className='btn btn-primary btn-sm'>Ordenes</button>
                                            <button className='btn btn-danger btn-sm ms-1'>Eliminar de la lista</button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>2</td>
                                            <td>katia silva</td>
                                            <td>katiasilva09@gmail.com</td>
                                            <td>8888888</td>
                                            <td>
                                                <button className='btn btn-primary btn-sm'>Ordenes</button>
                                                <button className='btn btn-danger btn-sm ms-1'>Eliminar de la lista</button>

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
export default Customer;