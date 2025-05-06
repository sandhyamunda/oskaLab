
// import logo from '../../asset/logo.png';
import logo from '../src/asset/logo.png'
import { Link } from 'react-router-dom';


function Heding(){
    return(
        <div className="heding-container">
            <div className="part1">
                <div className="logo">
                <Link to='/' className="">
              <img  src={logo} alt="logo"/>
              </Link> 
                </div>
                <div className=" journal">
                    <h2> Journal of Water Engineering and  </h2>
                    <h2>Mangenent</h2>
                    <h3>(International Peer-reviewed Journal)</h3>
                </div>
            </div>
            
        </div>
    )
}
export default Heding;