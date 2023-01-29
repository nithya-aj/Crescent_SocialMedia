import React, { useEffect, useState } from 'react'
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Link from '@mui/joy/Link';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import { Box, Input, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { format } from 'timeago.js'
import Face from '@mui/icons-material/Face';
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import Comment from "../../img/comment.png";
import NotLike from "../../img/notlike.png";
import { useSelector } from "react-redux";
import { likePost } from '../../api/PostRequest';
import * as UserApi from '../../api/UserRequest.js'
import { useParams } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import { styled } from '@mui/material/styles';
import ImageIcon from '@mui/icons-material/Image';
import CommentSection from '../CommentSection/CommentSection';
import MoreOptions from '../MoreOptions/MoreOptions';

const Post = ({ data }) => {

    const { user } = useSelector((state) => state.authReducer.authData)
    const [liked, setLiked] = useState(data.likes.includes(user._id));
    const [likes, setLikes] = useState(data.likes.length)
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
    const [postUser, setPostUser] = useState({})
    const params = useParams()

    const profileUserId = params.id

    const handleLike = () => {
        setLiked((prev) => !prev);
        likePost(data._id, user._id);
        liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1)
        console.log(likes, 'likes')
    };

    // useEffect(() => {
    //     const fetchPostsUser = async () => {
    //         if (postUser === user._id) {
    //             setPostUser(user)
    //         } else {
    //             const { data } = await UserApi.getUser(profileUserId)
    //             setPostUser(data)
    //             console.log(data, '~~~~~~~~~~~~~~~~~~~~~~~~hohoohohoho~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    //         }
    //     }
    //     fetchPostsUser()
    // }, [])

    return (
        <Card
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
                        src={user._id === profileUserId ? user.profilePicture ? serverPublic + user.profilePicture : serverPublic + "defaultProfile.png" : postUser.profilePicture ? serverPublic + postUser.profilePicture : serverPublic + "defaultProfile.png"}
                        sx={{ border: '2px solid', borderColor: 'background.body' }}
                    />
                </Box>
                <Typography fontWeight="lg">{user._id === profileUserId ? user.firstname : postUser.firstname}</Typography>
                <IconButton variant="plain" color="neutral" size="sm" sx={{ ml: 'auto' }}>
                    <MoreOptions />
                </IconButton>
            </Box>
            <Box >
                <CardOverflow>
                    <AspectRatio sx={{ padding: '10px', borderRadius: '10px' }}>
                        <img style={{ borderRadius: '12px' }} src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""} alt="" loading="lazy" />
                    </AspectRatio>
                </CardOverflow>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mx: -1, my: 1, p: '0.5rem' }}>
                <Box sx={{ width: 0, display: 'flex', gap: 2 }}>
                    <IconButton variant="plain" color="neutral" size="sm">
                        <img src={liked ? Heart : NotLike} alt="" style={{ cursor: "pointer" }} onClick={handleLike} />
                    </IconButton>
                    <IconButton variant="plain" color="neutral" size="sm">
                        <img src={Comment} alt="" />
                    </IconButton>
                    <IconButton variant="plain" color="neutral" size="sm">
                        <img src={Share} alt="" />
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
                <Box sx={{ width: 0, display: 'flex', flexDirection: 'row-reverse' }}>
                    <IconButton variant="plain" color="neutral" size="sm">
                        <BookmarkBorderRoundedIcon />
                    </IconButton>
                </Box>
            </Box>
            <Link
                component="button"
                underline="none"
                fontSize="sm"
                fontWeight="lg"
                textColor="text.primary"
            >
                {likes} {data.likes.length <= 1 ? "Like" : "Likes"}
            </Link>
            <Typography fontSize="sm">
                <Link
                    component="button"
                    color="neutral"
                    fontWeight="lg"
                    textColor="text.primary"
                >
                    {data.name}
                </Link>{' '}
                {data.desc}
            </Typography>
            <Link
                component="button"
                underline="none"
                fontSize="10px"
                sx={{ color: 'text.tertiary', my: 0.5 }}
            >
                {format(data.createdAt)}
            </Link>
            <CommentSection data={data} />
        </Card>
    )
}

export default Post