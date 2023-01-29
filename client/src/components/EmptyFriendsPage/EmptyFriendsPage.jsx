import Typography from '@mui/joy/Typography'
import { Box } from '@mui/material'
import React from 'react'

const EmptyFriendsPage = () => {
  return (
    <div>
        <Box sx={{display:'flex' ,alignItems:'center', justifyContent:'center'}}>
            <Typography variant='h2'> 
                You have no friends yet...!
            </Typography>
        </Box>
    </div>
  )
}

export default EmptyFriendsPage