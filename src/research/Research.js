
import { Box, Divider, Typography } from '@mui/material';

import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { RiAccountBoxLine } from "react-icons/ri";
import { MdOutlineAccountBalance } from "react-icons/md";
import res from '../asset/research.jpg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import CallMadeIcon from '@mui/icons-material/CallMade';


function Research(){
    return(
        <Box sx={{width:'100%'}}>
            <Box sx={{display:'flex',gap:3,marginLeft:120,marginTop:3,height:50}}>
                <Typography>Journals & Book</Typography>
                <Typography><IoIosHelpCircleOutline/> Help</Typography>
                <Typography><IoSearch/> Search</Typography>
                <Typography><RiAccountBoxLine/> My account</Typography>
                <Typography><MdOutlineAccountBalance/> Sign in</Typography>
            </Box>
            <Box sx={{background:'#fdd663',height:200, display:'flex'}}>
                <img src={res} alt='research book' style={{marginLeft:120,marginTop:-20,paddingBottom:20}}/>
                <Box sx={{marginLeft:10,marginTop:5}}>
                <Typography variant='h5'>
                    Congnitive Systems Research
                </Typography>
                <Typography variant='body1'>
                    Support Open access
                </Typography>
                </Box>
                <Box sx={{display:'flex',marginLeft:50,marginTop:10}}>
                    <Box sx={{marginRight:2}}>
                        <Typography> 9.8</Typography>
                       <Typography>CiteScore</Typography>
                        
                    </Box>
                    <Box sx={{ width: '1px', height: '40px',backgroundColor: 'black',fontWeight:'bold' }} />
                    <Box sx={{marginLeft:2}}>
                        <Typography> 2.1</Typography>
                       
                        <Typography>Impact Factor</Typography>
                        
                    </Box>
                </Box>
                
            </Box>
           <Box sx={{display:'flex',gap:5,marginLeft:15,height:50,}}>
            
                    <Typography sx={{marginTop:2}}
                    >Articles & Issues <KeyboardArrowDownIcon fontSize="small"/></Typography>
                    <Typography sx={{marginTop:2}}>About
                    <KeyboardArrowDownIcon fontSize="small"/>
                    </Typography>
                    <Typography sx={{marginTop:2}}>Publish
                    <KeyboardArrowDownIcon fontSize="small"/>
                    </Typography>
                    <Box sx={{borderRight: '1px solid #ccc', pr: 2}}> <Typography sx={{marginTop:2}}>
                        Order Journal<CallMadeIcon sx={{fontSize:"small"}}/></Typography></Box>
                    <Box sx={{borderRight: '1px solid #ccc', pr: 10}}> <Typography sx={{marginTop:2}}>
                    <SearchIcon sx={{marginRight:2,fontSize:"medium" }}/>Search in this Journal</Typography></Box>
                    
                    <Box sx={{borderRight: '1px solid #ccc', pr: 10}}><Typography sx={{marginTop:2}}>
                        Submit your article<CallMadeIcon sx={{fontSize:"small"}}/></Typography></Box>
                    <Box sx={{borderRight: '1px solid #ccc', pr: 10}}><Typography sx={{marginTop:2}}>Guide for outhers</Typography></Box>
                   
           </Box>
           <Divider sx={{background:'#fdd663'}}/>
           <Box sx={{display:'flex',marginTop:3}}>
            <Box sx={{marginLeft:15,width:725,padding:3,background:'#f5f5f5'}}>
            <Typography variant='h5'>About the Journal</Typography>
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

           </Box>
            {/* All issues */}
           <Box sx={{display:'flex',marginLeft:15,marginTop:10}}>
                <Box sx={{width:350}}>
                    <Typography variant='h5'>All issues</Typography>
                    <Typography variant='body2' sx={{marginTop:3}}>
                        Incorparating
                        <Typography variant='bosy2' sx={{color:'#00ddff',marginLeft:1}}>
                        Biologically Inspired
                        Cognitive Architectures
                            </Typography> 
                    </Typography>
                    <Divider sx={{marginTop:3,width:250}}/>
                        <Typography sx={{paddingTop:2,paddingBottom:2}}>2025 - Volumes 89-91</Typography>
                    <Divider sx={{width:250}}/>
                    <Typography sx={{marginTop:3}}>2024 - Volumes 83-98</Typography>
                    <Typography sx={{color:'#00ddff', marginTop:3}}>Volume 88</Typography>
                    <Typography>December 2024</Typography>

                    <Typography sx={{color:'#00ddff', marginTop:3}}>Volume 87</Typography>
                    <Typography>September 2024</Typography>

                    <Typography sx={{color:'#00ddff', marginTop:3}}>Volume 86</Typography>
                    <Typography>August 2024</Typography>

                    <Typography sx={{color:'#00ddff', marginTop:3}}>Volume 85</Typography>
                    <Typography>June 2024</Typography>

                    <Typography sx={{color:'#00ddff', marginTop:3}}>Volume 84</Typography>
                    <Typography>March 2024</Typography>

                    <Typography sx={{color:'#00ddff', marginTop:3}}>Volume 83</Typography>
                    <Typography>January 2024</Typography>
                    <Divider sx={{marginTop:3,width:250}}/>
                    <Typography sx={{paddingTop:2,paddingBottom:2}}>
                        2023 - Valumes77-82
                    </Typography>
                    <Divider  sx={{width:250}}/>
                </Box>

                {/* Artical */}
                <Box sx={{marginLeft:20,width:750}}>
                    <Typography variant='h6'sx={{fontSize:'bolde',fontWeight:'bold'}}>Articles</Typography>
                    <Box sx={{display:'flex',gap:3,marginTop:3}}>
                        <Typography sx={{fontWeight:'bold'}}>Latest published</Typography>
                        <Typography sx={{fontWeight:'bold'}}>Articles in press</Typography>
                        <Typography sx={{fontWeight:'bold'}}>Top cited</Typography>
                        <Typography sx={{fontWeight:'bold'}}>Most downloaded</Typography>
                        <Typography sx={{fontWeight:'bold'}}> Most popular</Typography>
                    </Box>
                    <Divider/>

                    <Box sx={{marginTop:3}}>
                        <Box sx={{background:'#d2e2f0',padding:3}}>
                            <Typography variant='h5'>
                                The Epigenetics REvolution: How Modern Biologically
                                Is Rewriting Our Understanding of Genetics, Disease and 
                                Inheritannce
                            </Typography>
                            <Typography variant='body1' sx={{fontSize:"small",marginTop:2}}>
                                Jennifer A. Doudna, Samuel H. Stremberg Houghton Mifflin Harcount
                            </Typography>
                            <Typography variant='body1' fontSize="small" color='#afafaf'>
                            Int J Environ Res Public Health. 2018 Oct 12;15(10):2241 . dol:10.3390/ijerph15102241
                            </Typography>
                        </Box>
                        <Box sx={{background:'#d2e2f0',marginTop:3,padding:3}}>
                            <Typography variant='h5'>
                                Exercise Trainig and Rehabilitation in Pulmonary Hypertension
                            </Typography>
                            <Typography variant='body1' sx={{fontSize:"small",marginTop:2}}>
                                Jennifer A. Doudna, Samuel H. Stremberg Houghton Mifflin Harcount
                            </Typography>
                            <Typography variant='body1' fontSize="small" color='#afafaf'>
                            Int J Environ Res Public Health. 2018 Oct 12;15(10):2241 . dol:10.3390/ijerph15102241
                            </Typography>
                        </Box>
                        <Box sx={{background:'#d2e2f0',marginTop:3,padding:3}}>
                            <Typography variant='h5'>
                                The Role of Vitamin D in Fertility and during Pregnancy and
                                 Lactation: A Review of Clinical Data
                            </Typography>
                            <Typography variant='body1' sx={{fontSize:"small",marginTop:2}}>
                                Jennifer A. Doudna, Samuel H. Stremberg Houghton Mifflin Harcount
                            </Typography>
                            <Typography variant='body1' fontSize="small" color='#afafaf'>
                            Int J Environ Res Public Health. 2018 Oct 12;15(10):2241 . dol:10.3390/ijerph15102241
                            </Typography>
                        </Box>
                        <Box sx={{background:'#d2e2f0',marginTop:3,padding:3}}>
                            <Typography variant='h5'>
                                Different Genomic mutation signatures are associated to specific PD-
                                L1/TMB states on lung cancer with potential value for patients 
                                screening for immunotherapy
                            </Typography>
                            <Typography variant='body1' sx={{fontSize:"small",marginTop:2}}>
                                Jennifer A. Doudna, Samuel H. Stremberg Houghton Mifflin Harcount
                            </Typography>
                            <Typography variant='body1' fontSize="small" color='#afafaf'>
                            Int J Environ Res Public Health. 2018 Oct 12;15(10):2241 . dol:10.3390/ijerph15102241
                            </Typography>
                        </Box>
                        
                    </Box>
                </Box>
            </Box>
            
        </Box>
    )
}
export default Research;