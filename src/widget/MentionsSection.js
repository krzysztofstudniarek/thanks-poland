import styled from 'styled-components'

import * as React from 'react'

import {TwitterTweetEmbed} from 'react-twitter-embed'
import TextContent from '../common/TextContent'
import Spinner from 'reactjs-simple-spinner'

const MentionsSectionContainter = styled.div`
    flex: 2;
    padding: 10px;
`
const MentionsSection = (props) => {

    let isLoaded = false;
    
    let onLoadFunc = () => {
        isLoaded = true;
    }
    return (
        <MentionsSectionContainter>
            {props.data.map((mention) => (
                <TwitterTweetEmbed tweetId={mention} placeholder={<Spinner size="small"/>}>
                </TwitterTweetEmbed>
            ))}
        </MentionsSectionContainter>
    )
}

export default MentionsSection;