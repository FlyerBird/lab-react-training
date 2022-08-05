import React, { useState } from 'react'

export default function LikeButton() {
    const [num, SetNum] = useState(0)

    const handleLikes = () => {
        let likes = SetNum(num + 1)
        return likes
    }


    const colors = ['purple','blue','green','yellow','orange','red'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    let colorStyle = {
        backgroundColor: randomColor
    }


    return (
        <div className='likebutton'>
            <button onClick={handleLikes} style={colorStyle} > {num} Likes</button>
        </div>
    )
}



