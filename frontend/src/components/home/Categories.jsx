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

    const loadCategories = async () => {

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

        finally {

            setLoading(false);

        }

    };

    function handleCategoryClick(category) {

        navigate(`/products?category=${category.slug}`);

    }

    if (loading) {

        return (

            <div className="text-center py-5">

                <div className="spinner-border text-success" />

            </div>

        );

    }

    if (categories.length === 0) {

        return (

            <div className="container my-5 text-center">

                <h2>

                    Categories

                </h2>

                <p className="text-muted">

                    No categories found.

                </p>

            </div>

        );

    }

    return (

        <div className="container my-5">

            <h2>

                Categories

            </h2>

            <div className="row categories-row">

                {

                    categories.map(category => (

                        <div

                            className="col-md-3 col-6"

                            key={category.id}

                        >

                            <div

                                className="card category-card"

                                role="button"

                                onClick={() => handleCategoryClick(category)}

                            >

                                <img

                                    className="category-image"

                                    src={category.image}

                                    alt={category.name}

                                />

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

        </div>

    );

}