import styled from 'styled-components'

import * as React from 'react'
import {useState, useEffect}  from 'react'

import {TwitterTweetEmbed} from 'react-twitter-embed'

const MentionsSectionContainter = styled.div`
    flex: 2;
    padding: 20px;
`
const MentionsSection = (props) => {
    return (
        <MentionsSectionContainter>
            {props.data.map((mention) => (
                <TwitterTweetEmbed tweetId={mention}>

                </TwitterTweetEmbed>
            ))}
        </MentionsSectionContainter>
    )
}

export default MentionsSection;