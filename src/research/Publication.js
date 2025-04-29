import { Box, Button,Divider,TextField,Typography,InputAdornment,Grid, Stack } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HouseIcon from '@mui/icons-material/House';
import HospitalScheduleChecker from "./Shedule";
import Footer from "./Footer";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

function Publication(){
    return(
        <Box sx={{width:'100%'}}>
            <Box >
              <Footer/>
            </Box>
            <Box sx={{display:'flex',width:'100%',
                background:'#0060df',
                color:'#fff',
                px:2,
                py:2
                }}>
                <Box sx={{marginLeft:40}}>
                <Button sx={{color:'#fff'}}>home <KeyboardArrowDownIcon/></Button>
                <Button  sx={{color:'#fff'}}>about <KeyboardArrowDownIcon/></Button>
                <Button  sx={{color:'#fff'}}>services <KeyboardArrowDownIcon/></Button>
                <Button  sx={{color:'#fff'}}>pages <KeyboardArrowDownIcon/></Button>
                <Button  sx={{color:'#fff'}}>new & insight <KeyboardArrowDownIcon/></Button>
                </Box>
                <PersonOutlineIcon sx={{marginLeft:30,marginTop:0.80}}/>
                <Button sx={{color:'#fff'}}>Login</Button>
                
                <SearchIcon sx={{marginLeft:5,marginTop:0.80}} />

                <ShoppingCartIcon sx={{marginLeft:5,marginTop:0.80}}/>
            </Box>

            <Box justifyContent="space-between" ml={41}mt={2}  width={960}>
            <Typography variant="body2" gutterBottom >
             <HouseIcon/>PUBLICATION THE ROLE OF VITAMIN D IN FERTILITY AND 
             DURING PREGNANCY AND LACTATION: A REVIEW OF INICAL DATA 
            </Typography>
            <Divider sx={{ mb: 2 }} />
            </Box>

            {/* Artical Ditail */}
        

            <Box sx={{display:'flex',mt:5}}>
                <Box sx={{marginLeft:41,width:650}}>
                    <Typography variant="h5">
                        The Role of Vitamin D in Fertility and duringPregnancy 
                        and Lactation: A Review of Clinical Data
                    </Typography>
                    <Box sx={{ mt: 5 }}>
  <Grid container spacing={2}>
    {/* Left Side */}
    <Grid item xs={12} md={6}>
      <Typography variant="body1">
        <strong>Authors:</strong> Pilz S, Zittermann A, Obeid R, Hahn A, Pludowski P, Trummer
      </Typography>
      <Typography variant="body1">
        <strong>Publication Date:</strong> October 12, 2018
      </Typography>
      <Typography variant="body1">
        <strong>Volume/Issue:</strong> 147(3)
      </Typography>
      <Typography variant="body1">
        <strong>Publication On:</strong> Heart Fail Clin
      </Typography>
    </Grid>

    {/* Right Side */}
    <Box sx={{marginLeft:40,marginTop:-10}}>
    <Grid item xs={12} md={6}>
      <Typography variant="body1">
        <strong>Type:</strong> Handbooks
      </Typography>
      <Typography variant="body1">
        <strong>DOI:</strong> 10.1016/j.hfc.2018.03.003
      </Typography>
    </Grid>
    </Box>
  </Grid>
</Box>
                    
                    <Box>
                        <Typography variant="h6"sx={{mt:5}}>Abstract</Typography>
                        <Typography variant="body">
                            Within the last year,exercise training and rehabilitation as add-on
                            to midical treatment has become an emerging field
                            During pregnancy, vitamins play a crucial role in supporting both the 
                            mother's health and the baby's development. Specifically, folic acid, iron, 
                            vitamin D, and iodine are vital for preventing birth defects, supporting red blood 
                            cell production,
                             bone and tooth growth, and brain development, 
                        </Typography>
                    </Box>
                    <Box sx={{mt:5}}>
                        <Typography variant="h6" sx={{display:'flex'}}>
                        Keywords: <Typography sx={{mt:0.50}}> Exercise training Pulmonary arterial
                        </Typography></Typography>
                    </Box>
                    {/* hospital */}
                        <Box >
                        <HospitalScheduleChecker/>
                        </Box>
                    {/* Referance */}
                <Box sx={{mt:5}}>
                    <Typography variant="h6">Referance</Typography>
                    <Typography variant="body1">
                        1.Cashman K.D. Vitamin D requirments for the future-lessons
                        learned and charting a path forword.Nutrients. 2018;10:533 doi:
                        10.3390/nu10050500 -DOI-PMC-Pubmed
                    </Typography>
                    <Typography variant="body1">
                        1.Cashman K.D. Vitamin D requirments for the future-lessons
                        learned and charting a path forword.Nutrients. 2018;10:533 doi:
                        10.3390/nu10050500 -DOI-PMC-Pubmed
                    </Typography>
                    <Typography variant="body1">
                        1.Cashman K.D. Vitamin D requirments for the future-lessons
                        learned and charting a path forword.Nutrients. 2018;10:533 doi:
                        10.3390/nu10050500 -DOI-PMC-Pubmed
                    </Typography>
                    <Typography variant="body1">
                        1.Cashman K.D. Vitamin D requirments for the future-lessons
                        learned and charting a path forword.Nutrients. 2018;10:533 doi:
                        10.3390/nu10050500 -DOI-PMC-Pubmed
                    </Typography>
                </Box>
                    
                    
                </Box>
                {/* search barr */}
                <Box sx={{width:300,marginLeft:3}}>
              
               <TextField sx={{width:300}} 
                id="standard-basic" 
                label="Search" 
                variant="standard"
                InputProps={{
                    endAdornment:(
                        <InputAdornment position="end">
                            <SearchIcon/>
                        </InputAdornment>
                    )
                }} />
              
                
                <Box sx={{background:'#99ceff',marginTop:8,padding:3}}>
                    <Typography>Publication Statics</Typography>
                    <Typography sx={{mt:2}}>ABSTRACTVIEW REFERENCES</Typography>
                    <Typography sx={{display:'flex',mt:2}} >19<Typography sx={{ml:20}}>
                        7</Typography></Typography>
                </Box>
                <Box sx={{mt:8}}>
                <Button sx={{bgcolor:'#013566',color:'#fff',width:300}}>
                DOWNLOAD THIS JOURNAL</Button></Box>
                <Box sx={{mt:3}}>
                <Button variant="outlined"sx={{width:300,color:"success"}} >
                OPEN PDF IN BROWSER</Button></Box>
                
               <Box mt={8}>
                <Typography variant="h6">SHARE</Typography> 
                    <Box display="flex" gap={3}mt={4}>
                    <FaFacebookSquare/>
                    <FaLinkedin/>
                    <FaSquareXTwitter/>
                    <FaLink/>
                    </Box>
               </Box>


               <Box sx={{mt:8}}>
                <Typography variant="h6" >RELATED PUBLICATIONS</Typography>
                <Typography variant="body1" sx={{mt:3}}>
                    The Epigenetics Revolution:How Modern Biology Is Our
                    Understanding of Gennetics,Disease,and Inheritance
                </Typography>
               </Box>
                
                </Box>

            </Box>
             
            </Box>

    )
}
export default Publication;