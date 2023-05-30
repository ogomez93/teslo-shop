import NextLink from 'next/link'
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import { AppBar, Badge, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'

export const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <NextLink href='/' style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Typography variant='h6'>Teslo |</Typography>
          <Typography sx={{ ml: 0.5 }}>Shop</Typography>
        </NextLink>

        <Box flex={1}/>

        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <NextLink href='/category/men'>
            <Button>Men</Button>
          </NextLink>
          <NextLink href='/category/women'>
            <Button>Women</Button>
          </NextLink>
          <NextLink href='/category/kids'>
            <Button>Kids</Button>
          </NextLink>
        </Box>

        <Box flex={1} />

        <IconButton>
          <SearchOutlined />
        </IconButton>

        <NextLink href='/cart'>
          <IconButton>
            <Badge badgeContent={2} color='secondary'>
              <ShoppingCartOutlined />
            </Badge>
          </IconButton>
        </NextLink>

        <Button>Menu</Button>
      </Toolbar>
    </AppBar>
  )
}
