import SingleProduct from './SingleProduct';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
function CategoryProducts(props) {
    const baseUrl = "http://127.0.0.1:8000/api"
    const [products, setProducts] = useState([]);
    //paginacion
    const [totalResult, setTotalResult] = useState(0);
    const { category_slug, category_id } = useParams();

    useEffect(() => {
        fetchData(baseUrl + "/products/?category=" + category_id);
    }, [category_id]);

    function fetchData(baseurl) {
        fetch(baseurl)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.data)
                setTotalResult(data.count);
            });
    }

    function changeUrl(baseurl) {
        fetchData(baseurl);
    }

    var links = [];
    var limit = 1;
    var totalLinks = totalResult / limit;
    for (let i = 1; i <= totalLinks; i++) {
        links.push(
            <li className="page-item">
                <Link
                    onClick={() => changeUrl(baseUrl + `products/?category=${category_id}&page=${i}`)}
                    to={`/category/${category_slug}/${category_id}/?page=${i}`}
                    className="page-link"
                >
                    {i}
                </Link>
            </li>
        );
    }

    return (
        <section className="container mt-4">
            <h3 className="mb-4">< span className=" text-success"></span> Productos </h3>

            <div className="row mb-4">

                {products.map((product) =>
                    <SingleProduct product={product} />

                )}




            </div>

            {/* pagination */}
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    {links}
                </ul>
            </nav>

            {/* end pagiantion */}

        </section>
    )
}
export default CategoryProducts