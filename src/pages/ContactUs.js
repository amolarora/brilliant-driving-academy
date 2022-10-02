import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async'
import emailjs from '@emailjs/browser';
import phoneImg from '../images/phone.png';
import emailImg from '../images/email.png';

const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_383dy8e', 'template_vnjaebu', form.current, 'OlqckIxyvGLrzypAc')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
    
    return (
        <>
            <Helmet>
                <title>Brilliant Driving Academy | Contact Us</title>
                <meta name="description" content="Instructor Jai Nair has 16 years of experience in New Zealand (12 years of experience with AA)" />
                <link rel="canonical" href="/contact-us" />
            </Helmet>

            <div className='bg-[#fdfdfd] sm:h-[calc(100vh-180px)] mb-10 md:mb-20 lg:mb-10'>
                <h1 className='py-[30px] text-[28px] font-bold'>Contact Us</h1>
                
                <div className='w-[100vw]'>

                    {/* Instructor Details */}
                    <div class="inline-block lg:mr-[10px] xl:mr-[200px]">
                        <h2 className='text-[22px] pb-2 font-semibold'>Reach out to us</h2>
                        <div class="block rounded-lg shadow-lg bg-white w-[350px] md:w-[500px] text-center">
                            <div class="py-6 px-6 text-gray-600 border-b border-gray-300 font-bold">
                                Trainer
                            </div>
                            <div class="p-8">
                                <h5 class="text-gray-900 text-xl font-medium mb-2">Jai Nair</h5>
                                <p class="text-gray-700 text-[14px] md:text-[16px] mb-4">
                                    16 years of experience in New Zealand <br></br>
                                    (12 years of experience with AA)
                                </p>
                            </div>
                            <div class="py-[25px] text-[13px] md:text-[15px] border-t border-gray-300 font-bold lg:font-bold px-2 text-gray-600">
                                <img src={phoneImg} className="w-[18px] pr-1 mt-[-2px] inline-block" alt="Telephone icon"></img>
                                <a href="tel:0211668456" className='text-[#1558d6] hover:underline inline-block pr-3 lg:pr-3 md:pr-4'>0211668456</a> 
                                <br className='block lg:hidden'></br>
                                <img src={emailImg} className="w-[25px] pr-2 mt-[-2px] inline-block" alt="Email icon"></img>
                                <a href="mailto:jai@brilliantdrivingacademy.co.nz" className='text-[#1558d6] inline-block hover:underline'>jai@brilliantdrivingacademy.co.nz</a>
                            </div>
                        </div>
                    </div>
                    
                    {/* Enquiry Form */}
                    <div className='inline-block mt-10 lg:mt-0'>
                        <h2 className='text-[22px] pb-2 font-semibold'>Make an Enquiry</h2>
                        <div class="block p-6 rounded-lg shadow-xl bg-white w-[350px] md:w-[500px]">
                            <form ref={form} onSubmit={sendEmail}>
                                <div class="form-group mb-6">
                                    <input type="text" class="form-control block
                                        w-full
                                        px-3
                                        py-1.5
                                        text-base
                                        font-normal
                                        text-gray-700
                                        bg-white bg-clip-padding
                                        border border-solid border-gray-300
                                        rounded
                                        transition
                                        ease-in-out
                                        m-0
                                        focus:text-gray-700 focus:bg-white focus:border-[#fdd835] focus:outline-none focus:ring-0" id="exampleInput125"
                                        placeholder="Your Name"
                                        name="customer-name"
                                        required
                                    >
                                    </input>
                                </div>
                                <div class="grid grid-cols-2 gap-4">
                                    <div class="form-group mb-6">
                                        <input type="text" class="form-control
                                            w-full
                                            px-3
                                            py-1.5
                                            text-base
                                            font-normal
                                            text-gray-700
                                            bg-white bg-clip-padding
                                            border border-solid border-gray-300
                                            rounded
                                            transition
                                            ease-in-out
                                            m-0
                                            focus:text-gray-700 focus:bg-white focus:border-[#fdd835] focus:outline-none focus:ring-0" id="exampleInput125"
                                            placeholder="Email"
                                            name="customer-email"
                                            required
                                        >
                                        </input>
                                    </div>
                                    <div class="form-group mb-6">
                                        <input type="text" class="form-control
                                            w-full
                                            px-3
                                            py-1.5
                                            text-base
                                            font-normal
                                            text-gray-700
                                            bg-white bg-clip-padding
                                            border border-solid border-gray-300
                                            rounded
                                            transition
                                            ease-in-out
                                            m-0
                                            focus:text-gray-700 focus:bg-white focus:border-[#fdd835] focus:outline-none focus:ring-0" id="exampleInput125"
                                            placeholder="Phone Number"
                                            name="customer-phone"
                                            required
                                        >
                                        </input>
                                    </div>
                                </div>
                                <div class="form-group mb-6">
                                    <textarea type="text" class="form-control block
                                        w-full
                                        px-3
                                        py-1.5
                                        text-base
                                        font-normal
                                        text-gray-700
                                        bg-white bg-clip-padding
                                        border border-solid border-gray-300
                                        rounded
                                        transition
                                        ease-in-out
                                        m-0
                                        focus:text-gray-700 focus:bg-white focus:border-[#fdd835] focus:outline-none focus:ring-0" id="exampleInput125"
                                        rows="4"
                                        placeholder="Your message..."
                                        name="message"
                                        required
                                    >
                                    </textarea>
                                </div>
                                <button type="submit"class="
                                    w-full
                                    px-6
                                    py-2.5
                                    bg-[#424242]
                                    text-white
                                    font-medium
                                    text-xs
                                    leading-tight
                                    uppercase
                                    rounded-[8px]
                                    shadow-md
                                    hover:bg-[#616161] hover:shadow-lg
                                    focus:bg-[#616161] focus:shadow-lg focus:outline-none focus:ring-0
                                    active:bg-[#616161] active:shadow-lg
                                    transition
                                    duration-150
                                    ease-in-out"
                                >
                                    Submit Enquiry
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs