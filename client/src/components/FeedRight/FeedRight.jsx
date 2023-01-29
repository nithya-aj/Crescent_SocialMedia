import { Box } from '@mui/material'
import React from 'react'
import ProfileCard from '../ProfileCard/ProfileCard'


const FeedRight = () => {
  return (
    <Box flex={1} p={1} sx={{}}>
        <Box flex={2.5} position='fixed'>
          <ProfileCard location="homePage" />
      </Box>
    </Box>
  )
}

export default FeedRight