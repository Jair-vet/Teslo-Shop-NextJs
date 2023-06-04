import NextLink from 'next/link';
import { Box, Button, Chip, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '@/components/layouts';
import { useForm } from 'react-hook-form';
import { validations } from '@/utils';
import { tesloApi } from '@/api';
import { ErrorOutline } from '@mui/icons-material';
import { useContext, useState } from 'react';
import { setTimeout } from 'timers';
import { AuthContext } from '@/context';
import { useRouter } from 'next/router';
import { getSession, signIn } from 'next-auth/react';
import { GetServerSideProps } from 'next';


type FormData = {
    email   : string,
    password: string,
};


const LoginPage = () => {

    const router = useRouter();
    const { loginUser } = useContext( AuthContext )
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [showError, setShowError] = useState(false)

    const onLoginUser = async( {email, password}: FormData ) => {

        setShowError(false)

//         const isValidLogin = await loginUser( email, password )
//         if ( !isValidLogin ) {
//             setShowError(true);
//             setTimeout(() => setShowError(false), 3000);
//             return;
//         }
//         Todo: navegar a la pantalla que el usuario estaba
//         const destination = router.query.p?.toString() || '/';
//         router.replace(destination);
        await signIn('credentials', { email, password }) 
    
    }

    return (
        <AuthLayout title={'Ingresar'}>
            <form onSubmit={ handleSubmit(onLoginUser) } noValidate>
                <Box sx={{ width: 350, padding:'10px 20px' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant='h1' component="h1">Iniciar Sesión</Typography>
                            <Chip 
                                label="No reconocemos este usuario / contraseña"
                                color='error'
                                icon={ <ErrorOutline /> }
                                className='fadeIn'
                                sx={{ display: showError ? 'flex' : 'none' }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField 
                                label="Correo" 
                                variant="filled" 
                                fullWidth 
                                { 
                                    ...register('email', ({
                                        required: 'Este campo es Requerido',
                                        validate: validations.isEmail
                                    })) 
                                }
                                error={ !!errors.email }
                                helperText={ errors.email?.message }
                                />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                label="Contraseña" 
                                type='password' 
                                variant="filled" 
                                fullWidth 
                                { 
                                    ...register('password', ({
                                        required: 'Este campo es Requerido',
                                        minLength: { value: 6, message: 'Mínimo 6 Caracteres'}
                                    })) 
                                }
                                error={ !!errors.password }
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Button 
                                type="submit"
                                color="secondary" 
                                className='circular-btn' 
                                size='large' 
                                fullWidth
                            >
                                Ingresar
                            </Button>
                        </Grid>

                        <Grid item xs={12} display='flex' justifyContent='end'>
                            <NextLink href={ router.query.p ? `/auth/register?p=${ router.query.p }`: '/auth/register' } passHref legacyBehavior>
                                <Link underline='always'>
                                    ¿No tienes cuenta?
                                </Link>
                            </NextLink>
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </AuthLayout>
  )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time


export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
    
    const session = await getSession({ req });
    // console.log({session});

    const { p = '/' } = query;

    if ( session ) {
        return {
            redirect: {
                destination: p.toString(),
                permanent: false
            }
        }
    }


    return {
        props: { }
    }
}


export default LoginPage