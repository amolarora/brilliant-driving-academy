import React from 'react'
import 'tw-elements';
import AboutUsImg from '../images/About-Us.png'

const AboutUs = () => {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
                <div class="carousel-inner relative w-full overflow-hidden">
                    <div class="carousel-item active relative float-left w-full">
                        <div className='flex justify-center items-center'>
                            <img src={AboutUsImg} className='block w-[100vw] brightness-[0.6] h-[20vh] sm:h-[32vh] md:h-[32vh] lg:h-[32vh] xl:h-[80vh] object-cover' alt=''></img>
                            <div class="text-[#fff] md:block absolute text-center">
                                <h5 class="text-[25px] font-semibold md:text-[50px] lg:text-[60px] xl:text-[80px] font-BebasNeue">About Us</h5>
                                <p className='text-[10px] md:text-[15px] lg:text-[20px] xl:text-[25px] font-bold sm:font-bold max-w-[75vw] sm:max-w-[70vw]'>Brilliant Driving Academy believes in relentless pursuit of exceptional driving by providing very high quality driving instructions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-[30px] text-[12px] sm:text-[18px] font-extrabold w-[75vw] mx-[12.5vw] sm:w-[70vw] sm:mx-[15vw] sm:mt-5 text-left'>
                <p>At Brilliant Driving Academy you're in great hands, instructor Jai Nair is a qualified professional driving instructor with 16 years of experience in New Zealand (12 years of experience with AA).</p> <br></br>
                <p>We train drivers at all experience levels, whether you're a novice driver or someone preparing for their full licence test. We got you covered!</p> <br></br>
                
                <p>We provide training for:</p>
                <ul className='list-disc ml-[1rem]'>
                    <li>Students with no experience (Novice drivers)</li>
                    <li>Restricted Test / Mock Restricted Test</li>
                    <li>Full Licence Test / Mock Full Licence Test</li>
                    <li>Overseas Licence Conversion</li>
                </ul>

                <br></br>

                <p>We offer flexible plans:</p>
                <ul className='list-disc ml-[1rem]'>
                    <li>Basic Plan - $65.00 per hour / per lesson</li>
                    <li>Premium Package - 5 lesson package deal for $300.00 (5 lessons / 5 hours)</li>
                </ul>

                <br></br>

                <p>
                    Contact us on <a href="tel:0211668456" className='text-[#1558d6] hover:underline'>0211668456</a>, 
                    or email us at <a href="mailto:jai@brilliantdrivingacademy.co.nz" className='text-[#1558d6] hover:underline'>jai@brilliantdrivingacademy.co.nz</a>
                </p>
            </div>
        </>
    )
}

export default AboutUs