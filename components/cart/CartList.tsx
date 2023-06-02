import { FC } from 'react'
import Link from 'next/link'
import { Box, Button, CardActionArea, CardMedia, Grid, Typography } from '@mui/material'

import { initialData } from '../../database/products'
import { ItemCounter } from '../ui'

const productsInCard = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2]
]

interface Props {
  editable?: boolean
}

export const CartList: FC<Props> = ({ editable = false }) => {
  return (
    <>
      {
        productsInCard.map(product => (
          <Grid container key={product.slug} spacing={2} sx={{ mb: 1 }}>
            <Grid item xs={3}>
              {/* this should take to the product view */}
              <Link href={'/product/slug'}>
                <CardActionArea>
                  <CardMedia
                    image={`products/${product.images[0]}`}
                    component='img'
                    sx={{ borderRadius: '5px' }}
                  />
                </CardActionArea>
              </Link>
            </Grid>
            <Grid item xs={7}>
              <Box display='flex' flexDirection='column'>
                <Typography variant='body1'>{product.title}</Typography>
                <Typography variant='body1'>Size: <strong>{product.sizes[0]}</strong></Typography>
                {
                  editable
                    ? <ItemCounter />
                    : <Typography variant='subtitle1'>{3} items</Typography>
                }
              </Box>
            </Grid>
            <Grid item xs={2} display='flex' alignItems='center' flexDirection='column'>
              <Typography variant='subtitle1'>{`$${product.price}`}</Typography>
              { editable && <Button color='secondary' variant='text'>Remove</Button> }
            </Grid>
          </Grid>
        ))
      }
    </>
  )
}
