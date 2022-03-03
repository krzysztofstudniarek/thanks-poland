import styled from 'styled-components'

import * as React from 'react'

import {TwitterTweetEmbed} from 'react-twitter-embed'
import Spinner from 'reactjs-simple-spinner'

const MentionsSectionContainter = styled.div`
    flex: 2;
    padding: 10px;
`
const MentionsSection = (props) => {
    return (
        <MentionsSectionContainter>
            {props.data.map((mention) => (
                <TwitterTweetEmbed tweetId={mention} onLoad={() => props.onLoad()}>
                </TwitterTweetEmbed>
            ))}
        </MentionsSectionContainter>
    )
}

export default MentionsSection;