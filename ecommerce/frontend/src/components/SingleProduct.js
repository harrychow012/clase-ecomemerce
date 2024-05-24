import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';


function SingleProduct(props) {
  return (
    <div className="col-12 col-md-3 mb-2">
      <div className="card">
        <Link to={`/product/${props.product.slug}/${props.product.id}`}>
          <img src={props.product.image} className="card-img-top" alt="..." />
        </Link>
        <div className="card-body">
          <h5 className="card-title"><Link to={`/product/${props.product.slug}/${props.product.id}`}>{props.product.title}</Link></h5>
          <h5 className="card-title text-muted">Precio: C$ {props.product.price}</h5>
          <div className="card-footer">
            <button
              title="Agregar al carrito"
              className="btn btn-success btn-sm"
            >
              <i className="fa-solid fa-cart-plus"></i>
            </button>
            <button
              title="Agregar a la lista"
              className="btn btn-danger btn-sm ms-1"
            >
              <i className="fa fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
