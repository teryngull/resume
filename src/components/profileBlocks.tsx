import { Box, Chip, Link, Stack, Typography } from "@mui/material"
import type { ResumeData } from "../interfaces"
import { CardSection } from "./cardSection"

export function ProfileBlocks({ data }: { data: ResumeData }) {
    return (
        <Stack spacing={2.25}>
            <CardSection
                title="Skills and Strengths"
                subtitle="Technical depth paired with team and delivery leadership."
            >
                <Stack spacing={2}>
                    {data.skillClusters.map((cluster) => (
                        <Box key={cluster.label}>
                            <Typography variant="subtitle1">{cluster.label}</Typography>
                            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 1 }}>
                                {cluster.skills.map((skill) => (
                                    <Chip key={`${cluster.label}-${skill}`} label={skill} size="small" className="skill-chip" />
                                ))}
                            </Stack>
                        </Box>
                    ))}
                </Stack>
            </CardSection>

            <CardSection title="Recognition">
                <Stack spacing={1.5}>
                    {data.awards.map((award) => (
                        <Box key={`${award.title}-${award.date}`}>
                            <Typography variant="subtitle1">{award.title}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                {award.issuer} | {award.date}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                                {award.details}
                            </Typography>
                        </Box>
                    ))}
                </Stack>
            </CardSection>

            <CardSection title="GitHub Highlights">
                <Stack spacing={1.3}>
                    <Typography variant="body2" color="text.secondary">
                        Public profile:{" "}
                        <Link href={data.github} target="_blank" rel="noreferrer" className="inline-link">
                            {data.github}
                        </Link>
                    </Typography>
                    {data.githubHighlights.map((repo) => (
                        <Box key={repo.name}>
                            <Link href={repo.href} target="_blank" rel="noreferrer" className="inline-link">
                                {repo.name}
                            </Link>
                            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.35 }}>
                                {repo.details}
                            </Typography>
                        </Box>
                    ))}
                </Stack>
            </CardSection>

            <CardSection title="Education">
                <Stack spacing={1.25}>
                    {data.education.map((education) => (
                        <Box key={`${education.institution}-${education.credential}-${education.dates}`}>
                            <Typography variant="subtitle1">{education.credential}</Typography>
                            <Typography variant="body2">{education.institution}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                {education.dates}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                                {education.details}
                            </Typography>
                        </Box>
                    ))}
                </Stack>
            </CardSection>
        </Stack>
    )
}
