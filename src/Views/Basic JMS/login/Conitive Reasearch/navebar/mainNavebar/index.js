 import { Box,Divider, Typography } from "@mui/material";
function MainNavebar(){
    return(
        <Box sx={{display:'flex',marginLeft:15,marginTop:10}}>
        {/* Tabs */}
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
        
    )
}
export default MainNavebar;