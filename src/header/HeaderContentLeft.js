import * as React from 'react'
import styled from 'styled-components'
import moment from 'moment'

import {useState}  from 'react'

const HeaderContentContainer = styled.div`
    flex: 1;
    position:relative; 
    margin:auto;
    margin-left:40px;
    margin-right:40px;
    color: white;
    font-size: 11pt;
    font-weight: 500;
    padding-top:15px;
    padding-bottom: 15px;
`

const HeaderContentLeft = () => {
    const [refugeesNo] = useState(550000 + Math.floor(moment.duration(moment(new Date()).diff(moment("2022-03-03"))).asMinutes())*34);

    return(
        <HeaderContentContainer>
            Over <b>{refugeesNo.toLocaleString()}</b> citizens from 125 countries have already found safety in Poland.
        </HeaderContentContainer>
    )
}

export default HeaderContentLeft;