import React, { useRef } from 'react';
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
        <div className='bg-[#fdfdfd] sm:h-[calc(100vh-180px)] mb-10'>
            <h1 className='py-[30px] text-[28px] font-extrabold'>Contact Us</h1>
            
            <div className='w-[100vw]'>
                
                {/* Enquiry Form */}
                <div className='inline-block lg:mr-[10px] xl:mr-[200px]'>
                    <h2 className='text-[22px] pb-2'>Make an Enquiry</h2>
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
                                    name="customer-name">
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
                                        name="customer-email">
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

                {/* Instructor Details */}
                <div class="inline-block mt-10 lg:mt-0">
                    <h2 className='text-[22px] pb-2'>Reach out to us</h2>
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
                            {/* <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button> */}
                        </div>
                        <div class="py-[25px] text-[10px] md:text-[15px] border-t border-gray-300 font-extrabold lg:font-bold px-4 text-gray-600">
                            {/* <p className='inline-block pr-1'>Phone:</p> */}
                            <img src={phoneImg} className="w-[20px] pr-2 mt-[-2px] inline-block" alt="Telephone"></img>
                            <a href="tel:0211668456" className='text-[#1558d6] hover:underline inline-block pr-4 md:pr-4'>0211668456</a>
                            {/* <p className='inline-block pr-1'>Email:</p> */}
                            <img src={emailImg} className="w-[25px] pr-2 mt-[-2px] inline-block" alt="Telephone"></img>
                            <a href="mailto:jai@brilliantdrivingacademy.co.nz" className='text-[#1558d6] inline-block hover:underline'>jai@brilliantdrivingacademy.co.nz</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs