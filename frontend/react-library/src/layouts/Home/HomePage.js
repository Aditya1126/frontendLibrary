import React from 'react'
import Carousel from './components/Carousel'
import ExploreToBooks from './components/ExploreToBooks'
import { Heros } from './components/Heros'
import { LibraryServices } from './components/LibraryServices'
import { ReturnBook } from './components/ReturnBook'

const HomePage = () => {
    return (
        <div>
            <ExploreToBooks />
            <Carousel />
            <Heros />
            <LibraryServices />
        </div>
    )
}

export default HomePage