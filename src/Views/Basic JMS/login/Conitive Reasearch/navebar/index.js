import { Box, Typography, useTheme } from "@mui/material";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { MdOutlineAccountBalance } from "react-icons/md";
import { RiAccountBoxLine } from "react-icons/ri";
import NavebarTheme from "../../../../../CSS/navebar/navbar";

function Navebar(){
  const theme = useTheme();
  const style = NavebarTheme(theme);
  
    return(
      <Box  sx={style.navebarcontainer}>
        <Typography>
            Journal
        </Typography>
         <Typography>
        <IoIosHelpCircleOutline/>Help
        </Typography>
         <Typography>
         <IoSearch/>Search
        </Typography>
        <Typography>
        <RiAccountBoxLine/>Myaccount
        </Typography>
        <Typography>
        <MdOutlineAccountBalance/> Signin
        </Typography>
      </Box>
    )
}
export default Navebar
