import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const BookNow = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_383dy8e', 'template_um24vpq', form.current, 'OlqckIxyvGLrzypAc')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };

    return (
        <div className='mb-10'>
            <h1 className='py-[30px] text-[28px] font-extrabold'>Request a Booking</h1>
            
            <div className='w-[100vw] flex justify-center'>
                <div class="block p-6 rounded-lg shadow-xl bg-white max-w-[90vw] sm:max-w-2xl">
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
                            <select type="text" class="form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-[#999999]
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-[#fdd835] focus:outline-none focus:ring-0" id="exampleInput123"
                                aria-describedby="emailHelp123"
                                name="service"
                            >
                                <option value="" disabled selected>Choose from our services</option>
                                <option value="Training for Novice Drivers">Training for students with no experience (Beginners / Novice drivers)</option>
                                <option value="Training for Restricted Licence">Training for Restricted Test / Mock Restricted Test</option>
                                <option value="Training for Full Licence">Training for Full Licence Test / Mock Full Licence Test</option>
                                <option value="Training for Overseas Converion">Training for Overseas Converion</option>
                                <option value="Car Hire">Car hire for sitting your driving test (Strict Conditions Apply)</option>
                            </select>
                        </div>
                        <div class="form-group mb-6">
                            <select type="text" class="form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-[#999999]
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-[#fdd835] focus:outline-none focus:ring-0" id="exampleInput123"
                                aria-describedby="emailHelp123"
                                name="plan"
                            >
                                <option value="" disabled selected>Sellect your plan</option>
                                <option value="Basic Plan ($65.00)">Basic Plan - $65.00 per hour / per lesson</option>
                                <option value="Premium Package ($300.00)">Premium Package deal - 5 lesson package deal for $300.00 (5 lessons / 5 hours)</option>
                            </select>
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
                            Book Now
                        </button>
                        <p className='text-[10px] sm:text-[12px] pt-3 text-left'>
                            Please Note: Our Driving Lessons are conducted using Automatic Cars only 
                            (Manual Car lessons are only possible in a student's car with good experience)
                        </p>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default BookNow