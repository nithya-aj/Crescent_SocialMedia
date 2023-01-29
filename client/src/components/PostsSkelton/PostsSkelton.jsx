import * as React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Skeleton from '@mui/material/Skeleton';
import { Box } from '@mui/material';

function Media(props) {

    return (
        <Card sx={{ maxWidth: '44rem', m: 1, backgroundColor: 'black' }}>
            <CardHeader
                avatar={
                    <Skeleton sx={{ backgroundColor: '#1E1E1E' }} animation="wave" variant="circular" width={40} height={40} />
                }
                action={
                    null
                }
                title={
                    <Skeleton
                        sx={{ backgroundColor: '#1E1E1E' }}
                        animation="wave"
                        height={10}
                        width="90%"
                        style={{ marginBottom: 6 }}
                    />
                }
                subheader={
                    <Skeleton sx={{ backgroundColor: '#1E1E1E' }} animation="wave" height={10} width="40%" />
                }
            />
            <Box sx={{padding:'1rem'}}>
                <Skeleton sx={{ height: 190, backgroundColor: '#1E1E1E', borderRadius:'5px' }} animation="wave" variant="rectangular" />
            </Box>
            <CardContent>
                <React.Fragment>
                    <Skeleton sx={{ backgroundColor: '#1E1E1E' }} animation="wave" height={10} style={{ marginBottom: 6 }} />
                    <Skeleton sx={{ backgroundColor: '#1E1E1E' }} animation="wave" height={10} width="80%" />
                </React.Fragment>
            </CardContent>
        </Card>
    );
}

Media.propTypes = {
    loading: PropTypes.bool,
};

export default function Facebook() {
    return (
        <div>
            <Media loading />
            <Media loading />
        </div>
    );
}
