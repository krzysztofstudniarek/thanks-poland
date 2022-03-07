import styled from 'styled-components'

import * as React from 'react'

import {TwitterTweetEmbed} from 'react-twitter-embed'
import Spinner from 'reactjs-simple-spinner'

import Loadable from 'react-loadable';

function Loading() {
    return <h3>Loading...</h3>;
}

const LazyTweet = Loadable({
    loader: () => import('./Tweet'),
    loading: Loading
});

const MentionsSectionContainter = styled.div`
    flex: 2;
    padding: 10px;
`
const MentionsSection = (props) => {
    return (
        <MentionsSectionContainter>
            {props.data.map((mention) => (
                <LazyTweet mention={mention} onLoad={() => props.onLoad()}></LazyTweet>
            ))}
        </MentionsSectionContainter>
    )
}

export default MentionsSection;