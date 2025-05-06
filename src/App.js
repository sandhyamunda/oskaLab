
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Views/Basic JMS/login/register/indix';
import Login from './Views/Basic JMS/login';
import Midnavebar from './Views/Basic JMS/login/Conitive Reasearch/navebar/midnavebar';
import Navebar from './Views/Basic JMS/login/Conitive Reasearch/navebar';
import MainNavebar from './Views/Basic JMS/login/Conitive Reasearch/navebar/mainNavebar';

import { Box } from '@mui/material';

function App() {
    return (
        <BrowserRouter>
        <Box>
        <Navebar/>
        <Midnavebar/>
        <MainNavebar/>
        </Box>
           
            {/* <Routes>
                <Route path='/' exact={true} element={<Login />} />
                <Route path='/signup' exact={true} element={<Signup />} />
                
            </Routes> */}
            
            

        </BrowserRouter>
    )


}

export default App;
