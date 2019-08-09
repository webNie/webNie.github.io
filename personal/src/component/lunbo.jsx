import React, { Component } from 'react'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'

export default class Lunbo extends Component {
    componentDidMount() {
        new Swiper('.swiper-container', {
            slidesPerView: 1,
            centeredSlides: true,
            virtual: {
                slides:this.state.newlist,
            },
            pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true,
            },
        })
    }
    render() {
        return (
            <div className='Lunbo'>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                    </div>
                </div>
            </div>
        )
    }
}
