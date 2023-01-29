import { Box } from '@mui/material'
import React from 'react'
import ChatUsers from '../ChatUsers/ChatUsers'

const MessageLeft = () => {
  return (
    <Box flex={1} p={2} sx={{maxHeight: '40rem',backgroundColor:'#191C21', borderRadius:'12px 12px 0px 0px'}}>
      <ChatUsers />
    </Box>
  )
}

export default MessageLeft