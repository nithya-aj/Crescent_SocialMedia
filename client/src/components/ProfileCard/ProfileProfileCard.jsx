import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/joy/Box';
import Avatar from '@mui/joy/Avatar';
import Divider from '@mui/material/Divider';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import * as UserApi from '../../api/UserRequest.js'

const ProfileProfileCard = () => {

    const { user } = useSelector((state) => state.authReducer.authData)
    const { posts } = useSelector((state) => state.postReducer)
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
    const params = useParams()
    const profileUserId = params.id
    const [profileCardUser, setProfileCardUser] = useState({})

    useEffect(() => {
        const fetchProfileCardUser = async () => {
            if (profileCardUser === user._id) {
                setProfileCardUser(user)
            } else {
                const { data } = await UserApi.getUser(profileUserId)
                setProfileCardUser(data)
                console.log(data, '~~~~~~~~data is from profile profile card~~~~~~~~~~~~');
            }
        }
        fetchProfileCardUser()
    }, [user])

    return (
        <Card sx={{ minWidth: '43rem', width: '16rem', borderRadius: '16px', backgroundColor: 'black', color: '#989080' }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="110"
                image={user._id === profileUserId ? user.coverPicture ? serverPublic + user.coverPicture : serverPublic + "defaultCover.jpg" : profileCardUser.coverPicture ? serverPublic + profileCardUser.coverPicture : serverPublic + "defaultCover.jpg"}
            />
            <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pb: 1.5, justifyContent: 'center' }}>
                    <Box
                        sx={{
                            marginTop: '-3rem',
                            position: 'relative',
                            '&:before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                m: '-2px',
                                borderRadius: '50%',
                                background:
                                    'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
                            },
                        }}
                    >
                        <Avatar
                            size="sm"
                            src={user._id === profileUserId ? user.profilePicture ? serverPublic + user.profilePicture : serverPublic + "defaultProfile.png" : profileCardUser.profilePicture ? serverPublic + profileCardUser.profilePicture : serverPublic + "defaultProfile.png"}
                            sx={{ border: '2px solid', borderColor: 'background.body', height: '4rem', width: '4rem' }}
                        />
                    </Box>
                </Box>
                {user._id === profileCardUser ?
                    <>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography gutterBottom variant="button" component="div" sx={{ fontSize: '25px' }}>
                                {user.firstname} {user.lastname}
                            </Typography>
                            <Typography gutterBottom variant="caption" sx={{ fontSize: '15px', marginTop: '-0.5rem' }}>
                                {user.worksAt ? user.worksAt : "Write about yourself"}
                            </Typography>
                        </Box>
                        <Divider sx={{ backgroundColor: '#989080' }} variant="middle" />
                        <Box sx={{ display: 'flex', justifyContent: 'space-around', p: '8px' }}>
                            <Box >
                                <Typography component='div' variant='caption' sx={{ fontSize: '14px', textAlign: 'center' }}>{user.followers.length}</Typography>
                                <Typography component='div' variant='caption' sx={{ fontSize: '14px' }}>Followers</Typography>
                            </Box>
                            <Divider sx={{ backgroundColor: '#989080' }} orientation="vertical" flexItem></Divider>
                            <Box >
                                <Typography component='div' variant='caption' sx={{ fontSize: '14px', textAlign: 'center' }}>{user.following.length}</Typography>
                                <Typography component='div' variant='caption' sx={{ fontSize: '14px' }}>Following</Typography>
                            </Box>
                            <Divider sx={{ backgroundColor: '#989080' }} orientation="vertical" flexItem></Divider>
                            <Box >
                                <Typography component='div' variant='caption' sx={{ fontSize: '14px', textAlign: 'center' }}>{posts.filter((post) => post.userId === user._id).length}</Typography>
                                <Typography component='div' variant='caption' sx={{ fontSize: '14px' }}>Posts</Typography>
                            </Box>
                        </Box>
                    </> :
                    <>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography gutterBottom variant="button" component="div" sx={{ fontSize: '25px' }}>
                                {profileCardUser.firstname} {profileCardUser.lastname}
                            </Typography>
                            <Typography gutterBottom variant="caption" sx={{ fontSize: '15px', marginTop: '-0.5rem' }}>
                                {profileCardUser.worksAt ? profileCardUser.worksAt : "Write about yourself"}
                            </Typography>
                        </Box>
                        <Divider sx={{ backgroundColor: '#989080' }} variant="middle" />
                        <Box sx={{ display: 'flex', justifyContent: 'space-around', p: '8px' }}>
                            <Box >
                                <Typography component='div' variant='caption' sx={{ fontSize: '14px', textAlign: 'center' }}>{profileCardUser.followers?.length}</Typography>
                                <Typography component='div' variant='caption' sx={{ fontSize: '14px' }}>Followers</Typography>
                            </Box>
                            <Divider sx={{ backgroundColor: '#989080' }} orientation="vertical" flexItem></Divider>
                            <Box >
                                <Typography component='div' variant='caption' sx={{ fontSize: '14px', textAlign: 'center' }}>{profileCardUser.following?.length}</Typography>
                                <Typography component='div' variant='caption' sx={{ fontSize: '14px' }}>Following</Typography>
                            </Box>
                            <Divider sx={{ backgroundColor: '#989080' }} orientation="vertical" flexItem></Divider>
                            <Box >
                                <Typography component='div' variant='caption' sx={{ fontSize: '14px', textAlign: 'center' }}>{posts.filter((post) => post.userId === profileCardUser._id)?.length}</Typography>
                                <Typography component='div' variant='caption' sx={{ fontSize: '14px' }}>Posts</Typography>
                            </Box>
                        </Box>
                    </>
                }
                <Divider sx={{ backgroundColor: '#989080' }} variant="middle" />
            </CardContent>
        </Card>
    )
}

export default ProfileProfileCard