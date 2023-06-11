import NextLink from 'next/link';

import { Typography, Grid, Chip, Link } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

import { ShopLayout } from '../../components/layouts';
import { dbOrders } from '@/database';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]';
import { GetServerSideProps, NextPage } from 'next';
import { IOrder } from '@/interfaces';



const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'fullname', headerName: 'Nombre Completo', width: 300 },

    {
        field: 'paid',
        headerName: 'Pagada',
        description: 'Muestra información si está pagada la orden o no',
        width: 200,
        renderCell: ( params: GridRenderCellParams ) => {
            return (
                params.row.paid
                    ? <Chip color="success" label="Pagada" variant='outlined' style={{ width: '100%' }}/>
                    : <Chip color="error" label="No pagada" variant='outlined' style={{ width: '100%' }}/>
            )
        }
    },
    {
        field: 'orden',
        headerName: 'Ver orden',
        width: 200,
        sortable: false,
        renderCell: ( params: GridRenderCellParams ) =>  {
            return (
               <NextLink href={`/orders/${ params.row.orderId }`} passHref legacyBehavior>
                    <Link style={{ 
                            backgroundColor: '#3A64D8', 
                            padding: '10px', 
                            color: '#fff', 
                            borderRadius: '8px' , 
                            width: '100%',
                            textAlign: 'center',
                            fontWeight: '600',
                            textTransform: 'uppercase',
                            fontSize: '12px',
                            textDecoration: 'none',
                        }} className='circular-btn'>
                        Ver orden
                    </Link>
               </NextLink>
            )
        }
    }
];

interface Props {
    orders: IOrder[]
}

const HistoryPage:NextPage<Props> = ({ orders }) => {
    
    const rows = orders.map((order, index) => ({
        id: index + 1,
        paid: order.isPaid,
        fullname: `${order.shippingAddress.firstName} ${order.shippingAddress.lastName}`,
        orderId: order._id
    }))

    return (
        <ShopLayout title={'Historial de ordenes'} pageDescription={'Historial de ordenes del cliente'}>
            <Typography variant='h1' component='h1'>Historial de ordenes</Typography>


            <Grid container>
                <Grid item xs={12} sx={{ height:650, width: '100%' }}>
                    <DataGrid 
                        rows={ rows }
                        columns={ columns }
                        initialState={{
                        pagination: { 
                            paginationModel: { pageSize: 5 } 
                        },
                        }}
                        pageSizeOptions={[5, 10, 25]}
                    />

                </Grid>
            </Grid>

        </ShopLayout>
    )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({req, res}) => {
    const session: any = await getServerSession(req, res, authOptions)
  
    if(!session) {
      return {
        redirect: {
          destination: '/auth/login?p=/orders/history',
          permanent: false
        }
      }
    }
    const userId = session.user.user.id ? session.user.user.id : session.user.user._id;
    const orders = await dbOrders.getOrdersByUser(userId)
  
    return {
      props: {
        orders
      }
    }
}
export default HistoryPage