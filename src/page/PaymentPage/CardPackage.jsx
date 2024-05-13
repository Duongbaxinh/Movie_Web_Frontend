import { Box, Typography } from '@mui/material';
import React from 'react';
import StarsIcon from '@mui/icons-material/Stars';
const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
});
function CardPackage({ onSeleted, isSelected, price, postStar }) {
    return (
        <Box
            sx={{
                width: '257px',
                heigh: '116px',
                backgroundColor: isSelected ? '#3A1500' : '#353434',
                borderRadius: '10px',
                padding: '25px',
                textAlign: 'center'
            }}

        >
            <Box sx={{ display: 'flex', justifyContent: "center", alignItems: 'center' }}>
                <StarsIcon htmlColor='#F6891F' />
                <Typography variant='h2'  >
                    {postStar}
                </Typography>
            </Box>

            <Typography variant='h3' sx={{ color: '#D45312', lineHeight: '1.5' }}>
                {formatter.format(price)}
            </Typography>
        </Box >
    );
}

export default CardPackage;