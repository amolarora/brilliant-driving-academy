import { useState, useEffect } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";

export default function Example() {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
    window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false)
    );
    }, []);

    const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-right lg:gap-6">
        <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
        >
        <a href="#" className="flex items-center">
            Contact Us
        </a>
        </Typography>
        <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
        >
        <a href="#" className="flex items-center">
            About Us
        </a>
        </Typography>
    </ul>
    );

    return (
    <Navbar className="mx-auto w-[100vw] py-2 px-4 lg:px-2 lg:py-4 bg-[#fdd835] sticky-top">
        <div className="mx-[2vw] pt-2 lg:pt-0 flex items-center justify-between text-blue-gray-900">
            <Typography
                as="a"
                href="#"
                variant="small"
                className="mr-4 cursor-pointer py-1.5 font-normal"
            >
                <span className="font-BebasNeue text-[30px]">Brilliant Driving Academy</span>
            </Typography>
            
            <div className="hidden lg:block lg:ml-[35vw] xl:ml-[50vw]">{navList}</div>
            
            <Button variant="gradient" size="sm" className="hidden lg:inline-block lg:bg-[#424242] lg:text-white lg:rounded-[10px]">
                <span>Book Now</span>
            </Button>
            <IconButton
                variant="text"
                className="ml-auto h-6 w-6 mt-[-30px] text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
            >
                {openNav ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
                ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
                )}
            </IconButton>
        </div>
        <MobileNav open={openNav}>
            {navList}
            <Button variant="gradient" size="sm" fullWidth className="mb-2 bg-[#424242] rounded-[10px]">
                <span className="text-white">Book Now</span>
            </Button>
        </MobileNav>
    </Navbar>
    );
}