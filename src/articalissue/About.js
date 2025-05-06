import { Typography,Box } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function About(){
    return(
        <Box>
            <Typography  sx={{marginTop:2}}>
            About <KeyboardArrowDownIcon/>
            </Typography>
        </Box>
    )
}
export default About;