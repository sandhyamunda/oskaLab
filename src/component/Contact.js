
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegMap } from "react-icons/fa6";

function Contact(){
    return(
        <div className="contact-container">
                <div className="contact">
                    <h1>Contact</h1>
                </div>
                <div className="form-contant">
                    <div className="address">
                    <div style={{display:'flex'}}>
                            <div style={{marginTop:65}}><FaRegMap /></div>
                            <div style={{marginLeft:5}}>
                            <p>Mrs.P.Sighn<br/> Managing Editor and Publisher
                            <br/>Kaju Bagan, Hehal Ranchi 834005, Jharkhand, India</p>
                            </div>
                        </div>
                        <li><MdOutlineMail/> editor.jweam@gmail.com</li>
                       
                       
                        <li><FaPhoneAlt/> +919430152712</li>
                      
                    </div>
                    <div className="from">
                        
                            
                        <lable>Name</lable><br/>
                        <input className="input" placeholder="name" /><br/>
                        <lable >Email</lable><br/>
                        <input className="input" placeholder="Email" /><br/>
                        <lable>Phone</lable><br/>
                        <input className="input" placeholder="phone" /><br/> 
                        <lable>message</lable><br/>
                        <textarea className="message" placeholder="Message"></textarea><br/>
                        <input className="submit" type="submit" value='Submit' />
                    
                    </div>

            
            </div>
        </div>
    )
}
export default Contact;