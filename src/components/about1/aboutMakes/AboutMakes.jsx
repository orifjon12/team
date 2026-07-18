import global from "../../../../public/global-img.jpg";
import "./AboutMakes.css";

export default function Services() {
  return (
    <div className="Services">
      <div className="services-img">
        <img src={global} alt="" />
      </div>
      <div className="services-text">
        <h2>
          Our service isn’t just personal, it’s actually hyper personally
          exquisite
        </h2>
        <small>
          When we started Avion, the idea was simple. Make high quality
          furniture affordable and available for the mass market.
        </small>

        <p>
          Handmade, and lovingly crafted furniture and homeware is what we live,
          breathe and design so our Chelsea boutique become the hotbed for the
          London interior design community.
        </p>
        <button>Get in touch</button>
      </div>
    </div>
  );
}
