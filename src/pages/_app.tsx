import React, { useEffect } from 'react'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import {
  ThemeProvider as MaterialUIThemeProvider,
  StylesProvider
} from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from 'src/styles/theme'
import GlobalStyle from 'src/styles/globalStyles'
import 'highlight.js/styles/hybrid.css'

const MyApp = ({ Component, pageProps }): JSX.Element => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }, [])

  return (
    <StylesProvider injectFirst>
      <MaterialUIThemeProvider theme={theme}>
        <StyledComponentsThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyle />
          <Component {...pageProps} />
        </StyledComponentsThemeProvider>
      </MaterialUIThemeProvider>
    </StylesProvider>
  )
}

export default MyApp