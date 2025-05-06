import { Box, Typography } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Artical(){
    return(
        <Box>
            <Typography sx={{marginTop:2}}>
            Articles & Issues <KeyboardArrowDownIcon fontSize="small"/>
            </Typography>
        </Box>
    )
} 
export default Artical;