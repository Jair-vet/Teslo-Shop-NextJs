import { CartList, OrderSummary } from "@/components/cart"
import { ShopLayout } from "@/components/layouts"
import { Card, CardContent, Grid, Typography, Divider, Box, Button } from "@mui/material"

const CartPage = () => (
    <ShopLayout title={"Carrito - 3"} pageDescription={"Carrito de compras de la Tienda"}>
        <Typography variant="h1" component="h1">Carrito</Typography>

        <Grid container>
            {/* CardList */}
            <Grid item xs={12} sm={7}>
                <CartList editable/>
            </Grid>

            {/* Datos Compra */}
            <Grid item xs={12} sm={5} sx={{ mt: 8 }}>
                <Card className='summary-card'>
                    <CardContent>
                        <Typography
                            variant="h2"
                            style={{
                                textAlign: 'center',
                                textTransform: 'uppercase',
                                fontWeight: 'bold'
                            }}
                        >Orden</Typography>
                        <Divider sx={{ my: 1 }} />

                        {/* Orden Summary */}
                        <OrderSummary />

                        <Box sx={{ mt: 3 }}>
                            <Button color="secondary" className='circular-btn' fullWidth>
                                Checkout
                            </Button>
                        </Box>

                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </ShopLayout>
)

export default CartPage