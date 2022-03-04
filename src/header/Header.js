import * as React from 'react'
import styled from 'styled-components'

import HeaderContentLeft from './HeaderContentLeft'
import HeaderContentRight from './HeaderContentRight'

import {isMobile} from 'react-device-detect';

const Background = styled.div`
    width: 100%;
    background-color: #0195d3;
`

const Header = () => {
    return(
        <Background>
            <HeaderContentLeft></HeaderContentLeft>
            {!isMobile && <HeaderContentRight></HeaderContentRight>}
        </Background>
    )
}

export default Header;