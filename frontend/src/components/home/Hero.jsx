import "./Hero.css";
import { Link } from "react-router-dom";
import heroRice from "../../assets/images/hero-rice.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center">
        <div className="col-lg-6">
  <h1>Farm-Fresh Rice, Delivered to Your Doorstep</h1>
  <p className="mb-1">
    100% Natural Rice — Straight From Farmers to Your Kitchen
  </p>
  <p className="text-warning fw-semibold small mb-3">
    ✅ Not Satisfied? Free Return Pickup — Kadiri Area Only
  </p>

  <Link to="/products" className="btn btn-warning btn-lg">
    Shop Now
  </Link>

  {/* Telugu translation */}
  <div className="mt-4 pt-3 border-top border-light border-opacity-25">
    <h2 className="h4" lang="te">
      తాజా వరి బియ్యం, మీ ఇంటికి నేరుగా
    </h2>
    <p className="mb-1" lang="te">
      100% సహజమైన బియ్యం —  రైతుల నుండి నేరుగా మీ వంటగదికి
    </p>
    <p className="text-warning fw-semibold small mb-3" lang="te">
      ✅ నచ్చకపోతే ఉచిత రిటర్న్ — కదిరి ప్రాంతంలో మాత్రమే
    </p>
  </div>
</div>

          <div className="col-lg-6">
            <img src={heroRice} className="hero-image" alt="Rice" />
          </div>
        </div>
      </div>
    </section>
  );
}