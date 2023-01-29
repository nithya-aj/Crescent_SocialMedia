import { Avatar, Box, ListItemAvatar, Typography } from '@mui/material'
import React from 'react'
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const ChatScreen = () => {
    return (
        <Box flex={3} p={2} sx={{ maxHeight: '40rem',minHeight:'633px', backgroundColor: '#191C21', borderRadius: '12px 12px 0px 0px' }}>
            <Typography variant='h6' sx={{ marginLeft: '1rem' }}>Niya</Typography> <br />
            <Divider sx={{ backgroundColor: '#4E5D78', marginBottom: '1rem' }} />
            <Box >
                <Grid container spacing={1} sx={{ direction: 'row', alignItems: 'center' }}>
                    <Grid item xs={1} >
                        <Item sx={{ backgroundColor: 'transparent' }}>
                            <ListItemAvatar >
                                <Avatar alt="Remy Sharp" src='df' sx={{ height: '2.5rem', width: '2.5rem' }} />
                            </ListItemAvatar>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>this is my first and last and middle and third and fourth and fifth and sixth and seventh and eight and tenth something </Item>
                    </Grid>
                </Grid>
            </Box> <br />
            <Box >
                <Grid container spacing={1} direction={'row'} justifyContent={'flex-end'} sx={{ direction: 'row', alignItems: 'center' }}>
                    <Grid item xs={6} >
                        <Item>India is my country all indians are my brothers and sisters and I love my country and i am proud of its rich and varied heritage.</Item>
                    </Grid>
                    <Grid item xs={1}>
                        <Item sx={{ backgroundColor: 'transparent' }}>
                            <ListItemAvatar >
                                <Avatar alt="Remy Sharp" src='df' sx={{ height: '2.5rem', width: '2.5rem' }} />
                            </ListItemAvatar>
                        </Item>
                    </Grid>
                </Grid>
            </Box> <br />
            <Box >
                <Grid container spacing={1} direction={'row'} justifyContent={'flex-end'} sx={{ direction: 'row', alignItems: 'center' }}>
                    <Grid item xs={6} >
                        <Item>India is my country all indians are my brothers and sisters and I love my country and i am proud of its rich and varied heritage.</Item>
                    </Grid>
                    <Grid item xs={1}>
                        <Item sx={{ backgroundColor: 'transparent' }}>
                            <ListItemAvatar >
                                <Avatar alt="Remy Sharp" src='df' sx={{ height: '2.5rem', width: '2.5rem' }} />
                            </ListItemAvatar>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
            <br />
            <Box >
                <Grid container spacing={1} sx={{ direction: 'row', alignItems: 'center' }}>
                    <Grid item xs={1} >
                        <Item sx={{ backgroundColor: 'transparent' }}>
                            <ListItemAvatar >
                                <Avatar alt="Remy Sharp" src='df' sx={{ height: '2.5rem', width: '2.5rem' }} />
                            </ListItemAvatar>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>this is my first and last and middle and third and fourth and fifth and sixth and seventh and eight and tenth something </Item>
                    </Grid>
                </Grid>
            </Box> <br />
            
            <Box sx={{ display: 'flex', alignItems: 'end', marginTop:'11.5rem', position:'fixed' }}>
                <Paper
                    component="form"
                    sx={{
                        p: '2px 4px', display: 'flex', alignItems: 'center', width: '50rem', marginLeft: '1.5rem',
                        backgroundColor: "#4E5D78", height: '2.4rem'
                    }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1, color: 'white' }}
                        placeholder="Write something..."
                    />
                    <Divider sx={{ height: 28, m: 0.5, backgroundColor: '#242B37' }} orientation="vertical" />
                    <IconButton color="white" sx={{ p: '10px' }} aria-label="directions">
                        <SendIcon />
                    </IconButton>
                </Paper>
            </Box>
        </Box>
    )
}

export default ChatScreen