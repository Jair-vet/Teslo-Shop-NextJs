import { ShopLayout } from "@/components/layouts"
import { Box, Typography } from "@mui/material"

const Custom404 = () => {
  return (
    <ShopLayout title={"Page not Found"} pageDescription={"No hay nada que mostrar aquí"}>
        <Box 
            display='flex' 
            justifyContent='center' 
            alignItems='center' 
            height='calc(100vh - 200px)'
            sx={{ flexDirection: { xs: 'column', sm: 'row'} }}
        >
            <Typography variant="h1" component='h1' fontSize={80} fontWeight={200}>404 |</Typography>
            <Typography marginLeft={2}>No se Encontro una Página Aquí</Typography>
        </Box>
    </ShopLayout>
  )
}

export default Custom404