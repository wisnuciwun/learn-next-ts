import { useRouter } from 'next/dist/client/router';
import Link from 'next/link'
import React, { useEffect } from 'react'

export default function Custom404() {

    const router = useRouter()
    
    const goHome = () => {
        router.push('/')
    }
    
    useEffect(() => {
        setTimeout(() => {
            goHome()
        }, 5000);
    }, [])//array is used to call it just only one time

    return (
        <div className="container">
            <div className="element">
                <h1 style={{backgroundColor: 'turquoise'}}>What are you looking for..</h1>
                <h1 style={{color: 'turquoise'}}><em>in life ?</em></h1>
                <p style={{color: 'turquoise'}} >Just go <button style={{backgroundColor: 'tomato', color: 'white', borderStyle: 'none', cursor: 'pointer'}} onClick={goHome}>home</button> when you were trouble</p>
            </div>
        </div>
    )
}
