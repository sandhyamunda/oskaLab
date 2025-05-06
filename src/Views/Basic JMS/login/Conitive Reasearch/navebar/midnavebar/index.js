import { Box, Divider, Typography, useTheme,} from "@mui/material"
import res from '../midnavebar/research.jpg'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CallMadeIcon from '@mui/icons-material/CallMade';
import SearchIcon from '@mui/icons-material/Search';
import midnavebar from "../../../../../../CSS/midnavebar/midnavebar";
function Midnavebar(){
    const theme = useTheme();
      const style = midnavebar(theme)
    return(
        <Box sx={style.maincontainer}>
        <Box sx={style.secondcontainer}>
            <img src={res} alt='research book' style={{marginLeft:120,marginTop:-20,paddingBottom:20}}/>
            <Box  sx={style. congnitivSystem}>
            <Typography variant='h5'>
                Congnitive Systems Research
            </Typography>
            <Typography variant='body1'>
                Support Open access
            </Typography>
            </Box>
            <Box sx={style.cityscore}>
                    <Box sx={style.cityscore1}>
                        <Typography> 9.8</Typography>
                       <Typography>CiteScore</Typography>
                        
                    </Box>
                    <Box sx={style.ispactfacter} />
                    <Box sx={style.ispactfacter1}>
                        <Typography> 2.1</Typography>
                       
                        <Typography>Impact Factor</Typography>
                    </Box>
                </Box>
                </Box>
            
                <Box sx={style.articls}>   
                <Typography sx={style. articls1}>
                Articles & Issues <KeyboardArrowDownIcon fontSize="small"/>
                </Typography>

                <Typography  sx={style.about}>
                About <KeyboardArrowDownIcon/>
                </Typography>
                <Box>
                <Typography sx={style.publish}>Publish
                <KeyboardArrowDownIcon fontSize="small"/>
                </Typography>
                </Box>
                <Box sx={style. orderjurnal}> 
                <Typography sx={style. orderjurnal1}>
                Order Journal<CallMadeIcon sx={style.orderjurnalicon}/>
                </Typography>
                </Box>
                
                <Box sx={style. searchjournal}> 
                <Typography sx={style.searchjournal1}>
                <SearchIcon sx={style. searchjournalicon}/>
                Search in this Journal</Typography>
                </Box>

                <Box sx={style.sumitartical}>
                <Typography sx={style.sumitartical1}>
                Submit your article<CallMadeIcon sx={style. sumitarticalicon}/>
                </Typography>
                </Box>

                <Box sx={style. guid}>
                <Typography sx={style.guid1}>
                Guide for outhers</Typography>
                </Box>
                </Box>
              
                <Divider sx={style.divide}/>
        
        </Box>
        
    )
}
export default Midnavebar;