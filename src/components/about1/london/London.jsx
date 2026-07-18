import sofa from "../../assets/sofa.jpg";
import "./Global.css";

export default function Global() {
  return (
    <div className="Global">
      <div className="global-text">
        <h2>From a studio in London to a global brand with over 400 outlets</h2>

        <small>
          When we started Avion, the idea was simple. Make high quality
          furniture affordable and available for the mass market.
        </small>

        <p>
          Handmade, and lovingly crafted furniture and homeware is what we live,
          breathe and design, so our Chelsea boutique became the hotbed for the
          London interior design community.
        </p>

        <button>Get in touch</button>
      </div>

      <div className="global-img">
        <img src={sofa} alt="Sofa" />
      </div>
    </div>
  );
}
