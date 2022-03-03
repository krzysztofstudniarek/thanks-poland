import * as React from 'react'
import styled from 'styled-components'

const MobileHeaderContentContainer = styled.div`
    position: relative;
    color: white;
    font-size: 11pt;
    font-weight: 500;
    text-align: right;
    padding: 10px;
    background-color:black;
`

const MobileHeaderContent = () => {
    return(
        <MobileHeaderContentContainer>
            Over <b>550,000</b> citizens from 125 countries have already found safety in Poland.
        </MobileHeaderContentContainer>
    )
}

export default MobileHeaderContent;