import React from 'react'
import { Flex } from '@primer/components'
import RepoStarCount from './repoStarCount'
import RepoForkCount from './repoForkCount'
import RepoLanguage from './repoLanguage'


const RepoCardFooter = ({repository, ...props})=>{
  
  return (
    <Flex.Item fontSize={6}>
          <Flex justifyContent={'space-between'}>
            <RepoLanguage repository={repository} {...props} />
            <RepoStarCount repository={repository}/>
            <RepoForkCount repository={repository}/>
          </Flex>
    </Flex.Item>
  )
}

export default RepoCardFooter