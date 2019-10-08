

import React from 'react'

export default function Banner({childern, maintitle, subtitle}) {
    return (
        <div className="banner">
            <h1> {maintitle} </h1>
            <div></div>
            <p> {subtitle} </p>
            {childern}
        </div>
    )
}
