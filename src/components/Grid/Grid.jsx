import React from 'react'

import { Wrapper, Content } from './styles.js'

const Grid = ({ header, children}) => (<Wrapper>
    <h1 data-testid="titlePage">{header}</h1>
    <Content>{children}</Content>
</Wrapper>)

export default Grid