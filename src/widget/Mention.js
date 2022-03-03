import * as React from 'react'
import styled from 'styled-components'

const MentionContent = styled.div`
    clear: both;
    font-size: 12px;
    line-height: 1.5;
    background: #fdef0a;
    border-radius: 2px;
`
const MentionUl = styled.ul`
    padding-left: 20px;
    list-style: none;
`
const ContentLi = styled.li`
    padding-top: 10px; 
    padding-bottom: 10px;
    font-weight: 100;
`

const TitleLi = styled.li`
    padding-top: 10px;
    font-weight: 400;
`

const MentionUrlLi = styled.li`
    padding-top: 10px;
    font-weight: 100;
    font-size: 10px
`

const MentionLink = styled.a`
    text-decoration: none;
    color: inherit;
`

const fetch = require('node-fetch');

const Mention = (props) => {

    return(
            <MentionContent>
                <MentionUl>
                    <TitleLi>
                        <MentionLink
                            href={props.url} 
                            rel="nofollow" 
                            target="_blank">
                                {props.title}
                        </MentionLink>
                    </TitleLi>
                    <MentionUrlLi>
                        <MentionLink
                            href={props.url} 
                            rel="nofollow" 
                            target="_blank">
                                {props.url.slice(0,50)}
                        </MentionLink>
                    </MentionUrlLi>
                    <ContentLi>
                        {props.content}
                    </ContentLi>
                </MentionUl>
            </MentionContent>
    )
}

export default Mention;