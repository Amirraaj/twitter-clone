import React from 'react'

function HomeBar() {
    return (
        <div className='sticky top-0 left-0 right-0 flex justify-between items-center p-5 backdrop-blur-2xl'>
            <h1 className='text-light cursor-pointer text-3xl font-medium'>Home</h1>
            <i className="fa-regular fa-star fa-xl text-light cursor-pointer font-medium text-2xl"></i>
        </div>
    )
}

export default HomeBar