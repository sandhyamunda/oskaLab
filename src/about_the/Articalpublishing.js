import { Box,Typography } from "@mui/material";
function ArticlPublish(){
    return(
            <Box sx={{padding:3,width:470}}>
                <Typography variant='h5'>Article Publishing option</Typography>
                <Typography variant='h6'>Open Access</Typography>
                <Typography>
                Article Publishing Charge (APC): USD 3,030(excluding taxes).
                The amount you pay may be reduced during submission if (application).
                </Typography>
                <Typography>Review <Typography sx={{color:'#00ddff'}}>this journal's 
                    open access policy </Typography>
                </Typography>
                <Typography variant='h6' sx={{marginTop:2}}>Subscription</Typography>
                <Typography>No publication fee charged and 
                    published articles are immediately available to subscribers
                </Typography>
                
            </Box>
    )
}
export default ArticlPublish;