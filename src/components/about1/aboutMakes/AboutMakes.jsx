import delivery from "../../assets/Delivery.png";
import checkmark from "../../assets/checkmark.png";
import purchase from "../../assets/Purchase.png";
import sprout from "../../assets/Sprout.png";
import "./Hero.css";
import global from "../../../../public/global-img.jpg";
import "./AboutMakes.css";

export default function Hero() {
  return (
    <div>
      <div className="hero">
        <h2>What makes our brand different</h2>
        <br />
        <div className="cards">
          <div className="nextday">
            <img src={delivery} alt="" />
            <h5>Next day as standard</h5>
            <p>
              {" "}
              Order before 3pm and get your order the next day as standards
            </p>
          </div>

          <div className="nextday">
            <img src={checkmark} alt="" />
            <h5>Made by true artisans</h5>
            <p>
              {" "}
              Handmade crafted goods made with real passion and craftmanship
            </p>
          </div>

          <div className="nextday">
            <img src={purchase} alt="" />
            <h5>Unbeatable prices</h5>
            <p>
              {" "}
              For our materials and quality you won’t find better prices
              anywhere
            </p>
          </div>

          <div className="nextday">
            <img src={sprout} alt="" />
            <h5>Recycled packaging</h5>
            <p>
              {" "}
              We use 100% recycled packaging to ensure our footprint is
              manageable
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
