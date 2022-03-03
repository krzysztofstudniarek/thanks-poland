import * as React from 'react'
import styled from 'styled-components'

const LayoutContainer = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
`

const Layout = ({ pageTitle, children }) => {
  return (
    <LayoutContainer>
        <title>{pageTitle}</title>
        {children}
    </LayoutContainer>
  )
}

export default Layout;