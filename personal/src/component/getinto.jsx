import React, { Component } from 'react'
import './index.css'
import { NavLink } from 'react-router-dom'

export default class Getinto extends Component {
    render() {
        return (
            <div className='Getinto'>
                <div>
                    <h1 className='logo'>1</h1>
                </div>
                <div className='niemargin'>
                    <div className='Getinto-font'>
                        <p>
                            <NavLink to='/denglu'>进入我的小世界</NavLink>
                        </p>
                    </div>
                    <div className='fontnie'>webNie , A good day from now on !</div>
                </div>
            </div>
        )
    }
}