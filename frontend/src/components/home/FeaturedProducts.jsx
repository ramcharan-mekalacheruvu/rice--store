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

            setProducts(response.data.results || []);

        }

        catch (error) {

            console.log(error);

            setProducts([]);

        }

        finally {

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

        <section className="featured-section container">

            <div className="section-header">

                <h2>

                    Featured Products

                </h2>

                <p>

                    Freshly selected premium quality rice

                </p>

            </div>

            <div className="row g-3">

                {

                    products.map(product => (

                        <div
                            className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6"
                            key={product.id}
                        >

                            <div className="featured-card">

                                {

                                    product.discount_price &&

                                    <span className="discount-badge">

                                        SALE

                                    </span>

                                }

                                <div className="featured-image">

                                    <img
                                        src={
                                            product.image ||
                                            "https://via.placeholder.com/400x300?text=Rice"
                                        }
                                        alt={product.name}
                                    />

                                </div>

                                <div className="featured-body">

                                    <h5>

                                        {product.name}

                                    </h5>

                                    <div className="price-wrapper">

                                        {

                                            product.discount_price ?

                                                <>

                                                    <span className="new-price">

                                                        ₹{product.discount_price}

                                                    </span>

                                                    <span className="old-price">

                                                        ₹{product.price}

                                                    </span>

                                                </>

                                                :

                                                <span className="new-price">

                                                    ₹{product.price}

                                                </span>

                                        }

                                    </div>

                                    <Link
                                        to={`/products/${product.slug}`}
                                        className="btn btn-success w-100"
                                    >

                                        View Details

                                    </Link>

                                </div>

                            </div>

                        </div>

                    ))

                }

            </div>

        </section>

    );

}