import About2Makes from "../../components/about2/About2Makes/About2Makes";
import Buil from "../../components/about2/buil/Buil";
import Personal from "../../components/about2/personal/Personal";
import Started from "../../components/about2/started/Started";

function About12(){
  return (
    <div className="home">
      <Started/>
      <Personal/>
      <Buil/>
      <About2Makes/>
    </div>
  )
}

export default About12