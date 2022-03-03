import * as React from 'react'
import styled from 'styled-components'

import img from '../images/unity-icon.png'

const Logo = styled.div`
    background-image: url(${img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    left: 0px;
    top:0px;
    width: 51px;
    height: 40px; 
    float: left;
    margin-top: -10px;
    margin-right: 15px
`
export default Logo;