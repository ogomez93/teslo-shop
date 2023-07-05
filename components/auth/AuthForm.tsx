import { FC } from 'react'
import Link from 'next/link'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'

import { AuthLayout } from '../layouts'

interface Props {
  signUp?: boolean,
  title: string
}

export const AuthForm: FC<Props> = ({ signUp = false, title }) => {
  return (
    <AuthLayout title={title}>
      <Box sx={{ width: 350, padding: '10px 20px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant='h1' component='h1'>{title}</Typography>
          </Grid>

          { signUp && (
            <Grid item xs={12}>
              <TextField label='Name' variant='filled' fullWidth />
            </Grid>
          )}

          <Grid item xs={12}>
            <TextField label='Email' variant='filled' fullWidth />
          </Grid>

          <Grid item xs={12}>
            <TextField label='Password' type='password' variant='filled' fullWidth />
          </Grid>

          <Grid item xs={12}>
            <Button color='secondary' className='circular-btn' size='large' fullWidth>
              Log in
            </Button>
          </Grid>

          <Grid item xs={12} display='flex' justifyContent='end'>
            { signUp
                ? <Link href='/auth/login'>Already have an account? Log In</Link>
                : <Link href='/auth/register'>Don&apos;t have an account? Sign Up</Link>
            }
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  )
}
