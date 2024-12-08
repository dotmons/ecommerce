import React from 'react'
import '../css/Header.css'

export default function Header() {
    return (
        <div>

            <p></p>
            <div className='links'>
                <h1>Products</h1>
                <span>
                    <a href='/'>Products</a>
                </span>
                <span>
                    <a href='/favorites'>Favorites</a>
                </span>
            </div>
        </div>
    )
}
