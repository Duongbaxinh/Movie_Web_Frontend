import { Box, Chip, Divider, Typography } from '@mui/material';
import { PayPalButtons } from "@paypal/react-paypal-js";
import StarsIcon from '@mui/icons-material/Stars';
import paypalImage from '../../assets/images/paypal-logo.png'
import React, { useState } from 'react';
import CardPackage from './CardPackage';
import { useParams } from 'react-router-dom';

function PaymentPage(props) {
    const { postStar } = useParams()
    const [isSelected, setIsSelected] = useState({
        selected: 1,
        data: {
            price: 22000,
            postStar: 220
        }
    })
    const handleSelected = (id, data) => {
        setIsSelected({ id: id, data: data })

    }
    const createOrder = async (data) => {
        // Order is created on the server and the order id is returned
        const response = await fetch("https://movie-web-backend-2pz8.onrender.com/api/v1/payment/createOrder", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ4aW5oQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzEwODMzOTU3LCJleHAiOjE3MTM0MjU5NTd9.wKVrmWq52yKqDdToG79rogyZGpRUQrbSOLky4kXT3u8'
            },

            body: JSON.stringify({
                data: { ...isSelected.data }
            }),
        });
        const order = await response.json();
        return order.id;
    };
    const onApprove = async (data) => {
        // Order is captured on the server and the response is returned to the browser
        const response = await fetch("https://movie-web-backend-2pz8.onrender.com/api/v1/payment/capture", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ4aW5oQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzEwODMzOTU3LCJleHAiOjE3MTM0MjU5NTd9.wKVrmWq52yKqDdToG79rogyZGpRUQrbSOLky4kXT3u8'
            },
            body: JSON.stringify({
                orderID: data.orderID,
                data: isSelected.data
            })
        });

        const check = await response.json();
        return check;
    };
    return (
        <Box sx={{
            paddingTop: '100px',
            width: '100vw', height: '100%',
            display: 'flex',
            justifyContent: "center",
            alignItems: 'center'
        }}>
            <Box sx={{
                width: '1000px',
                margin: '0 auto',
                padding: '40px 102px',
                backgroundColor: '#242424',
                borderRadius: '20px'
            }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant='h1'>
                        NẠP POPS STARS:
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: "center", alignItems: 'center' }}>
                        <StarsIcon htmlColor='#F6891F' />
                        <Typography variant='h2'  >
                            {postStar}
                        </Typography>
                    </Box>
                </Box>
                <Divider sx={{ backgroundColor: 'white', margin: '15px 0' }} />

                <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: '20px', alignItems: 'center' }}>
                    <Chip label='1' sx={{ backgroundColor: 'white', fontWeight: '700', fontSize: '15px' }} />
                    <Typography variant='h3'>Lựa chọn gói</Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: '20px' }} >
                    {[{ id: 1, price: 22000, postStar: 220 }, { id: 2, price: 690000, postStar: 690 }, { id: 3, price: 109000, postStar: 1090 }]
                        .map(({ id, price, postStar }) => (
                            <Box key={id} onClick={() => handleSelected(id, { price: price, postStar: postStar })} sx={{ cursor: 'pointer' }}>
                                <CardPackage key={id} isSelected={isSelected.selected === id} price={price} postStar={postStar} />
                            </Box>
                        ))}
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: '20px', alignItems: 'center', padding: '20px 0' }}>
                    <Chip label='2' sx={{ backgroundColor: 'white', fontWeight: '700', fontSize: '15px' }} />
                    <Typography variant='h3'>Lựa chọn hình thức thanh toán</Typography>
                </Box>


                <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '20px 0' }} >
                    <Box sx={{ width: '190px', height: '137px', backgroundColor: '#353434', border: '1px solid orange', borderRadius: '15px' }}>
                        <img src={paypalImage} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </Box>
                </Box>

                <PayPalButtons
                    createOrder={(data, actions) => createOrder(data, actions)}
                    onApprove={(data, actions) => onApprove(data, actions)}
                />

            </Box>

        </Box >
    );
}

export default PaymentPage;