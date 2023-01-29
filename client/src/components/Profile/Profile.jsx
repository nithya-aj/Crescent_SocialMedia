import { Box, Stack } from '@mui/material'
import React from 'react'
import ProfileCard from '../ProfileCard/ProfileCard'
import PostShareCmp from '../PostShareCmp/PostShareCmp'
import Posts from '../Posts/Posts'
import ProfileInfoCard from '../ProfileInfoCard/ProfileInfoCard'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Profile = () => {
    const params = useParams()
    const profileUserId = params.id
    const { user } = useSelector((state) => state.authReducer.authData)
    return (
        // <Box sx={{ minHeight: '38rem', backgroundColor: '#04081B', borderRadius: '22px' }} flex={4} p={1}>
        <Box sx={{ minHeight: '38rem', backgroundColor: '#212832', borderRadius: '22px' }} flex={4} p={1}>
            <Stack direction="row" spacing={2} justifyContent="space-between">
                <Box flex={2.5} >
                    <ProfileCard location="profilePage" />
                    <br />
                    {user._id === profileUserId ? <PostShareCmp /> : " " }
                    <Posts />
                </Box>
                <Box flex={1} p={1} sx={{}}>
                    <Box flex={2.5} position='fixed'>
                        <ProfileInfoCard />
                    </Box>
                </Box>
            </Stack>
        </Box>
    )
}

export default Profile