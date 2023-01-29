// import { Box } from '@mui/material'
import TextField from '@mui/joy/TextField';
import Box from '@mui/joy/Box';
import Avatar from '@mui/joy/Avatar';
import Button from '@mui/joy/Button'
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import SendIcon from '@mui/icons-material/Send';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PlaceIcon from '@mui/icons-material/Place';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AspectRatio from '@mui/joy/AspectRatio';
import CardOverflow from '@mui/joy/CardOverflow';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uploadImage, uploadPost } from '../../actions/uploadAction';

const PostShare = () => {

    const [image, setImage] = useState(null)
    const imageRef = useRef()
    const { user } = useSelector((state) => state.authReducer.authData)
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
    const desc = useRef()
    const dispatch = useDispatch()

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage(img)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            userId: user._id,
            desc: desc.current.value
        }
        if (image) {
            const data = new FormData();
            const fileName = Date.now() + image.name;
            data.append("name", fileName);
            data.append("file", image);
            newPost.image = fileName;
            console.log(newPost);
            try {
                dispatch(uploadImage(data));
            } catch (err) {
                console.log(err, 'this is error from postshare.jsx');
            }
        }
        dispatch(uploadPost(newPost));
    }

    return (
        <Card
            variant="outlined"
            sx={{
                borderRadius: '22px',
                backgroundColor: 'black',
                color: 'white',
                minWidth: 300,
                '--Card-radius': (theme) => theme.vars.radius.xs,
                margin: '8px'
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', pb: 1.5, gap: 1 }}>
                <Box
                    sx={{
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
                        src={user.profilePicture ? serverPublic + user.profilePicture : serverPublic + "defaultProfile.png"}
                        sx={{ border: '2px solid', borderColor: 'background.body', height:'4rem', width:'4rem' }}
                    />
                </Box>
                <Box sx={{ padding: '10px', width: '34rem' }} >
                    <input
                        style={{ borderRadius: '9px',
                        width: '35rem',
                        height:' 2rem',
                      borderColor: 'red'}}
                    ref={desc}
                    placeholder={`What's happening...`}
                    variant="outlined"
                    color="neutral"
                    />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mx: -1, my: 1 }}>
                <Box sx={{ paddingLeft: '2rem', width: 0, display: 'flex', gap: 6 }}>
                    <IconButton color="primary" aria-label="upload picture" component="label" onClick={() => imageRef.current.click()}>
                        <input hidden accept="image/*" type="file" />
                        <AddPhotoAlternateIcon /><Typography>Image</Typography>
                    </IconButton>
                    <IconButton variant="plain" color="neutral" size="lg">
                        <PlayCircleOutlineIcon /><Typography>Video</Typography>
                    </IconButton>
                    <IconButton variant="plain" color="neutral" size="lg">
                        <PlaceIcon /><Typography>Location</Typography>
                    </IconButton>
                    <IconButton variant="plain" color="neutral" size="lg" sx={{ marginX: '1rem' }}>
                        <CalendarMonthIcon /><Typography>Schedule</Typography>
                    </IconButton>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mx: 'auto' }}>
                    {[...Array(5)].map((_, index) => (
                        <Box
                            key={index}
                            sx={{
                                borderRadius: '50%',
                                width: `max(${6 - index}px, 3px)`,
                                height: `max(${6 - index}px, 3px)`,
                                bgcolor: index === 0 ? 'primary.solidBg' : 'background.level3',
                            }}
                        />
                    ))}
                </Box>
                <Box sx={{ paddingRight: '25px', width: 0, display: 'flex', flexDirection: 'row-reverse' }}>
                    <Button variant="soft" endDecorator={<SendIcon />} sx={{ backgroundColor: 'darkgrey' }}
                        onClick={handleSubmit} >
                        Share
                    </Button>
                    <div style={{ display: 'none' }}>
                        <input type="file" name='myImage' ref={imageRef} onChange={onImageChange} />
                    </div>
                </Box>
            </Box>
            {image && (<Box >
                <CardOverflow >
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}><HighlightOffIcon onClick={() => setImage(null)} /></Box>
                    <AspectRatio sx={{ padding: '10px', borderRadius: '10px' }}>
                        <img style={{ borderRadius: '12px' }} src={URL.createObjectURL(image)} alt="" />
                    </AspectRatio>
                </CardOverflow>
            </Box>)}
        </Card>
    )
}

export default PostShare