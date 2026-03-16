import { Divider, Paper, Stack, Typography } from "@mui/material"
import type { ReactNode } from "react"

export function CardSection({
    title,
    subtitle,
    children,
}: {
    title: string
    subtitle?: string
    children: ReactNode
}) {
    return (
        <Paper className="section-card" elevation={0}>
            <Stack spacing={1.8}>
                <Typography variant="h5">{title}</Typography>
                {subtitle ? (
                    <Typography color="text.secondary" variant="body2" className="section-subtitle">
                        {subtitle}
                    </Typography>
                ) : null}
                <Divider />
                {children}
            </Stack>
        </Paper>
    )
}
