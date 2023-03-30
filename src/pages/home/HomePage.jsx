import { Box, useMediaQuery } from '@mui/material'
import Navbar from 'pages/navbar/Navbar'
import { useSelector } from 'react-redux'

import UserWidget from 'pages/widgets/UserWidget'
import MyPostWidget from 'pages/widgets/MyPostWidget'
import PostsWidget from 'pages/widgets/PostsWidget'

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery('(min-width: 600px)')

  // get from state.user
  const { _id, picturePath } = useSelector(state => state.user)

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? 'flex' : 'block'}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? '26%' : undefined}>
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? '42%' : undefined}
          mt={isNonMobileScreens ? undefined : '2rem'}
        >
          <MyPostWidget picturePath={picturePath} />
          <PostsWidget userId={_id} />
        </Box>
      </Box>
    </Box>
  )
}

export default HomePage
