import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { styled } from '@mui/material/styles';
import Face from '@mui/icons-material/Face';
import { Avatar, IconButton, Input, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import CardOverflow from '@mui/joy/CardOverflow';
import Link from '@mui/joy/Link';
import { useDispatch, useSelector } from 'react-redux';
// import { commentPost } from '../../actions/PostActions'

const CommentSection = ({ data }) => {

    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));

    const [comments, setComments] = useState([1, 2, 3, 4, 5])
    const [comment, setComment] = useState('')
    const [expanded, setExpanded] = React.useState(false);
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.authReducer.authData)

    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    const handleCommentClick = () => {
        // const finalComment = `${user.firstname}: ${comment}`
        // dispatch(commentPost(finalComment, data._id))
    }

    return (
        <>
            <CardOverflow sx={{ p: 'var(--Card-padding)', display: 'flex' }}>
                {user?.firstname && (
                    <>
                        <IconButton size="sm" variant="plain" color="neutral" sx={{ ml: -1 }}>
                            <Face sx={{ color: 'white' }} />
                        </IconButton>
                        <Input
                            variant="plain"
                            size="sm"
                            placeholder="Add a comment…"
                            sx={{ flexGrow: 1, mr: 1, '--Input-focusedThickness': '0px', color: 'white', backgroundColor: '#1E1E1E', borderRadius: '22px', paddingLeft: '1rem' }}
                            value={comment}
                            onChange={e => setComment(e.target.value)}
                        />
                        <Link underline="none" role="button" style={{ cursor: 'pointer' }} disabled={!comment}
                            onClick={handleCommentClick}
                        >
                            Post
                        </Link>
                    </>
                )}
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    sx={{ color: 'white' }}
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardOverflow>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <List>
                    {comments.map((c, i) => (
                        <ListItem key={i}>
                            <ListItemAvatar>
                                <Avatar sx={{ backgroundColor: '#1E1E1E' }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                            <ListItemText primary={<Typography>Comment {i}</Typography>} secondary={<Typography style={{ color: '#737373' }}>Jan 9, 2014</Typography>} />
                        </ListItem>
                    ))}
                </List>
            </Collapse>
        </>
    )
}

export default CommentSection