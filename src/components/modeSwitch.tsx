import { IconButton, Tooltip } from "@mui/material"
import { useColorScheme } from "@mui/material/styles"

function LightModeIcon() {
    return (
        <svg viewBox="0 0 24 24" className="mode-icon" aria-hidden="true">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2.5V4.6" />
            <path d="M12 19.4V21.5" />
            <path d="M4.6 4.6L6.1 6.1" />
            <path d="M17.9 17.9L19.4 19.4" />
            <path d="M2.5 12H4.6" />
            <path d="M19.4 12H21.5" />
            <path d="M4.6 19.4L6.1 17.9" />
            <path d="M17.9 6.1L19.4 4.6" />
        </svg>
    )
}

function DarkModeIcon() {
    return (
        <svg viewBox="0 0 24 24" className="mode-icon" aria-hidden="true">
            <path d="M20.7 14.1A8.7 8.7 0 1 1 9.9 3.3a7.2 7.2 0 0 0 10.8 10.8Z" />
        </svg>
    )
}

export function ModeSwitch() {
    const { mode, setMode } = useColorScheme()

    if (!mode) {
        return null
    }

    const isDarkMode = mode === "dark"
    const nextMode = isDarkMode ? "light" : "dark"

    return (
        <Tooltip title={`Switch to ${nextMode} mode`}>
            <IconButton
                aria-label={`Switch to ${nextMode} mode`}
                aria-pressed={isDarkMode}
                onClick={() => setMode(nextMode)}
                className="theme-toggle-button"
            >
                {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
        </Tooltip>
    )
}
