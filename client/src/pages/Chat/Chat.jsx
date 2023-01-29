import { Box, Stack } from '@mui/material'
import React from 'react'
import ChatPart from '../../components/ChatPart/ChatPart'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'

const Chat = () => {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between" sx={{ marginTop: '5rem' }}>
        <Sidebar />
        <ChatPart/>
      </Stack>
    </Box>
  )
}

export default Chat