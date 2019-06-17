import React from 'react'
import { Flex, StyledOcticon, Link } from '@primer/components'
import { Star } from '@githubprimer/octicons-react'


const RepoStarCount = ({repository, ...props})=>{
  return (
   <Flex.Item display={'inline-flex'}>
   <Link
     href={repository.url}
     display={'inline-flex'}
     color={'gray'}
     mr={1}
     >
       <StyledOcticon icon={Star} mr={1} />
       {repository.stargazers.totalCount}
     </Link>
   </Flex.Item>
  )
}

export default RepoStarCount