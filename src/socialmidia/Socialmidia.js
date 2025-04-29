import { Divider } from "@mui/material"
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegMap } from "react-icons/fa6";
function SocialMidia(){
    return(
        <div className="social-container">
           
            <div className="content">
                <div className="about">
                <h3>About</h3>
                <div className="about-pragraph">
                <p>The journal publishes papers of good quality and provides 
                new insight or findings for the international scientific community. </p>
                </div>
                </div>
                    <div className="social-midia">
                    <h3>Quick Links</h3>
                    <div className="about-pragraph" >
                        <li><CheckCircleOutlineIcon/> Aim and Scope</li>
                        <li><CheckCircleOutlineIcon/> Editorial Bord</li>
                        <li><CheckCircleOutlineIcon/> Contact</li>
                    </div>
                    </div>
                <div  className="social-midia">
                   <h3>Social Links</h3> 
                   <div className="about-pragraph">
                        <li><FaLinkedinIn/> Linkden</li>
                        <li><FaFacebookF/> Facebook</li>
                        <li> <FaTwitter/> Twitter </li>
                        <li> <FaInstagram/> Instagram</li>
                   </div>
                </div>

                <div  className="social-midia">
                    <h3>Adress</h3>
                    <div className="about-pragraph">
                        <div style={{display:'flex'}}>
                            <div style={{marginTop:18}}><FaRegMap /></div>
                            <div style={{marginLeft:5}}>
                            <p>Mrs.P.Sighn<br/> Managing Editor and Publisher
                            <br/>Kaju Bagan, Hehal Ranchi 834005, Jharkhand, India</p>
                            </div>
                        </div>
                        
                       
                       
                        
                        
                        
                        <li><MdOutlineMail/> editor.jweam@gmail.com</li>
                       
                        
                        <li><FaPhoneAlt /> +919430152712</li>
                       
                        
                    </div>
                </div>

                
            </div>
            <Divider className="divider" />
            <div className="divide-end">
            <h3>Copyright © 2023 Journal of Water Engineering and Management</h3>
            </div>
           
        </div>
    )
}
export default SocialMidia