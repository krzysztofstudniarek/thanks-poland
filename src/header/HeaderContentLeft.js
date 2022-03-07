import * as React from 'react'
import styled from 'styled-components'
import moment from 'moment'

import {useState, useEffect}  from 'react'

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
    const updateRefugeesNo = () => {
        var baseNo = 1000000;
        var now = moment(new Date());
        var start = moment("2022-03-06");
        var duration = moment.duration(now.diff(start));
        
        return baseNo + Math.floor(duration.asSeconds());
    }

    const [refugeesNo, setRefugeesNo] = useState(() => updateRefugeesNo());

    useEffect(() => {
        const interval = setInterval(() => {
                setRefugeesNo(() => updateRefugeesNo());
            }, 2000);
    }, []);

    return(
        <HeaderContentContainer>
            Over <b>{refugeesNo.toLocaleString()}</b> citizens from 125 countries have already found safety in Poland.
        </HeaderContentContainer>
    )
}

export default HeaderContentLeft;