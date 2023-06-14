import { SummaryTile } from '@/components/admin'
import { AdminLayout } from '@/components/layouts'
import { AccessTimeOutlined, AttachMoneyOutlined, CancelPresentationOutlined, CategoryOutlined, CreditCardOffOutlined, CreditCardOutlined, DashboardOutlined, GroupOutlined, ProductionQuantityLimitsOutlined, ProductionQuantityLimitsSharp } from '@mui/icons-material'
import React from 'react'
import useSWR from 'swr'
import { DashboardSummaryResponse } from '@/interfaces';
import { Grid } from '@mui/material'

const DashboardPage = () => {

    const { data, error } = useSWR<DashboardSummaryResponse>('/api/admin/dashboard', {
        refreshInterval: 30 * 1000 // 30s
    })




    // const {
    //     numberOfOrders,
    // } = data!;

  return (
    <AdminLayout
        title='Dashboard'
        subTitle='Estadisticas generales'
        icon={<DashboardOutlined />}
    >
        <Grid container spacing={2}>

            <SummaryTile
                title={'10'}
                // title={ numberOfOrders }
                subTitle="Ordenes Totales"
                icon={<CreditCardOutlined color="secondary" sx={{ fontSize: 40 }} />}
            />
            <SummaryTile
                title={'10'}
                // title={ numberOfOrders }
                subTitle="Ordenes Pagadas"
                icon={<AttachMoneyOutlined color="success" sx={{ fontSize: 40 }} />}
            />
            <SummaryTile
                title={'10'}
                // title={ numberOfOrders }
                subTitle="Ordenes Pendientes"
                icon={<CreditCardOffOutlined sx={{ fontSize: 40, color: '#EEBC03' }} />}
            />
            <SummaryTile
                title={'10'}
                // title={ numberOfOrders }
                subTitle="Clientes"
                icon={<GroupOutlined color="warning" sx={{ fontSize: 40 }} />}
            />
            <SummaryTile
                title={'10'}
                // title={ numberOfOrders }
                subTitle="Productos"
                icon={<CategoryOutlined sx={{ fontSize: 40, color: '#D325C9' }} />}
            />
            <SummaryTile
                title={'10'}
                // title={ numberOfOrders }
                subTitle="Sin Existencias"
                icon={<CancelPresentationOutlined color="error" sx={{ fontSize: 40 }} />}
            />
            <SummaryTile
                title={'10'}
                // title={ numberOfOrders }
                subTitle="Bajo Invertarios"
                icon={<ProductionQuantityLimitsOutlined  sx={{ fontSize: 40, color: '#8515AF' }} />}
            />
            <SummaryTile
                title={'10'}
                // title={ numberOfOrders }
                subTitle="Actualizacion en:"
                icon={<AccessTimeOutlined color="disabled" sx={{ fontSize: 40 }} />}
            />
        </Grid>

    </AdminLayout>

  )
}

export default DashboardPage