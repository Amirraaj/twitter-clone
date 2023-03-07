import React from 'react'

function SearchBar() {
  return (
    <div className='sticky top-0 left-0 right-0 flex items-center justify-start pt-5 pb-1 px-5 bg-dark z-10  '>
        <div className='bg-hover-dark rounded-full flex items-center '>
        <i className="fa-solid fa-magnifying-glass fa-lg text-light pl-5"></i>
            <input type="text" className='bg-hover-dark py-3 rounded-full px-10  text-xl  text-light border-0 outline-none'
                placeholder='Search...'
            />
        </div>
    </div>
  )
}

export default SearchBar