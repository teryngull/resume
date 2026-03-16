import { Box, Container, Stack, Typography } from "@mui/material"
import { useColorScheme } from "@mui/material/styles"
import { useEffect } from "react"
import { resumeData } from "../data/resumeData"
import { ExperienceBlocks } from "./experienceBlocks"
import { HeroIntro } from "./heroIntro"
import { ModeSwitch } from "./modeSwitch"
import { ProfileBlocks } from "./profileBlocks"

export function ResumeLayout() {
    const { mode } = useColorScheme()
    const year = new Date().getFullYear()
    const resolvedMode = mode ?? "dark"

    useEffect(() => {
        document.documentElement.setAttribute("data-app-mode", resolvedMode)
    }, [resolvedMode])

    return (
        <Box className="app-shell" data-mode={resolvedMode}>
            <Container maxWidth="xl">
                <Stack spacing={2.25}>
                    <Box className="app-toolbar">
                        <ModeSwitch />
                    </Box>

                    <HeroIntro data={resumeData} />

                    <Box className="resume-grid">
                        <ExperienceBlocks data={resumeData} />
                        <ProfileBlocks data={resumeData} />
                    </Box>

                    <Typography variant="body2" color="text.secondary" align="center" sx={{ pt: 0.5 }}>
                        {resumeData.name} | {year} | Built with React + Vite
                    </Typography>
                </Stack>
            </Container>
        </Box>
    )
}
