import { Box, Typography } from '@mui/material'
import { ShopLayout } from '../components/layouts'

const Custom404 = () => {
  return (
    <ShopLayout pageDescription='Nothing to show here' title='Page not found'>
      <Box
        alignItems='center'
        display='flex'
        height='calc(100vh - 200px)'
        justifyContent='center'
        sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
      >
        <Typography variant='h1' component='h1' fontSize={{ xs: 60, sm: 80 }} fontWeight={200}>404 | </Typography>
        <Typography marginLeft={2}>Nothing to see here</Typography>
      </Box>
    </ShopLayout>
  )
}

export default Custom404
