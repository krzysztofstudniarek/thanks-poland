import * as React from 'react'
import styled from 'styled-components'

import HeaderContent from './HeaderContent'

const Background = styled.div`
    width: 100%;
    height: 50px;
    background-color: #0195d3;
`

const Header = () => {
    return(
        <Background>
            <HeaderContent></HeaderContent>
        </Background>
    )
}

export default Header;