import { Box, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
function Publish(){
    return(
        <Box>
            <Typography sx={{marginTop:2}}>Publish
            <KeyboardArrowDownIcon fontSize="small"/>
            </Typography>
        </Box>
    )
}
export default Publish;