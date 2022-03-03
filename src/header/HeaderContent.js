import * as React from 'react'
import styled from 'styled-components'

import Logo from './Logo'

const HeaderContentContainer = styled.div`
    flex: 1;
    position:relative;
    width: 1040px; 
    margin:auto;
    height: 676px;
    margin-left: 200px;
    margin-right: 200px;
    color: white;
    font-weight: 1000;
    font-size: 20px;
    font-weight: 400;
    padding-top:10px
`

const HeaderContent = () => {
    return(
        <HeaderContentContainer>
            #THANKSPOLAND
        </HeaderContentContainer>
    )
}

export default HeaderContent;