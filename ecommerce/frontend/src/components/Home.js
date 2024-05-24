import logo from "../logo.svg";
import { Link } from "react-router-dom";
import SingleProduct from "./SingleProduct";

function Home() {
  const products = [
    {
      title: "Java",
      price: 500.0,
    },
    {
      title: "Python",
      price: 600.0,
    },
    {
      title: "CSS",
      price: 400.0,
    },
    {
      title: "React",
      price: 300.0,
    },
  ];
  return (
    <main className="mt-4">
      <div className="container">
        {/* latest product section */}
        <h3 className="mt-4">
          {" "}
          Ultimos Productos{" "}
          <Link to="/products" className="float-end btn btn-dark">
            {" "}
            Ver todos los productos{" "}
            <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        </h3>

        <div className="row mb-4">
          {products.map((product) => (
            <SingleProduct key={product.id} product={product} />
          ))}
        </div>

        {/* latest category section */}
        <h3 className="mt-4">
          categorias populares
          <a href="#" className="float-end btn btn-dark">
            Ver todos las categorias populares{" "}
            <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </h3>
        {/* end latest category section */}
        <div className="row mb-4">
          {/* product box */}
          <div className="col-12 col-md-3 mb-2">
            <div className="card">
              <img src={logo} class="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Nombre categoria</h4>
              </div>
              <div className="card-footer">Products downloads: 202555</div>
            </div>
          </div>
          {/* product box end */}

          {/* product box */}
          <div className="col-12 col-md-3 mb-2">
            <div className="card">
              <img src={logo} class="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Nombre categoria</h4>
              </div>
              <div className="card-footer">Products downloads: 202555</div>
            </div>
          </div>
          {/* product box end */}

          {/* product box */}
          <div className="col-12 col-md-3 mb-2">
            <div className="card">
              <img src={logo} class="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Nombre categoria</h4>
              </div>
              <div className="card-footer">Products downloads: 202555</div>
            </div>
          </div>
          {/* product box end */}

          {/* product box */}
          <div className="col-12 col-md-3 mb-2">
            <div className="card">
              <img src={logo} class="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Nombre categoria</h4>
              </div>
              <div className="card-footer">Products downloads: 202555</div>
            </div>
          </div>
          {/* product box end */}
        </div>
        {/* end product section */}

        {/* popular category section */}
        <h3 className="mt-4">
          productos populares
          <a href="#" className="float-end btn btn-dark">
            Ver todos los productos populares{" "}
            <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </h3>

        <div className="row mb-4">
          {/* product box */}
          <div className="col-12 col-md-3 mb-2">
            <div className="card">
              <img src={logo} class="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Nombre producto</h4>
                <h5 className="card-title text-muted">Precio: c$500.00</h5>
              </div>
              <div className="card-footer">
                <button
                  title="Agregar al carrito"
                  className="btn btn-success btn-sm"
                >
                  {" "}
                  <i className="fa-solid fa-cart-plus"></i>{" "}
                </button>
                <button
                  title="Agregar a la lista"
                  className="btn btn-danger btn-sm ms-1"
                >
                  {" "}
                  <i className="fa fa-heart"></i>{" "}
                </button>
              </div>
            </div>
          </div>
          {/* product box end */}

          {/* product box */}
          <div className="col-12 col-md-3 mb-2">
            <div className="card">
              <img src={logo} class="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Nombre producto</h4>
                <h5 className="card-title text-muted">Precio: c$500.00</h5>
                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a> */}
              </div>
              <div className="card-footer">
                <button
                  title="Agregar al carrito"
                  className="btn btn-success btn-sm"
                >
                  {" "}
                  <i className="fa-solid fa-cart-plus"></i>{" "}
                </button>
                <button
                  title="Agregar a la lista"
                  className="btn btn-danger btn-sm ms-1"
                >
                  {" "}
                  <i className="fa fa-heart"></i>{" "}
                </button>
              </div>
            </div>
          </div>
          {/* product box end */}

          {/* product box */}
          <div className="col-12 col-md-3 mb-2">
            <div className="card">
              <img src={logo} class="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Nombre producto</h4>
                <h5 className="card-title text-muted">Precio: c$500.00</h5>
                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a> */}
              </div>
              <div className="card-footer">
                <button
                  title="Agregar al carrito"
                  className="btn btn-success btn-sm"
                >
                  {" "}
                  <i className="fa-solid fa-cart-plus"></i>{" "}
                </button>
                <button
                  title="Agregar a la lista"
                  className="btn btn-danger btn-sm ms-1"
                >
                  {" "}
                  <i className="fa fa-heart"></i>{" "}
                </button>
              </div>
            </div>
          </div>
          {/* product box end */}

          {/* product box */}
          <div className="col-12 col-md-3 mb-2">
            <div className="card">
              <img src={logo} class="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Nombre producto</h4>
                <h5 className="card-title text-muted">Precio: c$500.00</h5>
                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a> */}
              </div>
              <div className="card-footer">
                <button
                  title="Agregar al carrito"
                  className="btn btn-success btn-sm"
                >
                  {" "}
                  <i className="fa-solid fa-cart-plus"></i>{" "}
                </button>
                <button
                  title="Agregar a la lista"
                  className="btn btn-danger btn-sm ms-1"
                >
                  {" "}
                  <i className="fa fa-heart"></i>{" "}
                </button>
              </div>
            </div>
          </div>
          {/* product box end */}
        </div>
        {/* end popular category section */}

        {/* latest vendors product section */}
        <h3 className="mt-4">
          Vendedores populares
          <a href="#" className="float-end btn btn-dark">
            Ver todos los vendedores populares{" "}
            <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </h3>

        <div className="row mb-4">
          {/* product box */}
          <div className="col-12 col-md-3 mb-2">
            <div className="card">
              <img src={logo} class="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Nombre vendedor</h4>
              </div>
              <div className="card-footer">
                <div className="card-footer">
                  categorias: <a href="#">python</a> , <a href="#">Django</a>
                </div>
              </div>
            </div>
          </div>
          {/* product box end */}

          {/* product box */}
          <div className="col-12 col-md-3 mb-2">
            <div className="card">
              <img src={logo} class="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Nombre vendedor</h4>
              </div>
              <div className="card-footer">
                categorias: <a href="#">python</a> , <a href="#">Django</a>
              </div>
            </div>
          </div>
          {/* product box end */}

          {/* product box */}
          <div className="col-12 col-md-3 mb-2">
            <div className="card">
              <img src={logo} class="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Nombre vendedor</h4>
              </div>
              <div className="card-footer">
                <div className="card-footer">
                  categorias: <a href="#">python</a> , <a href="#">Django</a>
                </div>
              </div>
            </div>
          </div>
          {/* product box end */}

          {/* product box */}
          <div className="col-12 col-md-3 mb-2">
            <div className="card">
              <img src={logo} class="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Nombre vendedor</h4>
              </div>
              <div className="card-footer">
                <div className="card-footer">
                  categorias: <a href="#">python</a> , <a href="#">Django</a>
                </div>
              </div>
            </div>
          </div>
          {/* product box end */}
        </div>
        {/* end product section */}
      </div>

      {/* Carusel */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide my-4 border bg-dark text-white p-5"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <figure className="text-center">
              <blockquote className="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star text-warning"></i>
                <cite title="Source Title"> Nombre Cliente</cite>
              </figcaption>
            </figure>
          </div>
          <div className="carousel-item">
            <figure className="text-center">
              <blockquote className="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star text-warning"></i>
                <cite title="Source Title"> Nombre Cliente</cite>
              </figcaption>
            </figure>
          </div>

          <div className="carousel-item">
            <figure className="text-center">
              <blockquote className="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star text-warning"></i>
                <cite title="Source Title"> Nombre Cliente</cite>
              </figcaption>
            </figure>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* EndRating and Reviews section  */}
    </main>
  );
}
export default Home;
