import React, {Component} from 'react'
import AsyncComponent from '../AsyncComponent.js'
const Loading = AsyncComponent(() => import ("./loading/loading.js"));
const MiniCarousel = AsyncComponent(() => import ("./Carousel/carousel.js"));
module.exports = {
    Loading,
    MiniCarousel
}