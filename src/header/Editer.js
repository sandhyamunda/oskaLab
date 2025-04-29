
import { Box, Typography } from "@mui/material";
import Email from "./Email"
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

 function Editar(){
    return(
        <Box className="editar"> 
        <Box className="editar-container">

            <Box className="phone">
                <Typography variant="body2">
                   <FaPhoneAlt />  +919430152712
                </Typography>
            
            </Box>
            <Box>
                <Email />
            </Box>
            </Box>
        </Box>
    )
 }
 export default Editar