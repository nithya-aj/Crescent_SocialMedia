import { Box, Stack } from '@mui/material'
import React from 'react'
import ChatScreen from '../ChatScreen/ChatScreen'
import MessageLeft from '../MessageLeft/MessageLeft'

const Messages = () => {
    return (
        <Box sx={{ maxHeight: '40rem', backgroundColor: '#212832', borderRadius: '22px 22px 0px 0px', marginRight:'1rem' }} flex={4.5} >
            <Stack direction="row" justifyContent="space-between" sx={{gap:'1rem', paddingLeft:"1rem", paddingRight:'1rem', paddingTop:'1rem', maxHeight: '40rem'}}>
                <MessageLeft />
                <ChatScreen />
            </Stack>
        </Box>
    )
}

export default Messages