import { Box, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

function Searchin(){
    return(
        <Box sx={{borderRight: '1px solid #ccc', pr: 10}}> 
        <Typography sx={{marginTop:2}}>
        <SearchIcon sx={{marginRight:2,fontSize:"medium" }}/>
        Search in this Journal</Typography>
        </Box>
    )
}
export default Searchin;