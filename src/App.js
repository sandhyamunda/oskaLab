
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Editar from './header/Editer';
import Heding from './Heding';
import Navigation from './component/Navigation'; 
import Home from './component/Home';
import Aim from './component/Aim';
import Archive from './component/Archive';
import Faq from './component/Faq';
import Editorial from './component/Editorial';
import Contact from './component/Contact';
import SocialMidia from './socialmidia/Socialmidia';

function App() {
        return(
           <BrowserRouter>
           <div className='Container'>
            <div>
           <Editar />
           <Heding />
           <Navigation />
          
           </div>
           
           </div>
           
            <Routes>
               
                {/* <Route  path='/' exact ={true} element={<Navigation/>} /> */}
                <Route path='/' exact ={true} element={<Home/>} />
                <Route path='/home' exact ={true} element={<Home/>} />
                <Route  path='/aim' exact ={true} element={<Aim/>} />
                <Route  path='/editorial' exact ={true} element={<Editorial/>} />
                <Route  path='/archive' exact ={true} element={<Archive/>} />
                <Route  path='/faq' exact ={true} element={<Faq/>} />
                <Route  path='/contact' exact ={true} element={<Contact/>} />
                
                   
                    
            </Routes>
            <div style={{marginTop:100}}>   <SocialMidia /></div>
            
           </BrowserRouter>
        )


}

export default App;
