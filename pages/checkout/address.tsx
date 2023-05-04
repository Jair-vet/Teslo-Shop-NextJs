import { ShopLayout } from "@/components/layouts"
import { Box, Button, FormControl, Grid, MenuItem, Select, TextField, Typography } from "@mui/material"

const AddresPage = () => {
  return (
    <ShopLayout title="Dirección" pageDescription="Confirmar dirección del destino">
        <Typography variant="h1" component='h1'>Datos del Comprador</Typography>

        <Grid container spacing={ 2 } sx={{ mt: 2 }}>
            
            <Grid item xs={12} sm={ 6 }>
                <TextField label='Nombre' variant="filled" fullWidth />
            </Grid>
            <Grid item xs={12} sm={ 6 }>
                <TextField label='Apellido' variant="filled" fullWidth />
            </Grid>

            <Grid item xs={12} sm={ 6 }>
                <TextField label='Dirección' variant="filled" fullWidth />
            </Grid>
            <Grid item xs={12} sm={ 6 }>
                <TextField label='Dirección 2 (opcional)' variant="filled" fullWidth />
            </Grid>

            <Grid item xs={12} sm={ 6 }>
                <TextField label='Código Postal' variant="filled" fullWidth />
            </Grid>
            <Grid item xs={12} sm={ 6 }>
                <TextField label='Ciudad' variant="filled" fullWidth />
            </Grid>
            
            <Grid item xs={12} sm={ 6 }>
                <FormControl fullWidth>
                    <Select
                        variant="filled"
                        label="País"
                        value={1}
                    >
                        <MenuItem value={1}>México</MenuItem>
                        <MenuItem value={2}>Costa Rica</MenuItem>
                        <MenuItem value={3}>Honduras</MenuItem>
                        <MenuItem value={4}>El Salvador</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={ 6 }>
                <TextField label='Teléfono' variant="filled" fullWidth />
            </Grid>

        </Grid>


        <Box sx={{ mt: 5 }} display='flex' justifyContent='space-around'>
            <Grid item xs={12} sm={ 6 }>
                <Button color="secondary" className="circular-btn" size="large">
                    Revisar el Pedido
                </Button>
            </Grid>
            <Grid item xs={12} sm={ 6 }>
                <Button color="error" className="error-btn" size="large">
                    Continuar con el Pago
                </Button>
            </Grid>
        </Box>

    </ShopLayout>
  )
}

export default AddresPage