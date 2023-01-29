import React from 'react'
// import CardContent from '@mui/joy/CardContent';
import ListItem from '@mui/joy/ListItem';
import List from '@mui/joy/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/joy/Button';
import { Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { followUser, unfollowUser } from '../../actions/userAction';
import { useState } from 'react';

const OnlineFriends = ({ person }) => {
    const { user } = useSelector((state) => state.authReducer.authData)
    const [following, setFollowing] = useState(person.followers.includes(user._id))
    const dispatch = useDispatch()
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

    const handleFollow = () => {
        following ?
            dispatch(unfollowUser(person._id, user)) :
            dispatch(followUser(person._id, user))

        setFollowing((prev) => !prev)
    }

    return (
        <Box sx={{height:'3rem'}}>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', marginLeft: '-1rem' }}>
                <ListItem alignItems="flex-start" sx={{ gap: '0.5rem' }}>
                    <ListItemAvatar >
                        <Avatar alt="Remy Sharp" src={person.profilePicture ? serverPublic + person.profilePicture : serverPublic + "defaultProfile.png"} sx={{ height: '2.5rem', width: '2.5rem' }} />
                    </ListItemAvatar>
                    <ListItemText sx={{ width: '7rem' }}
                        primary={person.firstname}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="white"
                                >

                                </Typography>
                            </React.Fragment>
                        }
                    />
                    {following ? (
                        <Button size="small" sx={{ background: 'transparent', color: 'white', border: '1px solid white', height: '28px', width: '5rem' }}
                            onClick={handleFollow}
                        >
                            Unfollow
                        </Button>
                    ) : (
                        <Button size="small" sx={{ background: 'grey', color: 'white', border: '1px solid white', height: '28px', width: '5rem' }}
                            onClick={handleFollow}
                        >
                            Follow
                        </Button>
                    )}
                </ListItem>
            </List>
        </Box>
    )
}

export default OnlineFriends