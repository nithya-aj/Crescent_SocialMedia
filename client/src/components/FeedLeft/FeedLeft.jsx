import { Box } from '@mui/material'
import React from 'react'
import PostShareCmp from '../PostShareCmp/PostShareCmp'
import Posts from '../Posts/Posts'

const FeedLeft = () => {
  return (
    <Box flex={2.5} >
      <PostShareCmp />
      <Posts/>
    </Box>
  )
}

export default FeedLeft