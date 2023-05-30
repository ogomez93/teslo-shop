import { FC, useMemo, useState } from 'react'
import { Grid, Card, CardActionArea, CardMedia, Box, Typography } from '@mui/material'

import { IProduct } from '../../interfaces'

interface Props {
  product: IProduct
}

export const ProductCard: FC<Props> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)

  const productImage = useMemo(() => {
    return isHovered
      ? `products/${product.images[1]}`
      : `products/${product.images[0]}`
  }, [isHovered, product.images])

  return (
    <Grid item xs={6} sm={4} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Card>
        <CardActionArea>
          <CardMedia
            alt={product.title}
            className='fadeIn'
            component='img'
            image={productImage}
          />
        </CardActionArea>
      </Card>

      <Box sx={{ mt: 1 }} className='fadeIn'>
        <Typography fontWeight={700}>{ product.title }</Typography>
        <Typography fontWeight={500}>{ `$${product.price}` }</Typography>
      </Box>
    </Grid>
  )
}
