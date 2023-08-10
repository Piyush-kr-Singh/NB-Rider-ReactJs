import React from 'react'
import './HomeSection.css';
import bg07 from '../photos/bg07.webp';
import bg08 from '../photos/bg08.webp';
import bg09 from '../photos/bg09.jpg';
import bg10 from '../photos/bg10.jpg';
import bg11 from '../photos/bg11.jpg';
import FAQ from './FAQ';

const HomeSection = () => {
    return (
        <>
        <div>
            <section className='container mt-5'>
                <div class=" container max-w mx-auto py-4 px-4">
                    <h2 class="text text-4xl md:text-5xl font-bold text-center" style={{fontSize:'5vw'}}>Some <span>Best Reviews</span> of Vehicles</h2>
                    <p class="text-center py-4 text-gray-600" style={{fontSize:'2vw'}}>More than just vehicles, they're dreams in motion</p>

                    <div class="grid grid-rows-none md-grid-cols-5 py-4 gap-2 md-gap-4">
                        <img src={bg11} alt="pic1" class="w-full h-full object-cover col-span-2 md-col-span-3 row-span-2" />
                        <img src={bg07} alt="pic2" class="w-full h-full object-cover" />
                        <img src={bg08} alt="pic3" class="w-full h-full object-cover" />
                        <img src={bg09} alt="pic4" class="w-full h-full object-cover" />
                        <img src={bg10} alt="pic5" class="w-full h-full object-cover" />
                    </div>
                </div>
            </section>


            <FAQ className='container' />
        </div>
        </>
    )
}

export default HomeSection
