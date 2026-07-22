import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../../services/productService";
import "./FeaturedProducts.css"; 

export default function FeaturedProducts() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadProducts();
    }, []);

    async function loadProducts() {
        try {

            const response = await getProducts();

            console.log(response.data);

            setProducts(response.data.results || []);

        } catch (error) {

            console.log("Products Error:", error);

            setProducts([]);

        } finally {

            setLoading(false);

        }
    }

    if (loading) {
        return (
            <div className="text-center py-5">
                <div className="spinner-border text-success"></div>
            </div>
        );
    }

    return (
        <section className="container py-5">

            <h2 className="mb-4">
                Featured Products
            </h2>

            <div className="row">

                {products.map((product) => (

                    <div
                        className="col-lg-3 col-md-6 mb-4"
                        key={product.id}
                    >

                        <div className="card h-100 shadow-sm">

                            <img
                                src={
                                    product.image ||
                                    "https://via.placeholder.com/300x220?text=Rice"
                                }
                                className="card-img-top"
                                alt={product.name}
                            />

                            <div className="card-body">

                                <h5>{product.name}</h5>

                                <p className="text-success fw-bold">

                                    ₹{product.discount_price || product.price}

                                </p>

                                <Link
                                    to={`/products/${product.slug}`}
                                    className="btn btn-success w-100"
                                >
                                    View Details
                                </Link>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}