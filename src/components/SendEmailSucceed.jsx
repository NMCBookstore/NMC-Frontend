import { Container, Stack, Typography } from '@mui/material'
import React from 'react'

export default function SendEmailSucceed() {
  return (
    <Container maxWidth="md">
      <Stack mt={10} direction="column">
        <Typography variant='h2' p={2}>
          Sent email success
        </Typography>
        <Typography variant='h4' p={3}>
          Please check your inbox
        </Typography>
      </Stack>
    </Container>
  )
}
