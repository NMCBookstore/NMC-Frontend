import { Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { useVerifiedEmailQuery } from '../services/verifiedEmailAPIs'
import { useSearchParams } from 'react-router-dom'

export default function VerifiedEmail() {
    const [searchParams, setSearchParams] = useSearchParams()
    const { data } = useVerifiedEmailQuery({
        "email_id": searchParams.get("email_id"), "secret_code": searchParams.get("secret_code")
    })

    return (
        <Container maxWidth="xs">
            {data ? (<Stack mt={10} direction="column" border={1} borderRadius={2}>
                <Typography variant='h3' p={2}>
                    Welcome
                </Typography>
                <Stack spacing={2} p={3}>
                    <Typography variant='h6'>
                        Your account has been verified
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#db4444",
                            "&:hover": {
                                background: "#ffa071",
                            },
                            width: "50%",
                        }}
                        onClick={() => { window.location.replace("/") }}
                    >
                        Go to homepage
                    </Button>
                </Stack>
            </Stack>
            ) : (
                <Stack mt={10} direction="column">
                    <Typography variant='h3' p={2}>
                        Opps! Sorry
                    </Typography>
                    <Typography variant='h6' p={3}>
                        Verify email failed
                    </Typography>
                </Stack>
            )}
        </Container>
    )
}
