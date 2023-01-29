import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const FollowerUser = ({ followerUser }) => {
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

    return (
        <Box gridColumn="span 4">
            <Card sx={{ display: 'flex', backgroundColor: '#030512', color: '#8D8576' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 130, height: '9rem' }}
                    image={followerUser.profilePicture ? serverPublic + followerUser.profilePicture : serverPublic + "profileImgFriends.webp"}
                    alt="Followers Details album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <NavLink style={{ textDecoration: 'none', color: '#8D8576' }} to={`/profile/${followerUser._id}`}>
                            <Typography component="div" varient="h5">
                                {followerUser.firstname} {followerUser.lastname}
                            </Typography>
                        </NavLink>
                        <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ color: '#8D8576' }}>
                            {followerUser.email}
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
        </Box>
    )
}

export default FollowerUser