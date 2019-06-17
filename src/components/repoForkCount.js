import React from 'react'
import { Flex, Link, StyledOcticon, } from '@primer/components'
import { GitBranch } from '@githubprimer/octicons-react'

const RepoForkCount = ({repository}) =>{
  return (
   <Flex.Item display={'inline-flex'}>
     <Link
        href={repository.url}
        display={'inline-flex'}
        color={'gray'}
        mr={1}
     >
       <StyledOcticon icon={GitBranch} mr={1} />
       {repository.forkCount}
     </Link>
   </Flex.Item>
  )
}

export default RepoForkCount