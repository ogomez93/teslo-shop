import { Box, Button, Chip, Grid, Typography } from '@mui/material'

import { ShopLayout } from '../../components/layouts'
import { ProductSlideshow, SizeSelector } from '../../components/products'
import { initialData } from '../../database/products'
import { ItemCounter } from '../../components/ui/ItemCounter'

const product = initialData.products[0]

const ProductPage = () => {
  return (
    <ShopLayout pageDescription={product.description} title={product.title}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <ProductSlideshow images={product.images} />
        </Grid>

        <Grid item xs={12} sm={5}>
          <Box display='flex' flexDirection='column'>
            {/* Titles */}
            <Typography variant='h1' component='h1'>{ product.title }</Typography>
            <Typography variant='subtitle1' component='h2'>{ `$${product.price}` }</Typography>

            <Box sx={{ my: 2 }}>
              <Typography variant='subtitle2'>Quantity</Typography>
              <ItemCounter />
              <SizeSelector selectedSize={product.sizes[0]} sizes={product.sizes} />
            </Box>

            {/* Add to cart */}
            <Button color='secondary' className='circular-btn'>
              Add to Cart
            </Button>

            {/* <Chip label='None available' color='error' variant='outlined' /> */}

            {/* Description */}
            <Box sx={{ mt: 3 }}>
              <Typography variant='subtitle2'>Description</Typography>
              <Typography variant='body2'>{ product.description }</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default ProductPage