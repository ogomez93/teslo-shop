import Link from 'next/link'
import { Box, Typography } from '@mui/material'
import { RemoveShoppingCartOutlined } from '@mui/icons-material'

import { ShopLayout } from '../../components/layouts'

const EmptyPage = () => {
  return (
    <ShopLayout pageDescription='There are no articles in the cart' title='Empty Cart'>
      <Box
        alignItems='center'
        display='flex'
        height='calc(100vh - 200px)'
        justifyContent='center'
        sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
      >
        <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Typography>Your Cart is empty</Typography>
          <Link href='/' style={{ textDecoration: 'none' }}>
            <Typography variant='h4' color='secondary'>Go back</Typography>
          </Link>
        </Box>
      </Box>
    </ShopLayout>
  )
}

export default EmptyPage