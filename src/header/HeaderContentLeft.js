import * as React from 'react'
import styled from 'styled-components'

import Logo from './Logo'

const HeaderContentContainer = styled.div`
    flex: 1;
    position:relative;
    width: 1040px; 
    margin:auto;
    margin-left:40px;
    color: white;
    font-size: 11pt;
    font-weight: 500;
    padding-top:15px
`

const HeaderContentLeft = () => {
    return(
        <HeaderContentContainer>
            Over <b>550,000</b> citizens from 125 countries have already found safety in Poland.
        </HeaderContentContainer>
    )
}

export default HeaderContentLeft;