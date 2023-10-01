import React from 'react'

import { ExploreTopBooks } from './components/ExploreToBooks'
import { Heros } from './components/Heros'
import { LibraryServices } from './components/LibraryServices'
import { Carousel } from './components/Carousel'


const HomePage = () => {
    return (
        <div>
            <ExploreTopBooks />
            <Carousel />
            <Heros />
            <LibraryServices/>
        </div>
    )
}

export default HomePage