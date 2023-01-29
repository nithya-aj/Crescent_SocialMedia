import { Box, Stack } from '@mui/material'
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Friends from '../../components/Friends/Friends'

const FriendsPage = () => {
    return (
        <Box>
            <Navbar />
            <Stack direction="row" spacing={2} justifyContent="space-between" sx={{ marginTop: '5rem', marginRight:'1rem' }}>
                <Sidebar />
                <Friends />
            </Stack>
        </Box>
    )
}

export default FriendsPage