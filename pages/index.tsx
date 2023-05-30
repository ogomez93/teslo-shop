import type { NextPage } from 'next'
import { Typography } from '@mui/material'

import { ShopLayout } from '../components/layouts'

const Home: NextPage = () => {
  return (
    <ShopLayout title='Teslo-Shop - Home' pageDescription='Find the best Teslo products here'>
      <Typography variant='h1' component='h1'>Store</Typography>
      <Typography variant='h2' component='h2' sx={{ mb: 1 }}>All Products</Typography>
    </ShopLayout>
  )
}

export default Home
