import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { getProducts } from "../../services/productService";
import { getCategories } from "../../services/categoryService";

import ProductCard from "../../components/product/ProductCard";
import ProductFilter from "../../components/product/ProductFilter";

import "./Products.css";

export default function Products() {

    const [searchParams, setSearchParams] = useSearchParams();

    const selectedCategory = searchParams.get("category") || "";

    const [products, setProducts] = useState([]);

    const [categories, setCategories] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadCategories();

    }, []);

    useEffect(() => {

        loadProducts();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedCategory]);

    async function loadCategories() {

        try {

            const response = await getCategories();

            const data = response.data?.results
                || response.data
                || response.results
                || response
                || [];

            setCategories(Array.isArray(data) ? data : []);

        }

        catch (error) {

            console.log(error);

            setCategories([]);

        }

    }

    async function loadProducts() {

        setLoading(true);

        try {

            const params = selectedCategory
                ? { category: selectedCategory }
                : {};

            const response = await getProducts(params);

            setProducts(
                response.data.results
                || response.data.data?.results
                || response.data
                || []
            );

        }

        catch (error) {

            console.log(error);

            setProducts([]);

        }

        finally {

            setLoading(false);

        }

    }

    function handleCategoryChange(slug) {

        if (slug) {

            setSearchParams({ category: slug });

        }

        else {

            setSearchParams({});

        }

    }

    return (

        <div className="container py-5">

            <h2 className="mb-4">

                Our Rice Collection

            </h2>

            <div className="row">

                <div className="col-lg-3 mb-4">

                    <ProductFilter

                        categories={categories}

                        selected={selectedCategory}

                        onChange={handleCategoryChange}

                    />

                </div>

                <div className="col-lg-9">

                    {

                        loading ? (

                            <div className="text-center py-5">

                                <div className="spinner-border text-success" />

                            </div>

                        ) : products.length === 0 ? (

                            <p className="text-muted">

                                No products found.

                            </p>

                        ) : (

                            <div className="row">

                                {

                                    products.map(product => (

                                        <div

                                            key={product.id}

                                            className="col-lg-4 col-md-6 mb-4"

                                        >

                                            <ProductCard

                                                product={product}

                                            />

                                        </div>

                                    ))

                                }

                            </div>

                        )

                    }

                </div>

            </div>

        </div>

    );

}