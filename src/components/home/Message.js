import React from 'react'

function Message() {
  return (
    <div className='message owner'>
      <div className='messageInfo'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI-ycnCXMU_IhRLsRqnkOnGExWNNDFFy07Kg&usqp=CAU' alt=''/>
        <span>just now</span>
      </div>
      <div className='messageContent'>
        <p>hello</p>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa_MutQ_pps4L9z9ca0TlJAsAlqh81a_bvbA&usqp=CAU'/>
      </div>

    </div>
  )
}

export default Message