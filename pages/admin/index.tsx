import { SummaryTile } from '@/components/admin'
import { AdminLayout } from '@/components/layouts'
import { AccessTimeOutlined, AttachMoneyOutlined, CancelPresentationOutlined, CategoryOutlined, CreditCardOffOutlined, CreditCardOutlined, DashboardOutlined, GroupOutlined, ProductionQuantityLimitsOutlined, ProductionQuantityLimitsSharp } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import { DashboardSummaryResponse } from '@/interfaces';
import { Grid, Typography } from '@mui/material'

const DashboardPage = () => {

    const { data, error } = useSWR<DashboardSummaryResponse>('/api/admin/dashboard', {
        refreshInterval: 30 * 1000 // 30s
    })

    const [refreshIn, setRefreshIn] = useState(30);

    useEffect(() => {
      const interval = setInterval(() => {
        setRefreshIn(refreshIn => refreshIn > 0 ? refreshIn - 1 : 30)
      }, 1000)
      return () => clearInterval(interval)
    }, [])
  
    if(!error && !data) {
      return <></>
    }
  
    if(error) {
      console.log(error)
      return <Typography>Error al cargar la info</Typography>
    }


    const {
        numberOfOrders,
        paidOrders,
        notPaidOrders,
        numberOfClients, // role client
        numberOfProducts,
        productsWithNoInventory,
        lowInventory, // 10 o menos
    } = data!;

  return (
    <AdminLayout
        title='Dashboard'
        subTitle='Estadisticas generales'
        icon={<DashboardOutlined />}
    >
        <Grid container spacing={2}>

            <SummaryTile
                title={ numberOfOrders }
                subTitle="Ordenes Totales"
                icon={<CreditCardOutlined color="secondary" sx={{ fontSize: 40 }} />}
            />
            <SummaryTile
                title={paidOrders}
                subTitle="Ordenes Pagadas"
                icon={<AttachMoneyOutlined color="success" sx={{ fontSize: 40 }} />}
            />
            <SummaryTile
                title={notPaidOrders}
                subTitle="Ordenes Pendientes"
                icon={<CreditCardOffOutlined sx={{ fontSize: 40, color: '#EEBC03' }} />}
            />
            <SummaryTile
                title={numberOfClients}
                subTitle="Clientes"
                icon={<GroupOutlined sx={{ fontSize: 40, color: '#000000' }} />}
            />
            <SummaryTile
                title={numberOfProducts}
                subTitle="Productos"
                icon={<CategoryOutlined sx={{ fontSize: 40, color: '#D325C9' }} />}
            />
            <SummaryTile
                title={productsWithNoInventory}
                subTitle="Sin Existencias"
                icon={<CancelPresentationOutlined color="error" sx={{ fontSize: 40 }} />}
            />
            <SummaryTile
                title={lowInventory}
                subTitle="Bajo Invertarios"
                icon={<ProductionQuantityLimitsOutlined  sx={{ fontSize: 40, color: '#8515AF' }} />}
            />
            <SummaryTile
                title={refreshIn}
                subTitle="Actualizacion en:"
                icon={<AccessTimeOutlined color="disabled" sx={{ fontSize: 40 }} />}
            />
        </Grid>

    </AdminLayout>

  )
}

export default DashboardPage