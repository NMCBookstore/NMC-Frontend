import React from 'react'
import { Container, Stack } from "@mui/material";

export default function UserCancellations() {
  return (
    <Container>
            <Stack
                component="form"
                // onSubmit={handleSubmit}
                spacing={2}
                sx={{ width: "60%", display: "flex", flexWrap: "wrap" }}
            >
                <div>Cancellations</div>
            </Stack>
        </Container>
  )
}
