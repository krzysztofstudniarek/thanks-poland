import * as React from 'react'
import styled from 'styled-components'

import Logo from './Logo'

const HeaderContentContainer = styled.div`
    flex: 1;
    position:absolute;
    right: 40px;
    top:0px;
    color: white;
    font-size: 11pt;
    font-weight: 500;
    float: right;
    padding-top:15px;
    width: 375px;
`
const CTAText = styled.a`
    text-decoration: none;
    color: white;
    font-weight: 500;
`
const CTABold = styled.b`
    color: yellow;
    font-weight: 900;
`

const HeaderContentRight = () => {
    return(
        <HeaderContentContainer>
            <CTAText href="https://www.gov.pl/web/mswia-en/information-for-refugees-from-ukraine">
            <Logo></Logo>
                Official <CTABold>Guidlines</CTABold> for refugees fleeing Ukraine
            </CTAText>
        </HeaderContentContainer>
    )
}

export default HeaderContentRight;