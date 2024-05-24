import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
    const baseUrl = "http://127.0.0.1:8000/api";
    const [productData, setProductData] = useState([]);
    const [productImgs, setProductImgs] = useState([]);
    const [productTag, setProducTags] = useState([]);
    const {product_slug, product_id } = useParams();

    useEffect(() => {
        fetchData(baseUrl + "/product/" + product_id);
    }, []);

    function fetchData(baseurl) {
    fetch(baseurl)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            setProductData(data);
            setProductImgs(data.product_imgs);  
            setProducTags(data.tag_list);
        })
        .catch((error) => {
            console.error('There was a problem with the fetch operation:', error);
        });
}


    const tagsLinks = [];
    for (let i = 0; i < productTag.length; i++) {
        let tag = productTag[i].trim();
        tagsLinks.push(
            <Link className="badge bg-secundary text-dark me-1" to={`/products/${tag}`}>
                {tag}
            </Link>
            );
        }   
    console.log(productData.product_imgs);

    return (
        <section className="container mt-4">
            <h3 className="mb-4">Detalle del Producto</h3>
            <div className="row">
                <div className="col-4">
                    <div id="relatedThumbnailSlider" className="carousel slide bg- slide carousel-fade" data-bs-ride="true">
                        <div className="carousel-indicators">
                            {
                                productImgs.map((img, index) => {
                                    if (index === 0) {
                                            <button type="button" data-bs-target="#relatedThumbnailSlider" data-bs-slide-to={index} 
                                            className="active" aria-current="true" aria-label="Slide 1"></button>
                                        
                                    }
                                    else {
                                        return <button type="button" data-bs-target="#relatedThumbnailSlider" data-bs-slide-to={index} 
                                        className="active" aria-current="true" aria-label="Slide 1"></button>
                             
                                    }
                                })
                            } 
                           

                            {/* <button type="button" data-bs-target="#relatedThumbnailSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#relatedThumbnailSlider" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
                        </div>
                        <div className="carousel-inner">

                            {
                                productImgs.map((img, index) => {
                                    if (index === 0) {
                                        return (
                                            <div className="carousel-item active">
                                                <img src={img.image} className="img-thumbnail mb-5" alt={index} />
                                            </div>
                                        );
                                    }
                                    else {
                                        return (
                                            <div className="carousel-item">
                                                <img src={img.image} className="img-thumbnail mb-5" alt={index} />
                                            </div>
                                        );
                                    }
                                })
                            }
                            {/* <div className="carousel-item active">
                                <img src={logo} className="img-thumbnail" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={logo} className="img-thumbnail" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={logo} className="img-thumbnail" alt="..." />
                            </div> */}
                        </div>
                        {/* <button className="carousel-control-prev" type="button" data-bs-target="#relatedThumbnailSlider" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#relatedThumbnailSlider" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button> */}
                    </div>
                </div>
                <div className="col-8">
                    <h3>{productData.title}</h3>
                    <p>{productData.detail}</p>
                    <h5 className="card-title">Precio: {productData.price}</h5>
                    <p className="mt-3">
                        <Link title="Demo" target="_blank" className="btn btn-dark">
                            <i className="fa-solid fa-cart-plus"></i> Demo
                        </Link>
                        <button title="Agregar al carrito" className="btn btn-primary ms-1">
                            <i className="fa-solid fa-cart-plus"></i> Agregar al carrito
                        </button>
                        <button title="Comprar ahora" className="btn btn-success ms-1">
                            <i className="fa-solid fa-cart-plus"></i> Comprar ahora
                        </button>
                        <button title="Agregar a la lista" className="btn btn-danger ms-1">
                            <i className="fa-solid fa-cart-plus"></i> Agregar a la lista
                        </button>
                    </p>
                    <div className='producttag mt-4'>
                            <h5>Tags</h5>
                            <p>
                                {tagsLinks}
                            </p>
                        </div>
                    </div>
                </div>

                {/*Productos Relacionados Carrusel*/}
                    <h3 className='mt-5 mb-3'>Productos Relacionados</h3>
                    <div id="relatedProductSlider" className="carousel carousel-dark slide" data-bs-ride="true">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#relatedProductSlider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#relatedProductSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#relatedProductSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>

                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className='row mb-5'>
                                    {/* <SingleProduct title = "Django Project 1"/>
                                    <SingleProduct title = "Django Project 2"/>
                                    <SingleProduct title = "Django Project 3"/>
                                    <SingleProduct title = "Django Project 4"/> */}
                                </div>
                            </div>  
                            <div className="carousel-item">
                                <div className='row mb-5'>
                                    {/* <SingleProduct title = "Django Project 1"/>
                                    <SingleProduct title = "Django Project 2"/>
                                    <SingleProduct title = "Django Project 3"/>
                                    <SingleProduct title = "Django Project 4"/> */}
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className='row mb-5'>
                                    {/* <SingleProduct title = "Django Project 1"/>
                                    <SingleProduct title = "Django Project 2"/>
                                    <SingleProduct title = "Django Project 3"/>
                                    <SingleProduct title = "Django Project 4"/> */}
                                </div>
                            </div>
                        </div>


                        {/* <button className="carousel-control-prev" type="button" data-bs-target="#relatedProductSlider" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#relatedProductSlider" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button> */}
                    </div>
                {/*Fin Carrusel Productos Relacionados*/}
        </section>
    );
}


export default ProductDetail;
