import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import book from '../asset/book.jpg'
import React from 'react';
function Home(){
    return(
        <Box className="home-container">
            <Box className="home-c">
                <Box className="book-image">
                    <Box><img className='book' src={book} alt='logo' /></Box>
                    <Box>
                       <ul>
                        <li>Author Guidlines</li>
                        <li>Rights and permission</li>
                        <li>Ethical Policies</li>
                        <li>Review Policy</li>
                        <li>Publication Ethics and Malpractice</li>
                       </ul>
                    </Box>

                    
                </Box>
                
                <Box className="pragraph">
                    <p>The journal (ISSN 2582-6298) publishes papers of good quality and provides new insight or 
                        findings for the international scientific community. The journal covers the application of 
                        the science, economics, engineering, management, and policy of water engineering and management
                         and aims to publish thrice in a year. The manuscripts must discuss the implications and provide
                         useful links for the replication of strategy for managing the precious water resources.
                         We are considering the manuscripts related to the following areas:</p>
                         <p>
                            •Watershed management approach for water resources planning<br/>
                            •Flood forecasting and routing<br/>
                            •Irrigation, drainage, and salinity management in cultivated areas<br/>
                            •Reuse of treated wastewater<br/>
                            •Groundwater management in agriculture<br/>
                            • Application of Nanoscience and Nanotechnology in the water purification system<br/>
                            • Energy efficient irrigation systems<br/>
                            •  Management of agricultural water resources.<br/>
                            • Institutional and policy framework urban and agricultural water management<br/>
                         </p>
                         <h3>Types of papers</h3>
                         <p></p>
                         <ol>
                            <li>
                            Original papers will be accepted. The paper should not have been published previously elsewhere.
                            </li>
                            <li>
                            The review paper should cover a part of the subject of active current interest, especially on water. 
                            Logical analysis and conclusions must be drawn in a review paper. 
                            This should not be a mere collection of previously published works.
                            </li>
                            <li>
                            A Short Communication or View Point is a concise, but complete, description of a
                             limited investigation. Short Communications should be completely documented as a
                              regular paper.2582
                            </li>
                         </ol>
                      
                </Box>
               
                </Box>
            
            
        </Box>
    )
}
export default Home;