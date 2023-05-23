import { CartContext } from "@/context"
import { Grid, Typography } from "@mui/material"
import { useContext } from "react"

export const OrderSummary = () => {

    const { numberOfItems, subTotal, tax, total } = useContext( CartContext )

    return (
        <Grid container>
        
            <Grid item xs={6}>
                <Typography>No. Productos</Typography>
            </Grid>
            <Grid item xs={6} display='flex' justifyContent='end'>
                <Typography>{ numberOfItems } { numberOfItems > 1 ? 'productos' : 'producto' }</Typography>
            </Grid>

            <Grid item xs={6}>
                <Typography>SubTotal</Typography>
            </Grid>
            <Grid item xs={6} display='flex' justifyContent='end'>
                <Typography>{ subTotal.toFixed(2) }</Typography>
            </Grid>

            <Grid item xs={6}>
                <Typography>Impuestos ({ Number(process.env.NEXT_PUBLIC_TAX_RATE) * 100 } %)</Typography>
            </Grid>
            <Grid item xs={6} display='flex' justifyContent='end'>
                <Typography>{ tax.toFixed(2) }</Typography>
            </Grid>

            <Grid item xs={6} sx={{ mt:2 }}>
                <Typography variant="subtitle1">Total:</Typography>
            </Grid>
            <Grid item xs={6} sx={{ mt:2 }} display='flex' justifyContent='end'>
                <Typography variant="subtitle1">{ total.toFixed(2) }</Typography>
            </Grid>

        </Grid>    
    )
}
