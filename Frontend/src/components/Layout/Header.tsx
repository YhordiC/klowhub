'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Icon_Shopping_Cart } from '../../../public/icons/Header_Icon/Shopping_cart';
import { Icon_Notification } from '../../../public/icons/Header_Icon/Notification';
import { Icon_Email } from '../../../public/icons/Header_Icon/Email';
import { Icon_luggage } from '../../../public/icons/Header_Icon/luggage';
import { Space } from '../../../public/icons/Header_Icon/Space';
import { Sun_Icon } from '../../../public/icons/Header_Icon/Sun';
import { Info_Icon } from '../../../public/icons/Header_Icon/Info';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

export function Header() {
    const [isActive, setIsActive] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {items} = useContext(CartContext)
    const toggleSwitch = () => {
        setIsActive((prev) => !prev);
    };

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const rutas = [
        { id: 1, name: "Dashboard", path: "/home/dashboard" },
        { id: 2, name: "Cursos y Lecciones", path: "/home/cursos" },
        { id: 3, name: "Appstore", path: "/home/Appstores" },
        { id: 4, name: "Proyectos", path: "/home/Proyectos" },
        { id: 5, name: "Consultoria", path: "/home/Consultoria" },
        { id: 6, name: "Sobre Appsheet", path: "/home/Sobre Appsheet" },
    ]


    return (
        <header className="mt-3 relative text-white font-inter mb-14 ">

            <div className="absolute top-0 left-0 h-20 -z-10 blur-md">
                <Image
                    src="/img/Header_Img/Header_img.png"
                    rel="preload"
                    priority={true}
                    alt="fondo"
                    height={20}
                    width={4600}
                />
            </div>
            <div className="absolute top-0 left-0 w-full h-[4.5rem] -z-[10] bg-[#1F2026] opacity-60"></div>

            <div className="flex items-center 2xl:justify-evenly justify-between px-4 md:px-10">
                <div className='flex items-center'>
                    <Image
                        alt="Logo"
                        src="/img/Header_Img/Logo.png"
                        className='hidden xl:block '
                        priority={false}
                        width={50}
                        height={50}
                        style={{ height: 'auto', width: 'auto' }}
                    />
                    <Image alt="Logo" src="/img/Header_Img/Logo_2.png" className='xl:hidden' width={50} height={50} />
                </div>


                <nav className="hidden xl:flex md:space-x-6 ">
                    <div className="flex items-center gap-2 bg-gray-500/100 py-1 px-2 rounded-md">
                        <Link href="/home   " className="hover:text-purple-400">Home</Link>
                        <Link href="#" className="bg-purple-500 text-white px-2 rounded-md">Plataforma</Link>
                    </div>
                    <div className="flex gap-4 text-sm items-center">
                        {rutas.map((item, index) => (
                            <Link key={index} href={item.path} className="hover:text-purple-400">
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </nav>


                <div className="hidden xl:flex items-center space-x-4">
                    <div className="flex items-center space-x-3">
                        <Link href="/home/shopping_card" className="relative hover:text-purple-400"><Icon_Shopping_Cart />
                        <p className='text-xs absolute -top-1 -right-3 px-2 py-1 rounded-full bg-white text-[#1F2937]'>{items.length}</p></Link>
                        <Link href="/home/shopping_card" className="hover:text-purple-400"><Icon_Notification /></Link>
                        <Link href="/home/shopping_card" className="hover:text-purple-400"><Icon_Email /></Link>
                    </div>
                    <div className="flex items-center space-x-3">
                        <button className="px-4 py-2 rounded-full text-sm font-semibold">Explorador</button>
                        <div className="flex items-center  rounded-xl bg-purple-600 cursor-pointer gap-x-2 px-1" onClick={toggleSwitch}>
                            <Icon_luggage classname='bg-white rounded-xl' />
                            <Space width={20} height={20} stroke={isActive ? 'white' : 'white'} />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-purple-500 overflow-hidden">
                            <Image src="/img/Header_Img/avatar.png" alt="Profile Picture" width={100} height={100} className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                <button className="xl:hidden " onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            {isMenuOpen && (
                <nav className="xl:hidden w-[70%] md:w-[50%] bg-[#1F2026] text-sm space-y-4 py-4 px-6 fixed top-0 right-0 duration-300 h-screen overflow-auto md:z-10 max-md:z-10">
                    <button onClick={toggleMenu} className="absolute top-4 right-4 text-2xl text-white">✕</button>

                    <div className='flex flex-row'>
                        <button className="px-4 py-2 rounded-full text-sm font-semibold">Explorador</button>
                        <div
                            className="flex items-center  rounded-2xl bg-purple-600 cursor-pointer gap-x-3 px-1 "
                            onClick={toggleSwitch}
                        >
                            <Icon_luggage classname='bg-white rounded-xl' />
                            <Space width={20} height={20} stroke={isActive ? 'white' : 'white'} />
                        </div>
                    </div>
                    {rutas.map((item, index) => (
                        <Link key={index} href={item.path} className="block text-purple-400">
                            {item.name}
                        </Link>
                    ))}
                    <div className="flex items-center w-2/3 gap-2 bg-gray-600/100 py-2 px-2 rounded-md">
                        <Link href="/home" className="hover:text-purple-400">Home</Link>
                        <Link href="#" className="bg-purple-500 text-white px-2 rounded-md">Plataforma</Link>
                    </div>
                    <div className='bg-gray-300/15 rounded-md p-2 px-3'>
                        <div className="flex flex-row items-center gap-x-3 w-8 h-8 rounded-md ">
                            <Image src="/img/Header_Img/avatar.png" alt="Profile Picture" width={100} height={100} className="w-full h-full rounded-full object-cover" />
                            <h3 className='text-white'>Perfil</h3>
                        </div>
                        <hr className='border-white mt-2 mb-2' />
                        <div className="flex flex-row items-center gap-x-3 w-auto h-8 rounded-md ">
                            <Sun_Icon width={20} height={20} />
                            <p>Cambia a modo oscuro/claro</p>
                        </div>
                        <hr className='border-white mt-2 mb-2' />
                        <div className="flex flex-row items-center gap-x-3 w-auto h-8 rounded-md ">
                            <Info_Icon width={20} height={20} />
                            <p>Soporte</p>
                        </div>
                        <hr className='border-white mt-2 mb-2' />
                        <div className="flex items-center space-x-6 justify-center">
                            <Link href="/home/shopping_card" className="hover:text-purple-400 scale-150"><Icon_Shopping_Cart /></Link>
                            <Link href="/home/shopping_card" className="hover:text-purple-400 scale-150"><Icon_Notification /></Link>
                            <Link href="/home/shopping_card" className="hover:text-purple-400 scale-150"><Icon_Email /></Link>
                        </div>
                    </div>
                </nav>
            )}
        </header>
    );
}