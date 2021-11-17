import Link from 'next/link'
import React from 'react'

export default function Custom404() {
    return (
        <div className="container">
            <div className="element">
                <h1 style={{backgroundColor: 'turquoise'}}>What are you looking for..</h1>
                <h1 style={{color: 'turquoise'}}><em>in life ?</em></h1>
                <p style={{color: 'turquoise'}} >Just go <button style={{backgroundColor: 'tomato', color: 'white', borderStyle: 'none', cursor: 'pointer'}}><Link href="/">home</Link></button> when you were trouble</p>
            </div>
        </div>
    )
}
