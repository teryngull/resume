import { Box, Chip, Stack, Typography } from "@mui/material"
import type { ResumeData } from "../interfaces"
import { CardSection } from "./cardSection"

export function ExperienceBlocks({ data }: { data: ResumeData }) {
    const currentRole = data.experience[0]

    return (
        <Stack spacing={2.25}>
            <CardSection
                title="Career Journey"
                subtitle="Progression from hands-on engineering to software engineering leadership."
            >
                <Stack spacing={2.25}>
                    {data.experience.map((experience) => (
                        <Box key={`${experience.company}-${experience.role}`} className="timeline-item">
                            <Typography variant="h6">{experience.role}</Typography>
                            <Typography variant="subtitle1">{experience.company}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                {experience.location} | {experience.dates}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.75 }}>
                                {experience.summary}
                            </Typography>
                            <ul className="bullet-list">
                                {experience.highlights.map((item) => (
                                    <li key={item}>
                                        <Typography variant="body2" color="text.secondary">
                                            {item}
                                        </Typography>
                                    </li>
                                ))}
                            </ul>
                            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                                {experience.focus.map((focusArea) => (
                                    <Chip
                                        key={`${experience.role}-${focusArea}`}
                                        label={focusArea}
                                        size="small"
                                        variant="outlined"
                                        className="focus-chip"
                                    />
                                ))}
                            </Stack>
                        </Box>
                    ))}
                </Stack>
            </CardSection>

            <CardSection title="Current Focus">
                {currentRole ? (
                    <Stack spacing={1.1}>
                        <Typography variant="body2" color="text.secondary">
                            In {currentRole.role} at {currentRole.company}, I am currently focused on:
                        </Typography>
                        <ul className="bullet-list compact-list">
                            {currentRole.highlights.map((item) => (
                                <li key={`focus-${item}`}>
                                    <Typography variant="body2" color="text.secondary">
                                        {item}
                                    </Typography>
                                </li>
                            ))}
                        </ul>
                        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                            {currentRole.focus.map((item) => (
                                <Chip key={`current-focus-${item}`} label={item} size="small" className="focus-chip" />
                            ))}
                        </Stack>
                    </Stack>
                ) : (
                    <Typography variant="body2" color="text.secondary">
                        Current focus details are coming soon.
                    </Typography>
                )}
            </CardSection>

            <CardSection title="Recommendation">
                <Stack spacing={1.1}>
                    <Typography variant="body1" className="quote-text">
                        "{data.recommendation.quote}"
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        - {data.recommendation.author}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                        {data.recommendation.relationship}
                    </Typography>
                </Stack>
            </CardSection>
        </Stack>
    )
}
