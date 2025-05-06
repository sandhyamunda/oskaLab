import { Box, Typography } from "@mui/material"
function Aboutthe(){
    return(
        <Box sx={{marginLeft:15,width:725,padding:3,background:'#f5f5f5'}}>
            <Typography  variant='h5'>About the Journal</Typography>
            <Typography variant='body1'>
                Cognitive Systems Research is dedicated to the study of human-level
                cognition As such,it welcomes papers which advance the understanding design and 
                and intellgent system,both natural and artificial.
             </Typography>
             <Typography>The journal bring together a broad community Studying
                 cognition...
             </Typography>
            <Typography sx={{color:'#00ddff',marginTop:3}}>View full bring aims & scope</Typography>
        </Box>
     )
}
export default Aboutthe