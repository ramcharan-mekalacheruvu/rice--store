import "./Testimonials.css";

const testimonials = [

    {
        name: "Rahul Kumar",
        city: "Kadapa",
        image: "/images/users/ram.jpeg",
        review:
            "Very fresh rice and excellent packaging. Highly recommended.",
        rating: 5,
    },

    {
        name: "Priya Sharma",
        city: "Bangalore",
        image: "/images/users/user2.jpg",
        review:
            "Fast delivery with Cash on Delivery. Great shopping experience.",
        rating: 5,
    },

    {
        name: "Suresh Reddy",
        city: "Hyderabad",
        image: "/images/users/user3.jpg",
        review:
            "Excellent quality rice at a reasonable price. Will order again.",
        rating: 5,
    },

];

export default function Testimonials() {

    return (

        <section className="testimonials-section">

            <div className="container">

                <div className="text-center section-heading">

                    <h2 className="section-title">
                        What Our Customers Say
                    </h2>

                    <p className="section-subtitle">
                        Trusted by hundreds of happy families across Andhra Pradesh.
                    </p>

                </div>

                <div className="row g-4">

                    {

                        testimonials.map((item, index) => (

                            <div
                                key={index}
                                className="col-12 col-md-6 col-lg-4"
                            >

                                <div className="testimonial-card">

                                    <div className="stars">

                                        {"⭐".repeat(item.rating)}

                                    </div>

                                    <p className="review">

                                        "{item.review}"

                                    </p>

                                    <div className="customer">

                                        <img
                                            src={item.image}
                                            alt={item.name}
                                        />

                                        <div>

                                            <h6>

                                                {item.name}

                                            </h6>

                                            <small>

                                                {item.city}

                                            </small>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        ))

                    }

                </div>

            </div>

        </section>

    );

}