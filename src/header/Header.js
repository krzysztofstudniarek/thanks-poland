import * as React from 'react'
import styled from 'styled-components'

import HeaderContentLeft from './HeaderContentLeft'
import HeaderContentRight from './HeaderContentRight'

import {isMobile} from 'react-device-detect';

const Background = styled.div`
    width: 100%;
    height: 50px;
    background-color: #0195d3;
`

const MobileBackground = styled.div`
    width: 100%;
    background-color: #0195d3;
    height: 65px;
    text-align: center;
`

const Header = () => {
    if(isMobile){
        return(
            <MobileBackground>
                Mobile Header
                <HeaderContentLeft></HeaderContentLeft>
            </MobileBackground>
        )
    } else {
        return(
            <Background>
                Desktop Header
                <HeaderContentLeft></HeaderContentLeft>
                <HeaderContentRight></HeaderContentRight>
            </Background>
        )
    }

}

export default Header;