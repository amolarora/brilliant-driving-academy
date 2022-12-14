import React from 'react';
import 'tw-elements';
import holdenSpark from '../images/holdenSpark.jpg'

const Carousel = () => {
    return (
        <div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel">
            {/* <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                ></button>
            </div> */}
            <div class="carousel-inner relative w-full overflow-hidden">
                <div class="carousel-item active relative float-left w-full">
                    <div class='flex justify-center items-center'> {/* Added extra div */}
                        <img
                        src={holdenSpark}
                        class="block w-full brightness-[0.6]"
                        alt="..."
                        />
                        <div class="text-[#fff] md:block absolute text-center">
                            <h5 class="text-[25px] font-bold md:text-[50px] lg:text-[60px] xl:text-[80px] font-BebasNeue">Where your driving journey begins</h5>
                            <p className='text-[14px] md:text-[25px] lg:text-[32px] font-OpenSans font-extrabold sm:font-extrabold'>16 years of experience in New Zealand <br></br> (12 years of experience with AA)</p>
                        </div>
                    </div>
                </div>
                {/* <div class="carousel-item relative float-left w-full">
                    <img
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
                    class="block w-full"
                    alt="..."
                    />
                    <div class="carousel-caption hidden md:block absolute text-center">
                        <h5 class="text-xl">Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
                <div class="carousel-item relative float-left w-full">
                    <img
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                    class="block w-full"
                    alt="..."
                    />
                    <div class="carousel-caption hidden md:block absolute text-center">
                        <h5 class="text-xl">Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div> */}
            </div>
            {/* <button
                class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
            >
                <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button
                class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
            >
                <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button> */}
        </div>
    )
}

export default Carousel