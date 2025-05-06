import { Box, Typography } from "@mui/material";
import CallMadeIcon from '@mui/icons-material/CallMade';

function Order(){
    return(
        <Box sx={{borderRight: '1px solid #ccc', pr: 2}}> 
        <Typography sx={{marginTop:2}}>
        Order Journal<CallMadeIcon sx={{fontSize:"small"}}/>
        </Typography>
        </Box>
    )
}
export default Order;