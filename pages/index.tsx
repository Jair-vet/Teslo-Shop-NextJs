import { ShopLayout } from '@/components/layouts'
import { ProductList } from '@/components/products'
import { Typography } from '@mui/material'
import { Inter } from 'next/font/google'
import { useProducts } from '../hooks'


const inter = Inter({ subsets: ['latin'] })


export default function HomePage() {

  const { products, isLoading } = useProducts('/products')

  return (
    <ShopLayout title={'Teslo-Shop - Home'} pageDescription={'Encuentra los mejores productos aqui en Teslo'}>
      <Typography variant='h1' component='h1'>Tienda</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>Todos los productos</Typography>

      {
        isLoading
          ? <h1>Cargando...</h1>
          : <ProductList products={ products }/>
      }

    </ShopLayout>
  )
}
