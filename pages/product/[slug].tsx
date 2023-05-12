import { ShopLayout } from "@/components/layouts"
import { ProductSlideshow, SizeSelector } from "@/components/products"
import { ItemCounter } from "@/components/ui"
import { dbProducts } from "@/database"
import { IProduct } from "@/interfaces"
import { Grid, Box, Typography, Button} from "@mui/material"
import { GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage } from "next"

interface Props {
  product: IProduct
}

const ProductPage:NextPage<Props> = ({ product }) => {

  // const router = useRouter()
  // const { products: product, isLoading } = useProducts<IProduct>(`/products/${ router.query.slug }`)


  return (
    // Navbar
    <ShopLayout title={ product.title } pageDescription={ product.description }>
      {/* Contenido de Productos */}
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
              <ItemCounter />
              {/* Tamaños de Ropa */}
              {/* <SizeSelector sizes={ product.sizes } selectedSize={ product.sizes[2] } /> */}
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

// getServerSideProps 
// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
//* No usar esto.... SSR
// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   
//   const { slug = '' } = params as { slug: string };
//   const product = await dbProducts.getProductBySlug( slug );
// 
//   if ( !product ) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false
//       }
//     }
//   }
// 
//   return {
//     props: {
//       product
//     }
//   }
// }

// getStaticPaths....
// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  
  const productSlugs = await dbProducts.getAllProductSlugs();

  
  return {
    paths: productSlugs.map( ({ slug }) => ({
      params: {
        slug
      }
    })),
    fallback: 'blocking'
  }
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  
  const { slug = '' } = params as { slug: string };
  const product = await dbProducts.getProductBySlug( slug );

  if ( !product ) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24
  }
}

export default ProductPage