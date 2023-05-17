import { FC, useContext } from 'react';
import NextLink from 'next/link';
import { Box, Button, CardActionArea, CardMedia, Grid, Link, Typography } from '@mui/material';
import { CartContext } from '@/context';
import { ItemCounter } from '../ui';



interface Props {
    editable?: boolean;
}

export const CartList: FC<Props> = ({ editable = false }) => {

    const { cart } = useContext( CartContext )
  return (
    <>
        {
            cart.map( product => (
                <Grid container spacing={2} key={ product.slug } sx={{ mb:1, mt: 3 }}>
                    {/* Imagen del Producto */}
                    <Grid item xs={3}>
                        {/* TODO: llevar a la página del producto */}
                        <NextLink href="/product/slug" passHref legacyBehavior>
                            <Link>
                                <CardActionArea>
                                    <CardMedia 
                                        image={ `/products/${ product.image }` }
                                        component='img'
                                        sx={{ borderRadius: '8px' }}
                                    />
                                </CardActionArea>
                            </Link>
                        </NextLink>
                    </Grid>
                    {/* Informacion del Producto */}
                    <Grid item xs={7}>
                        <Box display='flex' flexDirection='column'>
                            <Typography variant='body1'>{ product.title }</Typography>
                            <Typography variant='body1'>Talla: <strong>M</strong></Typography>

                            {
                                editable 
                                ?  (
                                        <ItemCounter 
                                            currentValue={ product.quantity } 
                                            maxValue={ 10 } 
                                            updatedQuantity={ () => {}}                                       
                                        />
                                    )
                                : (
                                    <Typography variant='h5'>{ product.quantity } { product.quantity > 1 ? 'productos' : 'producto'}</Typography>
                                  )
                            }
                            
                        </Box>
                    </Grid>
                    {/* Precio y eliminar Producto */}
                    <Grid item xs={2} display='flex' alignItems='center' flexDirection='column'>
                        <Typography variant='subtitle1'>{ `$${ product.price }` }</Typography>
                        
                        {
                            editable && (
                                <Button variant='text' color='secondary' >
                                    Remover
                                </Button>
                            )
                        }
                    </Grid>
                </Grid>
            ))
        }
    </>
  )
}