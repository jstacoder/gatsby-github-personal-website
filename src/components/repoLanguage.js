import React from 'react'
import styled from 'styled-components'
import { Box, Text, Flex } from '@primer/components'

export const ColorBall = styled(Box)`
  border-radius: 50%;
  display: inline-block;
  position: relative;
  top: 1px;
`

export const RepoColor = ({color, ...props}) =>(
 <ColorBall
    {...props}
    as={'span'}
    bg={color}
    mr={2}
    mt={1}
    size={12}
 />
)

export const RepoLanguageText = ({name, theme}) =>(
 <Text mr={2} color={theme.colors.gray}>{name}</Text>
)


const RepoLanguage = ({repository, ...props}) => {
  return (
   <Flex.Item display={'inline-flex'}>
     <RepoColor color={repository.language.color}/>
     <RepoLanguageText name={repository.language.name} {...props} />
   </Flex.Item>
  )
}

export default RepoLanguage