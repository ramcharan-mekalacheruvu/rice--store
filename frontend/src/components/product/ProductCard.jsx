import "./ProductCard.css";
import { Link } from "react-router-dom";
import { addToCart } from "../../services/cartService";

export default function ProductCard({ product }) {

    async function handleAddToCart() {

        try {

            await addToCart(product.id, 1);

            alert("Product added to cart successfully.");

        }

        catch (error) {

            console.log(error);

            alert("Unable to add product.");

        }

    }

    return (

        <div className="card product-card h-100">

            <img
                src={product.image}
                alt={product.name}
                className="card-img-top"
            />

            <div className="card-body">

                <h5>{product.name}</h5>

                <p className="product-category">
                    {product.category_name}
                </p>

                <div className="price-section">

                    {
                        product.discount_price ?

                        <>
                            <span className="discount-price">
                                ₹{product.discount_price}
                            </span>

                            <span className="old-price">
                                ₹{product.price}
                            </span>
                        </>

                        :

                        <span className="discount-price">
                            ₹{product.price}
                        </span>
                    }

                </div>

                <div className="d-grid gap-2 mt-3">

                    <Link
                        to={`/products/${product.slug}`}
                        className="btn btn-outline-success"
                    >
                        View Details
                    </Link>

                    <button
                        className="btn btn-success"
                        onClick={handleAddToCart}
                    >
                        Add To Cart
                    </button>

                </div>

            </div>

        </div>

    );

}