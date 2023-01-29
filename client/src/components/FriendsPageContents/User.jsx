import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { followUser, unfollowUser } from '../../actions/userAction'

const User = ({ person }) => {
    const { user } = useSelector((state) => state.authReducer.authData)
    const [following, setFollowing] = useState(person.followers.includes(user._id))
    const dispatch = useDispatch()
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
    // const [users, setUsers] = useState(person.length)

    const handleFollow = () => {
        following ?
            dispatch(unfollowUser(person._id, user)) :
            dispatch(followUser(person._id, user))

        setFollowing((prev) => !prev)
    }
    return (
        <Box gridColumn="span 4">
            <Card sx={{ display: 'flex', backgroundColor: '#030512', color: '#8D8576' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 130, height: '9rem' }}
                    image={person.profilePicture ? serverPublic + person.profilePicture : serverPublic + "profileImgFriends.webp"}
                    alt="All Users album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <NavLink style={{ textDecoration: 'none', color: '#8D8576' }} to={`/profile/${person._id}`}>
                            <Typography component="div" variant="h5">
                                {person.firstname} {person.lastname}
                            </Typography>
                        </NavLink>
                        <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ color: '#8D8576' }}>
                            {person.email}
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        {following ? (
                            <Button onClick={handleFollow}>Unfollow</Button>
                        ) : (
                            <Button onClick={handleFollow}>Follow</Button>
                        )}
                    </Box>
                </Box>
            </Card>
        </Box>
    )
}

export default User