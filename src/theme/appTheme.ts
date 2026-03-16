import { createTheme } from "@mui/material/styles"

export const appTheme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: { main: "#007a6d", contrastText: "#ffffff" },
        secondary: { main: "#006d77", contrastText: "#ffffff" },
        background: {
          default: "#f4fffd",
          paper: "#ffffff",
        },
        text: {
          primary: "#0f172a",
          secondary: "#334155",
        },
        divider: "rgba(15, 23, 42, 0.14)",
      },
    },
    dark: {
      palette: {
        primary: { main: "#2df1db", contrastText: "#05221f" },
        secondary: { main: "#22d3ee", contrastText: "#082226" },
        background: {
          default: "#050c16",
          paper: "#0b1427",
        },
        text: {
          primary: "#e2e8f0",
          secondary: "#94a3b8",
        },
        divider: "rgba(148, 163, 184, 0.2)",
      },
    },
  },
  typography: {
    fontFamily: '"Sora", "Segoe UI", "Helvetica", "Arial", sans-serif',
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.04em",
      lineHeight: 1.05,
    },
    h5: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    subtitle1: {
      fontWeight: 500,
    },
  },
  shape: { borderRadius: 20 },
})
