import { Box, Stack } from '@mui/material'
import React from 'react'
import Profile from '../../components/Profile/Profile'
import Navbar from '../../components/Navbar/Navbar'
import Rightbar from '../../components/Rightbar/Rightbar'
import Sidebar from '../../components/Sidebar/Sidebar'

const ProfilePage = () => {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between" sx={{ marginTop: '5rem' }}>
        <Sidebar />
        <Profile />
        <Rightbar />
      </Stack>
    </Box>
  )
}

export default ProfilePage