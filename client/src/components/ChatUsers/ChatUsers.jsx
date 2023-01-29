import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const ChatUsers = () => {
    return (
        <>
            <Typography variant='h5' marginBottom={'1.5rem'}>Chats</Typography>

            {/* <Box >
                <List sx={{ bgcolor: '#4E5D78', borderRadius:'8px', paddingLeft:'8px'}} disablePadding>
                    <ListItem alignItems="flex-start" sx={{ gap: '0.5rem' }} disablePadding>
                        <ListItemAvatar >
                            <Avatar alt="Remy Sharp" src='df' sx={{ height: '2.5rem', width: '2.5rem' }} />
                        </ListItemAvatar>
                        <ListItemText
                            primary='fsdfsd'
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        variant="body2"
                                        color="white"
                                    >
                                        dfsdfsd
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>
            </Box> */}

            <Card sx={{ maxWidth: 345, backgroundColor: '#4E5D78', color: 'white', marginBottom:'1rem', borderRadius:'8px'}} >
                <CardActionArea>
                    <ListItem alignItems="flex-start" sx={{ paddingLeft: '1rem' }} disablePadding>
                        <ListItemAvatar >
                            <Avatar alt="Remy Sharp" src='df' sx={{ height: '2.5rem', width: '2.5rem' }} />
                        </ListItemAvatar>
                        <ListItemText
                            primary='fsdfsd'
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        variant="body2"
                                        color="#191C21"
                                    >
                                        dfsdfsd
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 345, backgroundColor: '#4E5D78', color: 'white', marginBotton:'1rem', borderRadius:'8px'}}>
                <CardActionArea>
                    <ListItem alignItems="flex-start" sx={{ paddingLeft: '1rem' }} disablePadding>
                        <ListItemAvatar >
                            <Avatar alt="Remy Sharp" src='df' sx={{ height: '2.5rem', width: '2.5rem' }} />
                        </ListItemAvatar>
                        <ListItemText
                            primary='fsdfsd'
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        variant="body2"
                                        color="#191C21"
                                    >
                                        dfsdfsd
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </CardActionArea>
            </Card>

        </>

    )
}

export default ChatUsers