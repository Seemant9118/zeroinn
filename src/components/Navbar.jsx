"use client";
import { useState } from 'react';
import Image from 'next/image';
import menu from '../../asserts/menu.png';
import close from '../../asserts/close.png';
import close2 from '../../asserts/close2.png';
import { Facebook, Linkedin, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';



export default function Navbar() {
    const [activeNav, setActiveNav] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);

    const navList = [
        { id: 1, title: 'Home', path: 'home' },
        { id: 2, title: 'Services', path: 'service' },
        { id: 3, title: 'Technologies', path: 'technologies' },
        { id: 4, title: 'Team', path: 'team' },
        { id: 5, title: 'Contact', path: 'contact' },
    ];

    const handleMenuBtn = () => {
        setTimeout(() => setMenuOpen(!menuOpen), 500);
    }

    return (
        <>
            <div className="sticky top-0 z-20 bg-primary">
                <div className="sm:h-24 h-20 w-full lg:px-28 md:px-20 px-5 pt-2 pb-2 grid lg:grid-cols-3 grid-cols-2 text-white">
                    {/* logo */}
                    <div id="logo" className="h-full flex justify-start items-center">
                        <div className='object-conatin cursor-pointer'>
                            <h1 className="sm:text-4xl text-3xl font-bold"><Link href={'/'}>Zeroin</Link></h1>
                        </div>
                    </div>
                    {/* navItem */}
                    <div id="nav-lists" className="h-full hidden lg:flex  justify-start items-center ">
                        <ul className="flex lg:gap-3 ">
                            {navList.map((item) => (
                                <div key={item.id}>
                                    {
                                        activeNav == item.path ?
                                            <Link className={"font-bold text-white hover:cursor-pointe hover:text-white"} href={`/#${item.path}`} onClick={() => setActiveNav(item.title)}>{item.title}</Link>
                                            :
                                            <Link className={"text-slate-300 hover:cursor-pointe hover:text-white"} href={`/#${item.path}`} onClick={() => setActiveNav(item.title)}>{item.title}</Link>
                                    }
                                </div>
                            ))}
                        </ul>
                    </div>
                    {/* Mobile hamburgerMenu Icon*/}
                    <div id="menu" className="h-full flex justify-end items-center">
                        <div className="sm:w-1/6 sm:h-1/2 h-2/3 w-1/4 hover:cursor-pointer" onClick={handleMenuBtn}>
                            {menuOpen ? <Image className="w-full h-full object-contain" src={close} alt='close-icon' priority /> : <Image className="w-full h-full object-contain p-1" src={menu} alt='menu-icon' priority />}
                        </div>
                    </div>
                </div>
                {/* Menu Bar  */}
                {
                    menuOpen &&
                        <div className="bg-primary w-full h-screen lg:px-28 md:px-20 px-5 py-5 absolute z-20 lg:hidden ">
                            <ul className="flex flex-col gap-10 items-start font-semibold cursor-pointer">
                                {navList.map((item) => (
                                    <div key={item.id} onClick={handleMenuBtn}>
                                        {
                                            activeNav == item.path ?
                                                <Link className={"text-xl font-bold text-white hover:cursor-pointe hover:text-white"} href={`/#${item.path}`} onClick={() => setActiveNav(item.title)} >{item.title}</Link>
                                                :
                                                <Link className={"text-xl text-slate-300 hover:cursor-pointe hover:text-white"} href={`/#${item.path}`} onClick={() => setActiveNav(item.title)}>{item.title}</Link>
                                        }
                                    </div>
                                ))}
                            </ul>
                        </div> 
                }
            </div>

            {/* Desktop Menu SideBar */}
            {
                menuOpen &&
                <div className="bg-[#11101064] h-screen w-full hidden lg:flex justify-end fixed z-30 top-0 right-0">
                    <div className="h-full w-3/12 p-5 bg-white flex flex-col gap-8">
                        {/* logo */}
                        <div id="close2" className="flex justify-end">
                            <Image className="w-1/12 hover:cursor-pointer" src={close2} alt="closeIcon" onClick={handleMenuBtn} />
                        </div>

                        <div id="logo" className="flex justify-start items-center">
                            <div className='object-conatin cursor-pointer'>
                                <h1 className="lg:text-4xl md:text-2xl sm:text-xl text-lg font-bold hover:cursor-pointer text-primary">Zeroin</h1>
                            </div>
                        </div>
                        <div id="desc" className="text-gray-500">
                            Delivering Customize Business Solutions
                        </div>

                        <div id="links" className="flex flex-col gap-4">
                            <h3 className="font-bold">Quick Links</h3>
                            <ul className="text-gray-600 flex flex-col gap-3 font-semibold">
                                <Link className="hover:text-primary transition-all ease-in duration-300 hover:cursor-pointer hover:pl-1" href={'/#about'}>About Us</Link>
                                <Link className="hover:text-primary transition-all ease-in duration-300 hover:cursor-pointer hover:pl-1" href={'/#team'}>Our Team</Link>
                                <Link className="hover:text-primary transition-all ease-in duration-300 hover:cursor-pointer hover:pl-1" href={'/#service'}>Our Services</Link>
                                <Link className="hover:text-primary transition-all ease-in duration-300 hover:cursor-pointer hover:pl-1" href={'/#contact'}>Contact Us</Link>
                            </ul>
                        </div>

                        <div id="social-links" className="flex flex-col gap-3">
                            <h3 className="font-bold">Follow Us On</h3>
                            <ul className="flex gap-5 text-gray-600">
                                <li className='hover:text-primary hover:cursor-pointer' ><Facebook /></li>
                                <li className='hover:text-primary hover:cursor-pointer'><Twitter /></li>
                                <li className='hover:text-primary hover:cursor-pointer'><Linkedin /></li>
                                <li className='hover:text-primary hover:cursor-pointer'><Youtube /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}