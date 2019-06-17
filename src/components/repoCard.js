import React from 'react'
import Emoji from 'react-emoji-render'
import {
  StyledOcticon,
  Link,
  Heading,
  Flex,
  BorderBox,
  Text
} from '@primer/components'
import { Repo } from '@githubprimer/octicons-react'
import useThemeContext from '../hooks/themeContext'

import RepoCardFooter from './repoCardFooter'


function RepoCard({ repository, ...props }) {
  const { theme } = useThemeContext()
  return (
   <BorderBox
     className={'github-component'} height={'100%'}
     textAlign={'left'} bg={'white'} borderRadius={3} p={3}
     border={theme.border} boxShadow={theme.boxShadow} px={3}>
     <Flex
       height={'100%'} flexFlow={'column'}
       justifyContent={'flex-start'} flexDirection={'column'}>
       <Flex.Item
        justifyContent={'space-between'}
        alignItems={'flex-start'} mb={1}>
         <Heading fontSize={'13px'} lineHeight={1.25} mb={1}>
           <Link href={repository.url}>
            <StyledOcticon icon={Repo} mr={1}/>
            <Text ml={1} fontWeight={'normal'}>
              {repository.owner.login}/
            </Text>
             {repository.name}
           </Link>
         </Heading>
       </Flex.Item>
       <Flex.Item flex={1} color={'gray'} mb={2} fontSize={4} className={'ws-normal'}>
         <Emoji text={repository.description || ''} />
       </Flex.Item>
       <Flex.Item fontSize={6}>
        <RepoCardFooter {...props} repository={repository} />
       </Flex.Item>
     </Flex>
   </BorderBox>
  )
}

export default RepoCard
