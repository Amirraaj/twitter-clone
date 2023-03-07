import React from 'react'
import AddTweets from '../AddTweets/AddTweets'
import Feeds from '../Feeds/Feeds'
import HomeBar from '../HomeBar/HomeBar'
import divider from '../style'

function Main() {
    return (
        <main className='w-2/4 w-full bg-dark ml-3/4 relative'>
            <HomeBar />
            <AddTweets />
            <div style={divider}></div>
            <Feeds />
        </main>
    )
}

export default Main