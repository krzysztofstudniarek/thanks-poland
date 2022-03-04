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
    height: 65px;
    text-align: center;
    background-color: #0195d3;
`

const Header = () => {
    if(isMobile){
        return(
            <MobileBackground>
                <HeaderContentLeft></HeaderContentLeft>
                {!isMobile && <HeaderContentRight></HeaderContentRight>}
            </MobileBackground>
        )
    }else{
        return(
            <MobileBackground>
                <HeaderContentLeft></HeaderContentLeft>
                <HeaderContentRight></HeaderContentRight>
            </MobileBackground>
        )
    }

}

export default Header;