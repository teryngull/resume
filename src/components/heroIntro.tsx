import { Box, Link, Paper, Stack, Typography } from "@mui/material"
import type { ResumeData } from "../interfaces"

export function HeroIntro({ data }: { data: ResumeData }) {
    return (
        <Paper className="hero-card" elevation={0}>
            <Stack direction={{ xs: "column", lg: "row" }} spacing={2.5}>
                <Stack spacing={1.5} className="hero-copy">
                    <Typography className="eyebrow" variant="overline">
                        Software Engineering Leadership
                    </Typography>
                    <Stack direction="row" spacing={1.1} alignItems="center" className="brand-row">
                        <Box component="img" src="/tg-mark.svg" alt="TG monogram logo" className="brand-logo" />
                        <Typography variant="h2" sx={{ fontSize: { xs: "2.2rem", md: "3.25rem" } }}>
                            {data.name}
                        </Typography>
                    </Stack>
                    <Typography className="hero-role" color="secondary">
                        {data.role}
                    </Typography>
                    <Typography color="text.primary" className="hero-tagline">
                        {data.tagline}
                    </Typography>
                    <Typography color="text.secondary" className="hero-summary">
                        {data.summary}
                    </Typography>
                    <Typography color="text.secondary" variant="body2">
                        {data.location}
                    </Typography>

                    <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ pt: 0.5 }}>
                        {data.contactLinks.map((contact) => (
                            <Link
                                key={contact.label}
                                href={contact.href}
                                target="_blank"
                                rel="noreferrer"
                                className="contact-link"
                                underline="none"
                            >
                                {contact.label}
                            </Link>
                        ))}
                    </Stack>
                </Stack>

                <Box className="hero-metrics">
                    {data.highlights.map((highlight) => (
                        <Box key={highlight.label} className="highlight-item">
                            <Typography variant="caption" color="text.secondary">
                                {highlight.label}
                            </Typography>
                            <Typography variant="subtitle1">{highlight.value}</Typography>
                        </Box>
                    ))}
                </Box>
            </Stack>
        </Paper>
    )
}
