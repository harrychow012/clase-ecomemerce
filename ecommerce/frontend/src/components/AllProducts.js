import SingleProduct from "./SingleProduct";
import { useState, useEffect } from "react";

function AllProduct(props) {
    const baseUrl = "http://127.0.0.1:8000/api";
    const [products, setProducts] = useState([]);
    const [totalResults, setTotalResults] = useState(0);

    useEffect(() => {
        fetchData(baseUrl + "/products");
    }, []);

    function fetchData(baseurl) {
        fetch(baseurl)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.data);
                setTotalResults(data.count);
            });
    }

    function changeUrl(baseUrl) {
        fetchData(baseUrl);
    }

    var links = [];
    var limit = 1;
    var totalLinks = totalResults / limit;
    for (let i = 1; i <= totalLinks; i++) {
        links.push(
            <li className="page-item" key={i}>
                <a className="page-link" href="#" onClick={() => changeUrl(baseUrl +  `/products?page=${i}`)}>{i}</a>
            </li>
        );
    }

    return (
        <section className="container mt-4">
            <h3 className="mb-4"><span className="text-success">Productos Disponibles</span></h3>

            <div className="row mb-4">
                {products.map((product) => (
                    <SingleProduct product={product} />
                ))}
            </div>

            {/* pagination */}
            <nav aria-label="Page navigation example">
                <ul className="pagination">{links}</ul>
            </nav>
            {/* end pagination */}
        </section>
    );
}

export default AllProduct;
