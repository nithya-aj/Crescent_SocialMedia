import React from 'react'
import { Box, Stack } from "@mui/material";
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar';
import Feed from '../../components/Feed/Feed';
import Rightbar from '../../components/Rightbar/Rightbar';

const Home = () => {
  return (
    <Box>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-between" sx={{marginTop:'5rem'}}>
        <Sidebar />
        <Feed />
        <Rightbar/>
      </Stack>
    </Box>
  )
}

export default Home