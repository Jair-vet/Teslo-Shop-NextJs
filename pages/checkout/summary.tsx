import NextLink from 'next/link';

import { Link, Box, Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material';

import { ShopLayout } from '../../components/layouts/ShopLayout';
import { CartList, OrderSummary } from '../../components/cart';


const SummaryPage = () => {
  return (
    <ShopLayout title='Resumen de orden' pageDescription={'Resumen de la orden'}>
        <Typography variant='h1' component='h1'>Resumen de la Orden</Typography>

        <Grid container>
            <Grid item xs={ 12 } sm={ 7 }>
                <CartList />
            </Grid>
            <Grid item xs={ 12 } sm={ 5 } sx={{ mt: 8 }}>
                <Card className='summary-card'>
                    <CardContent>
                        <Typography variant='h2'>Resumen (3 productos)</Typography>
                        <Divider sx={{ my:1 }} />

                        <Box display='flex' justifyContent='space-between'>
                            <Typography variant='subtitle1'>Dirección de entrega</Typography>
                            <NextLink href='/checkout/address' passHref legacyBehavior>
                                <Link style={{ 
                                    backgroundColor: '#8121d4', 
                                    padding: '10px', 
                                    color: '#fff', 
                                    borderRadius: '8px' , 
                                    width: '80px',
                                    textAlign: 'center',
                                    fontWeight: '600',
                                    textTransform: 'uppercase',
                                    fontSize: '12px',
                                }} className='edit-btn'>
                                    Editar
                                </Link>
                            </NextLink>
                        </Box>

                        
                        <Typography>Jair Aceves</Typography>
                        <Typography>323 Algun lugar</Typography>
                        <Typography>Stittsville, HYA 23S</Typography>
                        <Typography>Canadá</Typography>
                        <Typography>+1 23123123</Typography>

                        <Divider sx={{ my:1 }} />

                        <Box display='flex' justifyContent='end'>
                            <NextLink href='/cart' passHref legacyBehavior>
                                <Link style={{ 
                                    backgroundColor: '#8121d4', 
                                    padding: '10px', 
                                    color: '#fff', 
                                    borderRadius: '8px' , 
                                    width: '80px',
                                    textAlign: 'center',
                                    fontWeight: '600',
                                    textTransform: 'uppercase',
                                    fontSize: '12px',
                                }} className='edit-btn'>
                                    Editar
                                </Link>
                            </NextLink>
                        </Box>

                        <OrderSummary />

                        <Box sx={{ mt: 3 }}>
                            <Button color="secondary" className='circular-btn' fullWidth>
                                Confirmar Orden
                            </Button>
                        </Box>

                    </CardContent>
                </Card>
            </Grid>
        </Grid>


    </ShopLayout>
  )
}

export default SummaryPage;