import { ShopLayout } from '@/components/layouts'
import { ProductList } from '@/components/products'
import { Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

import useSWR from 'swr'
const fetcher = (...args: [key: string]) => fetch(...args).then(res => res.json())

export default function HomePage() {

  const { data, error, isLoading } = useSWR('/api/products', fetcher)

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <ShopLayout title={'Teslo-Shop - Home'} pageDescription={'Encuentra los mejores productos aqui en Teslo'}>
      <Typography variant='h1' component='h1'>Tienda</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>Todos los productos</Typography>

      <ProductList 
        products={ data }        
      />

    </ShopLayout>
  )
}
