import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getCategories } from "../../services/categoryService";

import "./Categories.css";

export default function Categories() {

    const navigate = useNavigate();

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadCategories();

    }, []);

    async function loadCategories() {

        try {

            const response = await getCategories();

            const data =
                response.data?.results ||
                response.data ||
                response.results ||
                response ||
                [];

            setCategories(Array.isArray(data) ? data : []);

        }

        catch (error) {

            console.log(error);

            setCategories([]);

        }

        finally {

            setLoading(false);

        }

    }

    function handleCategoryClick(category) {

        navigate(`/products?category=${category.slug}`);

    }

    if (loading) {

        return (

            <div className="text-center py-5">

                <div className="spinner-border text-success"></div>

            </div>

        );

    }

    if (categories.length === 0) {

        return (

            <div className="container category-section">

                <h2 className="section-title">

                    Categories

                </h2>

                <p className="text-muted">

                    No categories found.

                </p>

            </div>

        );

    }

    return (

        <section className="container category-section">

            <div className="section-header">

                <h2 className="section-title">

                    Shop By Category

                </h2>

                <p>

                    Choose your favourite rice variety

                </p>

            </div>

            <div className="row g-3">

                {

                    categories.map(category => (

                        <div
                            className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6"
                            key={category.id}
                        >

                            <div
                                className="category-card"
                                onClick={() => handleCategoryClick(category)}
                            >

                                <div className="category-image-wrapper">

                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="category-image"
                                    />

                                </div>

                                <div className="card-body">

                                    <h5>

                                        {category.name}

                                    </h5>

                                </div>

                            </div>

                        </div>

                    ))

                }

            </div>

        </section>

    );

}