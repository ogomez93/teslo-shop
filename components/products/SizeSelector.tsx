import { FC } from 'react'
import { ISize } from '../../interfaces'
import { Box, Button } from '@mui/material'

interface Props {
  selectedSize?: string
  sizes: ISize[]
}

export const SizeSelector: FC<Props> = ({ selectedSize, sizes }) => {
  return (
    <Box>
      {
        sizes.map(size => (
          <Button
            key={size}
            color={selectedSize === size ? 'primary' : 'info'}
            size='small'
          >
            {size}
          </Button>
        ))
      }
    </Box>
  )
}
