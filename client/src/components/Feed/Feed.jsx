import * as React from 'react';
import { Box, Stack } from '@mui/material';
import FeedLeft from '../FeedLeft/FeedLeft';
import FeedRight from '../FeedRight/FeedRight';


const Feed = () => {
    return (
        <Box sx={{ minHeight: '38rem', backgroundColor: '#212832', borderRadius: '22px' }} flex={4} p={1}>
            <Stack direction="row" spacing={2} justifyContent="space-between">
                <FeedLeft />
                <FeedRight />
            </Stack>
        </Box>
    )
}

export default Feed