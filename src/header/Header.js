import * as React from 'react'
import styled from 'styled-components'

import HeaderContentLeft from './HeaderContentLeft'
import HeaderContentRight from './HeaderContentRight'
import MobileHeaderContent from './MobileHeaderContent'

import {isMobile} from 'react-device-detect';

const Background = styled.div`
    width: 100%;
    height: 50px;
    background-color: #0195d3;
`

const Header = () => {
    return(
        <Background>
            {isMobile && <MobileHeaderContent></MobileHeaderContent>}
            {!isMobile && <HeaderContentLeft></HeaderContentLeft> }
            {!isMobile && <HeaderContentRight></HeaderContentRight>}
        </Background>
    )
}

export default Header;