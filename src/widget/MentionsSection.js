import styled from 'styled-components'

import * as React from 'react'

import {TwitterTweetEmbed} from 'react-twitter-embed'
import TextContent from '../common/TextContent'

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
                <TwitterTweetEmbed tweetId={mention} placeholder={<TextContent>Loading mnetion...</TextContent>}>
                </TwitterTweetEmbed>
            ))}
        </MentionsSectionContainter>
    )
}

export default MentionsSection;