import type { NextPage } from 'next'
import { Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material'

import { ShopLayout } from '../components/layouts'
import { initialData } from '../database/products'

const Home: NextPage = () => {
  return (
    <ShopLayout title='Teslo-Shop - Home' pageDescription='Find the best Teslo products here'>
      <Typography variant='h1' component='h1'>Store</Typography>
      <Typography variant='h2' component='h2' sx={{ mb: 1 }}>All Products</Typography>

      <Grid container spacing={4}>
        {
          initialData.products.map(product => (
            <Grid item xs={6} sm={4} key={product.slug}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    alt={product.title}
                    component='img'
                    image={`products/${product.images[0]}`}
                  />
                </CardActionArea>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </ShopLayout>
  )
}

export default Home
