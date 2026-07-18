import "./Ceramic.css";
import img1 from "../../../../public/Parent.svg";
import img2 from "../../../../public/Parent (1).svg";
import img3 from "../../../../public/Parent (2).svg";
import img4 from "../../../../public/Parent (3).svg";

function Ceramic() {
  return (
    <div className="ceramic">
      <div className="container">
        <div className="ceramic-wr">
          <h2>New ceramics</h2>
          <div className="cards">
            <div className="card">
              <img src={img1} alt="" />
              <strong>The Dandy chair</strong>
              <p>£250</p>
            </div>
            <div className="card">
              <img src={img2} alt="" />
              <strong>Rustic Vase Set</strong>
              <p>£155</p>
            </div>
            <div className="card">
              <img src={img3} alt="" />
              <strong>The Silky Vase</strong>
              <p>£125</p>
            </div>
            <div className="card">
              <img src={img4} alt="" />
              <strong>The Lucy Lamp</strong>
              <p>£399</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ceramic;
