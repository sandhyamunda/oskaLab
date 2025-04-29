
import { Box, Typography } from "@mui/material";
import { MdOutlineMail } from "react-icons/md";

function Email(){
    return(
        <Box className="email">
            <Box>
                <Typography>
                <MdOutlineMail/> editor.jwean@gmail.com
                </Typography>
            
            </Box>
            
        </Box>
    )
}
export default Email;