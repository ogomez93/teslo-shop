import Link from 'next/link';
import { Box, Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material'

import { CartList, OrderSummary } from '../../components/cart'
import { ShopLayout } from '../../components/layouts'

const SummaryPage = () => {
  return (
    <ShopLayout pageDescription='Order Summary' title='Order Summary'>
      <Typography variant='h1' component='h1'>Order Summary</Typography>

      <Grid container>
        <Grid item xs={12} sm={7}>
          <CartList />
        </Grid>

        <Grid item xs={12} sm={5}>
          <Card className='summary-card'>
            <CardContent>
              <Typography variant='h2' component='h2'>Summary ({`${3}`} products)</Typography>

              <Divider sx={{ my: 1 }} />

              <Box display='flex' justifyContent='space-between'>
                <Typography variant='subtitle1'>Shipping Address</Typography>
                <Link href='/checkout/address'>
                  Edit
                </Link>
              </Box>

              <Typography>Oswaldo Gomez</Typography>
              <Typography>1234 Main St</Typography>
              <Typography>Doral, Florida 33178</Typography>
              <Typography>United States</Typography>
              <Typography>+1 000 123 4567</Typography>

              <Divider sx={{ my: 1 }} />

              <Box display='flex' justifyContent='end'>
                <Link href='/cart'>
                  Edit
                </Link>
              </Box>

              <OrderSummary />

              <Box sx={{ mt: 3 }}>
                <Button color='secondary' className='circular-btn' fullWidth>
                  Confirm Order
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default SummaryPage
