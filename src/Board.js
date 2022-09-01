import React from 'react'
import img1 from './img/hand-drawn-valentine-s-day-couple-collection_23-2148808860.webp'

const Board = (props) => {
    const path=[img1]
  return (
    <div className='img-div'>
        <img src={path[0]} alt="" />
        <h2 className='result'>{props.result}</h2>
    </div>
  )
}

export default Board