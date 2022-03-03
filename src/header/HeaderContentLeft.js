import * as React from 'react'
import styled from 'styled-components'

import {isMobile} from 'react-device-detect';

const HeaderContentContainer = styled.div`
    flex: 1;
    position:relative; 
    margin:auto;
    margin-left:40px;
    margin-right:40px;
    color: white;
    font-size: 11pt;
    font-weight: 500;
    ${!isMobile && `padding-top:15px;`}
    ${isMobile && `
        padding-top:10px;
        text-align: center;
    `}    
`

const HeaderContentLeft = () => {
    return(
        <HeaderContentContainer>
            Over <b>550,000</b> citizens from 125 countries have already found safety in Poland.
        </HeaderContentContainer>
    )
}

export default HeaderContentLeft;