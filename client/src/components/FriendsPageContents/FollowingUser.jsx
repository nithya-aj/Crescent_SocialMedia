import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const FollowingUser = ({ followingUser }) => {
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

    return (
        <Box gridColumn="span 4">
            <Card  sx={{ display: 'flex', backgroundColor:'#030512', color:'#8D8576' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 130, height: '9rem' }}
                    image={followingUser.profilePicture ? serverPublic + followingUser.profilePicture : serverPublic + "profileImgFriends.webp"}
                    alt="Following Users album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <NavLink style={{textDecoration:'none', color:'#8D8576'}} to={`/profile/${followingUser._id}`}><Typography component="div" variant="h5">
                            {followingUser.firstname} {followingUser.lastname}
                        </Typography></NavLink>
                        <Typography variant="subtitle1" color="text.secondary" component="div" sx={{color:'#8D8576' }}>
                            {followingUser.email}
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
        </Box>
    )
}

export default FollowingUser