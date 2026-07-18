import "./Personal.css"
import startedImage from "./started.svg"
function Personal(){
  return (
      <div className="started">
            <div className="started-left">
                <p className="started-main-text">It started with a small idea</p>
                <p className="started-second-text">A global brand with local beginnings, our story begain in a small studio in South London in early 2014</p> 
                <button className="started-btn">View collection</button>
            </div>
            <div className="started-rigth">
                <img src={startedImage} alt="" />
            </div>
        </div>
  )
}
export default Personal
