import { Box, Stack } from '@mui/material'
import React from 'react'
import Messages from '../../components/Messages/Messages'
import Navbar from '../../components/Navbar/Navbar'
import Rightbar from '../../components/Rightbar/Rightbar'
import Sidebar from '../../components/Sidebar/Sidebar'

const MessagePage = () => {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" justifyContent="space-between" sx={{ marginTop: '5rem' }}>
        <Sidebar />
        <Messages />
      </Stack>
    </Box>
  )
}

export default MessagePage