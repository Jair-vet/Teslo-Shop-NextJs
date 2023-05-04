import { SearchOffOutlined, ShoppingCartOutlined } from "@mui/icons-material"
import { AppBar, Toolbar, Typography, Link, Box, Button, IconButton, Badge } from "@mui/material"
import NextLink from "next/link"

export const Navbar = () => {
  return (
    <AppBar>
        <Toolbar>
            <NextLink href='/' passHref legacyBehavior>
                <Link  display='flex' alignItems='center'>
                    <Typography variant="h6">Teslo |</Typography>
                    <Typography sx={{ ml: 0.5 }}>Shop |</Typography>
                </Link>
            </NextLink>


            {/* Categorias */}
            <Box flex={ 1 }/>
            
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <NextLink href='/category/men' passHref legacyBehavior>
                    <Link>
                        <Button>Hombres</Button>
                    </Link> 
                </NextLink>
                <NextLink href='/category/women' passHref legacyBehavior>
                    <Link>
                        <Button>Mujeres</Button>
                    </Link> 
                </NextLink>
                <NextLink href='/category/kid' passHref legacyBehavior>
                    <Link>
                        <Button>Niños</Button>
                    </Link> 
                </NextLink>
            </Box>

            <Box flex={ 1 }/>


            {/* Icono Busqueda */}
            <IconButton>
                <SearchOffOutlined />
            </IconButton>

            {/* Icono Carrito */}
            <NextLink href='/cart' passHref legacyBehavior>
                <Link>
                    <IconButton>
                        <Badge badgeContent={ 2 } color='secondary'>
                            <ShoppingCartOutlined />
                        </Badge>
                    </IconButton>
                </Link> 
            </NextLink>

            <Button>Menú</Button>

        </Toolbar>
    </AppBar>
  )
}