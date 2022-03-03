import * as React from 'react'
import styled from 'styled-components'

const Header = styled.div`
    font-size: 40px;
    font-weight: 400;
`

const SectionHeader = ({children}) => {
    return (
        <Header>
            {children}
        </Header>
    );
}

export default SectionHeader;