import { CssBaseline } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import { ResumeLayout } from "./components/resumeLayout"
import "./siteStyles.css"
import { appTheme } from "./theme/appTheme"

function App() {
    return (
        <ThemeProvider theme={appTheme} defaultMode="dark" noSsr disableTransitionOnChange>
            <CssBaseline />
            <ResumeLayout />
        </ThemeProvider>
    )
}

export default App;
