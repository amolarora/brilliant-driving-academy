import React from 'react'
import Carousel from '../components/Carousel'
import { Link } from 'react-router-dom'

import LearnerImg from '../images/learner.jpg'
import RestrictedImg from '../images/restricted.jpg'
import FullLicImg from '../images/full-licence.jpg'
import InternationalImg from '../images/international.jpg'
import HireImg from '../images/car-hire.png'

const Home = () => {
    return (
        <div className='mb-10'>
            <Carousel />
            <div className='w-[100vw] h-[80px] sm:h-[100px] flex justify-center items-center'>
                <h2 className='text-[22px] lg:text-[30px] font-semibold'>Our Services</h2>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-8 w-[70vw] mx-[15vw] lg:w-[90vw] lg:mx-[5vw]'>
                <div className='inline-block'>
                    <div class="flex justify-center">
                        <div class="rounded-lg shadow-lg bg-[#fdd835] max-w-sm">
                            <Link to="/book-now">
                                <img class="rounded-t-lg" src={LearnerImg} alt=""/>
                            </Link>
                            <div class="p-6">
                                <h5 class="text-gray-900 text-xl font-medium mb-2">Driving Lessons</h5>
                                <p class="text-gray-700 text-base mb-4">
                                    Training for students with no experience (Novice drivers)
                                </p>
                                <Link to="/book-now">
                                    <button type="button" class=" inline-block px-6 py-2.5 bg-[#424242] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#616161] hover:shadow-lg focus:bg-[#616161] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#616161] active:shadow-lg">Book Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='inline-block'>
                    <div class="flex justify-center">
                        <div class="rounded-lg shadow-lg bg-[#fdd835] max-w-sm">
                            <Link to="/book-now">
                                <img class="rounded-t-lg" src={RestrictedImg} alt=""/>
                            </Link>
                            <div class="p-6">
                                <h5 class="text-gray-900 text-xl font-medium mb-2">Driving Lessons</h5>
                                <p class="text-gray-700 text-base mb-4">
                                    Training for Restricted Test / Mock Restricted Test
                                </p>
                                <Link to="/book-now">
                                    <button type="button" class=" inline-block px-6 py-2.5 bg-[#424242] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#616161] hover:shadow-lg focus:bg-[#616161] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#616161] active:shadow-lg">Book Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='inline-block'>
                    <div class="flex justify-center">
                        <div class="rounded-lg shadow-lg bg-[#fdd835] max-w-sm">
                            <Link to="/book-now">
                                <img class="rounded-t-lg" src={FullLicImg} alt=""/>
                            </Link>
                            <div class="p-6">
                                <h5 class="text-gray-900 text-xl font-medium mb-2">Driving Lessons</h5>
                                <p class="text-gray-700 text-base mb-4">
                                    Training for Full Licence Test / Mock Full Licence Test
                                </p>
                                <Link to="/book-now">
                                    <button type="button" class=" inline-block px-6 py-2.5 bg-[#424242] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#616161] hover:shadow-lg focus:bg-[#616161] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#616161] active:shadow-lg">Book Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='inline-block'>
                    <div class="flex justify-center">
                        <div class="rounded-lg shadow-lg bg-[#fdd835] max-w-sm">
                            <Link to="/book-now">
                                <img class="rounded-t-lg" src={InternationalImg} alt=""/>
                            </Link>
                            <div class="p-6">
                                <h5 class="text-gray-900 text-xl font-medium mb-2">Driving Lessons</h5>
                                <p class="text-gray-700 text-base mb-4">
                                    Training for Overseas Conversion
                                </p>
                                <Link to="/book-now">
                                    <button type="button" class=" inline-block px-6 py-2.5 bg-[#424242] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#616161] hover:shadow-lg focus:bg-[#616161] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#616161] active:shadow-lg">Book Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='inline-block'>
                    <div class="flex justify-center">
                        <div class="rounded-lg shadow-lg bg-[#fdd835] max-w-sm">
                            <Link to="/book-now">
                                <img class="rounded-t-lg" src={HireImg} alt=""/>
                            </Link>
                            <div class="p-6">
                                <h5 class="text-gray-900 text-xl font-medium mb-2">Car Hire</h5>
                                <p class="text-gray-700 text-base mb-4">
                                    Car hire only possible for sitting a driving test (Strict Conditions Apply)
                                </p>
                                <Link to="/book-now">
                                    <button type="button" class=" inline-block px-6 py-2.5 bg-[#424242] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#616161] hover:shadow-lg focus:bg-[#616161] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#616161] active:shadow-lg">Book Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='inline-block'>
                    <div class="flex justify-center">
                        <div class="block p-6 rounded-lg shadow-lg bg-white border-2 border-[#fdd835] max-w-sm">
                            <h5 class="text-gray-900 text-2xl font-semibold mt-[4px] md:mt-[4px] lg:mt-[30px] xl:mt-[40px] mb-8 md:mb-6 lg:mb-10 xl:mb-12">
                                Pricing
                            </h5>
                            <p class="text-gray-900 text-base font-semibold mb-1 text-left">
                                Basic Plan
                            </p>
                            <p class="text-gray-700 text-base mb-8 text-left">
                                $65.00 per hour / per lesson
                            </p>
                            <p class="text-gray-900 text-base font-semibold mb-1 text-left">
                                Premium Package deal
                            </p>
                            <p class="text-gray-700 text-base mb-12 md:mb-6 lg:mb-12 xl:mb-14 text-left">
                                5 lesson package deal for $300.00 (5 lessons / 5 hours)
                            </p>
                            <Link to="/book-now">
                                <button type="button" class=" inline-block mb-1 md:mb-0 xl:mb-4 px-6 py-2.5 bg-[#424242] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#616161] hover:shadow-lg focus:bg-[#616161] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#616161] active:shadow-lg">Book Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home