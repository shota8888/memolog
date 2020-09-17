import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
  typography: {
    body1: {
      fontSize: '1rem',
      '@media (max-width:1024px)': {
        fontSize: '0.7rem',
      },
    },
    body2: {
      fontSize: '0.8rem',
    },
  }
})

export default theme