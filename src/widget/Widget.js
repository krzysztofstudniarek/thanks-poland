import * as React from 'react'
import styled from 'styled-components'

import MentionsSection from './MentionsSection'
import {isMobile} from 'react-device-detect';
import Spinner from 'reactjs-simple-spinner'

import {useState}  from 'react'

const WidgetContainer = styled.div`
    display: flex;
    width: 100%;
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
    const [data, setData] = useState(['1498121118925963269',
                                    '1498406780438781961', 
                                    '1498376044373745664',
                                    '1498132512358367239', 
                                    '1498007955437932548', 
                                    '1498370010561261568', 
                                    '1498016897438203905', 
                                    '1498655934452805635', 
                                    '1498494672246755328', 
                                    '1498385680614920193', 
                                    '1498589657772273665', 
                                    '1497823658756415490',
                                    '1498499715398307855',
                                    '1498667266484879365',
                                    '1498732280508035078',
                                    '1498932783313563650',
                                    '1498945910516158466',
                                    '1498736382780395522',
                                    '1498740340349538304',
                                    '1498706027625209861',
                                    '1497184598064832529',
                                    '1498657946519146504',
                                    '1498196569023303684',
                                    '1498950821366714378',
                                    '1498990250231836679',
                                    '1498990348080754688']);

    const changeLoadingState = () => {
        setLoadingState(true);
    }

    if(isMobile){
        return(
            <WidgetContainer>
                <WidgetContent> 
                    {!loadingState && <Spinner size="large"/>}
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
                    {!loadingState && <Spinner size="large"/>}
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