import { Link } from 'react-router-dom'
import logo from '../logo.svg'
function checkout(props){
    return(
        <div className='container mt-4'>
        <h3 className='mb-4'>Todos los articulos(4)</h3>
        <div className='row'>
            <div className='col-md-8 col-12'>
                <div className='table-responsive'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>producto</th>
                                <th>precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                    <Link><img src={logo} className='img-thumbnail' width='80' alt=".../"></img></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>
                                    <Link><img src={logo} className='img-thumbnail' width='80' alt=".../"></img></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>
                                    <Link><img src={logo} className='img-thumbnail' width='80' alt=".../"></img></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>
                                    <Link><img src={logo} className='img-thumbnail' width='80' alt=".../"></img></Link>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th></th>
                                <th>Total</th>
                                <th>C$. 3000.00</th>
                            </tr>
                            <tr>
                                <td colSpan='3' align='center'>
                                    <Link to='/categories' className='btn btn-success'>Continuar Comprando</Link>
                                    <Link className='btn btn-primary ms-1'>Proceder a Pagar</Link>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
     </div>
    )
}
export default checkout