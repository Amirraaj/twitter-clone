import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import TrendBar from '../TrendBar/TrendBar'
import FollowMore from '../FollowMore/FollowMore'

function RightSidebar() {
    return (
        <div className='w-1/4 bg-dark w-full relative'>
            <SearchBar />
            <TrendBar />
            <FollowMore />
        </div>
    )
}

export default RightSidebar