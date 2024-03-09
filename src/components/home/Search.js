import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type='text' placeholder='search for a fleet'/>
      </div>
      <div className='userChat'>
        <img src='https://d1jyxxz9imt9yb.cloudfront.net/medialib/4059/image/s768x1300/AdobeStock_362156363_441361_reduced.jpg' />
        <div className='userChatInfo'>
          <span>plm</span>
        </div>
      </div>
    </div>
  )
}

export default Search