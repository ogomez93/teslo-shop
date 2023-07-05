import { Chip, Grid, Typography } from '@mui/material'
import { DataGrid, GridColDef, GridValueOptionsParams } from '@mui/x-data-grid'

import { ShopLayout } from '../../components/layouts'
import Link from 'next/link'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'fullname', headerName: 'Full Name', width: 300 },
  {
    field: 'paid',
    headerName: 'Paid',
    description: 'Shows whether the order was paid or not',
    width: 200,
    renderCell: (params: GridValueOptionsParams) => {
      return (
        params.row.paid
          ? <Chip color='success' label='Paid' variant='outlined' />
          : <Chip color='error' label='Unpaid' variant='outlined' />
      )
    }
  },
  {
    field: 'order',
    headerName: 'Show Order',
    width: 200,
    sortable: false,
    renderCell: (params: GridValueOptionsParams) => {
      return <Link href={`/orders/${params.row.id}`}>View Order</Link>
    }
  }
]

const rows = [
  { id: 1, paid: true, fullname: 'Oswaldo Gomez' },
  { id: 2, paid: true, fullname: 'Gianmarie Delgado' },
  { id: 3, paid: false, fullname: 'Pablo Mingrone' },
  { id: 4, paid: true, fullname: 'Rochi Acuna' },
  { id: 5, paid: false, fullname: 'Juli Gimenez' },
  { id: 6, paid: true, fullname: 'Bruno Berns' },
  { id: 7, paid: false, fullname: 'Rodrigo Lagunas' },
  { id: 8, paid: true, fullname: 'Diego Rodriguez' }
]

const HistoryPage = () => {
  return (
    <ShopLayout pageDescription="Customer's Order History" title='Order History'>
      <Typography variant='h1' component='h1'>Order History</Typography>

      <Grid container>
        <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
          <DataGrid rows={rows} columns={columns} pageSizeOptions={[10]} />
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default HistoryPage