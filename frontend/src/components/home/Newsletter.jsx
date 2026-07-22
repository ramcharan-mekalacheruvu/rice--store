import "./Newsletter.css";
import { useState } from "react";

export default function Newsletter() {

    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        alert(`Subscribed Successfully: ${email}`);

        setEmail("");

    };

    return (

        <section className="newsletter">

            <div className="container">

                <div className="newsletter-box">

                    <h2>

                        Stay Updated!

                    </h2>

                    <p>

                        Subscribe to receive offers,
                        discounts and new arrivals.

                    </p>

                    <form
                        onSubmit={handleSubmit}
                        className="newsletter-form"
                    >

                        <input

                            type="email"

                            placeholder="Enter your email"

                            value={email}

                            onChange={(e)=>setEmail(e.target.value)}

                            required

                        />

                        <button
                            className="btn btn-warning"
                        >

                            Subscribe

                        </button>

                    </form>

                </div>

            </div>

        </section>

    );

}