import { Box, Typography } from "@mui/material";
import CallMadeIcon from '@mui/icons-material/CallMade';

function Submit(){
    return(
        <Box sx={{borderRight: '1px solid #ccc', pr: 10}}>
        <Typography sx={{marginTop:2}}>
        Submit your article<CallMadeIcon sx={{fontSize:"small"}}/>
        </Typography>
        </Box>
    )
}
export default Submit;