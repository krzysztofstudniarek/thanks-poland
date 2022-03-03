import * as React from 'react'
import styled from 'styled-components'

import HeaderContentLeft from './HeaderContentLeft'
import HeaderContentRight from './HeaderContentRight'

const Background = styled.div`
    width: 100%;
    height: 50px;
    background-color: #0195d3;
`

const Header = () => {
    return(
        <Background>
            <HeaderContentLeft></HeaderContentLeft>
            <HeaderContentRight></HeaderContentRight>
        </Background>
    )
}

export default Header;