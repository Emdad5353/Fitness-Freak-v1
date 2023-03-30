import React from 'react'

export const Featurebox = (props) => {
  return (
    <div id='a-box'>
        <div className='a-b-img'>
            <img src={props.image} alt="" />
        </div>
        <div className='a-b-text'>
            <h2>{props.title}</h2>
            <p>Success usually comes to those who are too busy to be looking for it.</p>
        </div>
    </div>
  )
}
