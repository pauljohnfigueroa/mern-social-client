import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import LoginForm from './LoginForm'

const LoginPage = () => {
  const isNonMobileScreens = useMediaQuery('(min-width: 600px)')
  const theme = useTheme()

  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          SosyalFriendly
        </Typography>
      </Box>
      <Box
        width={isNonMobileScreens ? '60%' : '90%'}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography>Welcome to SosyalFriendly. Your network equals your net worth.</Typography>
        <LoginForm />
      </Box>
    </Box>
  )
}

export default LoginPage
