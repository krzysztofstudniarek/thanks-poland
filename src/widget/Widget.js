import * as React from 'react'
import styled from 'styled-components'

import MentionsSection from './MentionsSection'
import {isMobile} from 'react-device-detect';
import Spinner from 'reactjs-simple-spinner'

import {useState, useEffect}  from 'react'

const WidgetContainer = styled.div`
    display: flex;
    width: 100%;
    margin-top:80px;
`

const WidgetContent = styled.div`
    flex: 1;
    height:100px;
    padding-top: 10px;
    padding-bottom: 80px;
    margin-left: 20px;
`

const Row = styled.div`
    display: flex;
    width: 100%;
`

const Widget = () => {

    const [loadingState, setLoadingState] = useState(false);
    const [data, setData] = useState([]);

    const changeLoadingState = () => {
        setLoadingState(true);
    }

    useEffect(() => {
        fetch("https://63klz6b332.execute-api.us-east-2.amazonaws.com/default/thanks-poland",
        {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                response.json().then(
                    (data) => {
                        var mentions = ['1499022394123591680',
                                        '1498121118925963269',
                                        '1498406780438781961'];
                        data.forEach((item) => {
                            mentions.push(item['id']);
                        });
                        setData(mentions);
                    }
                )
                .catch(error => {
                    alert("Mieliśmy problem z pobraniem danych skontaktuj się z administratorem!");
                    throw(error);
                })
            })
    }, [])

    if(isMobile){
        return(
            <WidgetContainer>
                <WidgetContent> 
                    <Row>
                        <MentionsSection data = {data} onLoad={changeLoadingState}>
                            
                        </MentionsSection>
                    </Row>
                </WidgetContent>
            </WidgetContainer>
        )
    }else{
        return(
            <WidgetContainer>
                <WidgetContent>
                    <Row>
                        <MentionsSection data = {data.slice(0, data.length/3)} onLoad={changeLoadingState}>
                            
                        </MentionsSection>
                        <MentionsSection data = {data.slice(data.length/3, 2*data.length/3)} onLoad={changeLoadingState}>
                            
                        </MentionsSection>
                        <MentionsSection data = {data.slice(2*data.length/3, data.length)} onLoad={changeLoadingState}>
                            
                        </MentionsSection>
                    </Row>
                </WidgetContent>
            </WidgetContainer>
        )
    }   
}

export default Widget;