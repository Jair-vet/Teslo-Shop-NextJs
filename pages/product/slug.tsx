import { ShopLayout } from "@/components/layouts"
import { ProductSlideshow } from "@/components/products"
import { initialData } from "@/database/products"
import { Grid, Box, Typography, Button, Chip } from "@mui/material"


const product = initialData.products[0]


const ProductPage = () => {
  return (
    <ShopLayout title={ product.title } pageDescription={ product.description }>
      <Grid container spacing={ 3 }>
        <Grid item xs={ 12 } sm={ 7 }>
          {/* Slideshow */}
          <ProductSlideshow images={ product.images } />
        </Grid>

        {/* Product Info */}
        <Grid item xs={ 12 } sm={ 5 }>
          <Box display='flex' flexDirection='column'>

            {/* Titulo */}
            <Typography variant='h1' component='h1'>{ product.title }</Typography>
            {/* Precio */}
            <Typography variant='subtitle1' component='h2'>${ product.price }</Typography>
            {/* Cantidad */}
            <Box sx={{ my: 2 }}>
              <Typography variant='subtitle2'>Cantidad</Typography>
              {/* ItemCounter */}
            </Box>

            {/* Agregar al Carrito */}
            <Button color="secondary" className="circular-btn">
              Agregar al Carrito
            </Button>
            {/* Cuando no hay Disponibles */}
            {/* <Chip label='No hay Disponibles' color='error' variant="outlined"/> */}

            {/* Descripción */}
            <Box sx={{ mt:3 }}>
              <Typography variant='subtitle2'>Descripcion</Typography>
              <Typography variant='body2'>{ product.description }</Typography>
            </Box>

          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default ProductPage