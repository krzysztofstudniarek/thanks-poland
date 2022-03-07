import * as React from 'react'

import {TwitterTweetEmbed} from 'react-twitter-embed'

const Tweet = (props) => {
    return (
        <TwitterTweetEmbed tweetId={props.mention} onLoad={() => props.onLoad()}>
        </TwitterTweetEmbed>
    );
}

export default Tweet;