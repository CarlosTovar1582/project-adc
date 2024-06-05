import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ReactPlayer from 'react-player'
import Marquee from "react-fast-marquee"


{/* <svg fill="currentColor" viewBox="0 0 24 24" {...props}> */}


const navigation = {
    main: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Jobs', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Accessibility', href: '#' },
      { name: 'Partners', href: '#' },
    ],
    social: [
      {
        name: 'Facebook',
        href: '#',
        icon: (props) => (
          <svg fill="" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },            
      {
        name: 'YouTube',
        href: '#',
        icon: (props) => (
          <svg fill="" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
    ],
  }
  
  export default function Footer() {
    return (
      <footer className="bg-gradient-to-t from-orange-400 via-orange-400 to-orange-300 rounded-3xl">
        
          {/* url={require('../videos/stormy.mp4')} 
              https://www.youtube.com/watch?v=MtIibcNDQ6o&list=RDpPNLikPetxg&index=9
          */}
          {/*  
          <div className='mx-auto bg-red-700 h-96 w-96 items-center justify-center'> 
          <ReactPlayer
          url={require('../videos/paseo.mp4')}
          width='100%'
          height='100%'
          controls
          playing
          muted               
          onEnded={()=> alert('termino el video')}    
          />
          </div>
          
          */}
          <div className="grid grid-cols-1   w-full h-full   px-1 py-5  rounded-3xl ">
            <div className='flex justify-center '>
              <img src="https://i.postimg.cc/L5jSQXxt/mapa.png" className=" rounded-3xl border-2 border-black  " alt="Flowbite Logo" /> 
            </div>            
          </div> 
          {/* Clientes o proveedores en mobile */}
          <div className="grid grid-cols-4   w-full h-full   px-1 py-5  rounded-3xl xl:hidden font-title text-1xl  ">
            <div className='col-span-4 mx-auto  text-white font-extrabold text-center '>NUESTROS SOCIOS</div>
            <div className='col-span-2 mx-auto py-2 flex justify-center items-center pr-1'><img src="https://i.postimg.cc/NM66qwwP/Whats-App-Image-2024-04-26-at-10-38-49-AM.jpg" className=" rounded-2xl mx-auto transition duration-300 ease-in-out hover:scale-95" alt="Flowbite Logo" /></div>
            <div className='col-span-2 mx-auto py-2 flex justify-center items-center pl-1'><img src="https://i.postimg.cc/7PCM6x6T/snider1.png" className=" rounded-2xl mx-auto transition duration-300 ease-in-out hover:scale-95" alt="Flowbite Logo" /></div>
            <div className='col-span-2 mx-auto py-2 flex justify-center items-center pr-1'><img src="https://i.postimg.cc/gjM6mzt4/Whats-App-Image-2024-04-26-at-10-41-10-AM.jpg" className="rounded-2xl mx-auto transition duration-300 ease-in-out hover:scale-95" alt="Flowbite Logo" /></div>
            <div className='col-span-2 mx-auto py-2 flex justify-center items-center pl-1'><img src="https://i.postimg.cc/8cmq0Hkw/chint.jpg" className=" rounded-2xl mx-auto transition duration-300 ease-in-out hover:scale-95" alt="Flowbite Logo" /></div>
            <div className='col-span-2 mx-auto py-2 flex justify-center items-center pr-1'><img src="https://i.postimg.cc/XJ2WYcVN/Color-Siemens-Logo.webp" className=" rounded-2xl mx-auto transition duration-300 ease-in-out hover:scale-95" alt="Flowbite Logo" /></div>
            <div className='col-span-2 mx-auto py-2 flex justify-center items-center pl-1'><img src="https://i.postimg.cc/fbpF38xc/autonic.jpg" className=" rounded-2xl mx-auto transition duration-300 ease-in-out hover:scale-95" alt="Flowbite Logo" /></div>

            <div className='col-span-2 mx-auto py-2 flex justify-center items-center pr-1'><img src="https://i.postimg.cc/VsXVLNtG/Whats-App-Image-2024-04-26-at-10-44-17-AM.jpg" className=" rounded-2xl mx-auto transition duration-300 ease-in-out hover:scale-95" alt="Flowbite Logo" /></div>
            <div className='col-span-2 mx-auto py-2 flex justify-center items-center pl-1'><img src="https://i.postimg.cc/jjrGhJy7/Whats-App-Image-2024-04-26-at-10-38-01-AM.jpg" className=" rounded-2xl mx-auto transition duration-300 ease-in-out hover:scale-95" alt="Flowbite Logo" /></div>
            <div className='col-span-2 mx-auto py-2 flex justify-center items-center pr-1'><img src="https://i.postimg.cc/PqV1j0Tz/Whats-App-Image-2024-04-26-at-10-37-30-AM.jpg" className=" rounded-2xl mx-auto transition duration-300 ease-in-out hover:scale-95" alt="Flowbite Logo" /></div>
            <div className='col-span-2 mx-auto py-2 flex justify-center items-center pl-1'><img src="https://i.postimg.cc/W49pfvTj/Whats-App-Image-2024-04-26-at-10-36-54-AM.jpg" className=" rounded-2xl mx-auto transition duration-300 ease-in-out hover:scale-95" alt="Flowbite Logo" /></div>

            <div className='col-span-2 mx-auto py-2 flex justify-center items-center pl-1'><img src="https://i.postimg.cc/HkNbkJXQ/Whats-App-Image-2024-04-26-at-10-34-49-AM.jpg" className=" rounded-2xl mx-auto transition duration-300 ease-in-out hover:scale-95" alt="Flowbite Logo" /></div>
            <div className='col-span-2 mx-auto py-2 flex justify-center items-center pl-1'><img src="https://i.postimg.cc/d08F6wPj/Whats-App-Image-2024-04-26-at-10-39-38-AM.jpg" className=" rounded-2xl mx-auto transition duration-300 ease-in-out hover:scale-95" alt="Flowbite Logo" /></div>

            <div className='col-span-2 text-white  font-black flex justify-center '>UBICACIÒN</div>
            <div className='col-span-2 text-white font-extrabold flex justify-center  '>E-MAIL</div>
            <div className='col-span-2 text-black font-bold text-center text-sm '>
                    Av.argentina cdra 523 centro comercial <br />
                    ACOPROM Tienda A30,A27 H15, Lima, Peru 
            </div>
            <div className='col-span-2 text-black font-bold text-center text-sm'>info@newelfin.com</div>
            <div className='col-span-2 text-white font-extrabold flex justify-center '>TELEFONO</div>
            <div className='col-span-2 text-white font-extrabold flex justify-center py-2'>REDES SOCIALES</div>
            <div className='col-span-2 text-black font-bold text-center text-sm'>
                +51 (970) 531 712
            </div>
            <div className='col-span-2 text-slate-200 '> 
            <div className=" flex justify-center space-x-10">
                          {navigation.social.map((item) => (
                            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                              <span className="sr-only">{item.name}</span>
                              <item.icon className="h-10 w-10" aria-hidden="true" />
                            </a>
                          ))}
                        </div>
            </div>
                 
          </div> 
          {/* Cuadro para xl  ok*/}
          
            <div className="grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-0   overflow-hidden px-1 py-10 rounded-3xl ">
              <div className='hidden xl:block col-span-6  text-white font-extrabold text-center '>
                <div className="grid grid-cols-6  ">
                  <div className='hidden xl:block col-span-6  text-white font-title text-2xl text-center border-2 border-slate-800 rounded-xl'>NUESTROS SOCIOS</div>              
                  <br />
                  <div className=' col-span-6 flex justify-center items-center '>
                    <Marquee>
                      <img src="https://i.postimg.cc/NM66qwwP/Whats-App-Image-2024-04-26-at-10-38-49-AM.jpg" className="h-48 w-48 rounded-2xl  transition duration-300 ease-in-out " alt="Flowbite Logo" />
                      <img src="https://i.postimg.cc/7PCM6x6T/snider1.png" className="h-48 w-96 rounded-2xl  transition duration-300 ease-in-out " alt="Flowbite Logo" />
                      <img src="https://i.postimg.cc/gjM6mzt4/Whats-App-Image-2024-04-26-at-10-41-10-AM.jpg" className="h-48 w-96 rounded-2xl  transition duration-300 ease-in-out " alt="Flowbite Logo" />
                      <img src="https://i.postimg.cc/8cmq0Hkw/chint.jpg" className="h-48 w-72 rounded-2xl  transition duration-300 ease-in-out " alt="Flowbite Logo" />
                      <img src="https://i.postimg.cc/XJ2WYcVN/Color-Siemens-Logo.webp" className="h-48 w-96 rounded-2xl  transition duration-300 ease-in-out " alt="Flowbite Logo" />
                      <img src="https://i.postimg.cc/fbpF38xc/autonic.jpg" className="h-48 w-96 rounded-2xl  transition duration-300 ease-in-out " alt="Flowbite Logo" />                              
                    </Marquee>
                  
                  </div>
                  <br />
                  <div className='col-span-6 flex justify-center items-center '>
                    <Marquee>
                      <img src="https://i.postimg.cc/VsXVLNtG/Whats-App-Image-2024-04-26-at-10-44-17-AM.jpg" className="h-32 w-auto rounded-2xl  transition duration-300 ease-in-out " alt="Flowbite Logo" />
                      <img src="https://i.postimg.cc/jjrGhJy7/Whats-App-Image-2024-04-26-at-10-38-01-AM.jpg" className="h-48 w-96 rounded-2xl  transition duration-300 ease-in-out " alt="Flowbite Logo" />
                      <img src="https://i.postimg.cc/PqV1j0Tz/Whats-App-Image-2024-04-26-at-10-37-30-AM.jpg" className="h-48 w-96 rounded-2xl  transition duration-300 ease-in-out " alt="Flowbite Logo" />
                      <img src="https://i.postimg.cc/W49pfvTj/Whats-App-Image-2024-04-26-at-10-36-54-AM.jpg" className="h-36 w-96 rounded-2xl  transition duration-300 ease-in-out " alt="Flowbite Logo" />
                      <img src="https://i.postimg.cc/HkNbkJXQ/Whats-App-Image-2024-04-26-at-10-34-49-AM.jpg" className="mx-auto rounded-2xl  transition duration-300 ease-in-out " alt="Flowbite Logo" />
                      <img src="https://i.postimg.cc/d08F6wPj/Whats-App-Image-2024-04-26-at-10-39-38-AM.jpg" className="mx-auto rounded-2xl  transition duration-300 ease-in-out " alt="Flowbite Logo" />                              
                    </Marquee>
                  
                  </div>
              <div className='hidden xl:block col-span-6  text-white font-extrabold text-center  pl-8  '>
                <br />
                <div className="grid grid-cols-2  ">
                  <div className=' text-white  font-title text-2xl  text-right  pr-14 '>UBICACIÒN</div>
                  <div className=' text-white  flex justify-left font-title text-2xl'>E-MAIL</div>
                  <div className=' text-black font-title text-right  text-1xl  pr-14'>
                      Av.argentina cdra 523 centro comercial <br />
                      ACOPROM Tienda A30,A27 H15, Lima, Peru 
                  </div>
                  <div className=' text-black font-title text-1xl text-left'>info@newelfin.com</div>
                  <div className=' text-white font-title text-2xl text-right pr-14 py-2'>TELEFONO</div>
                  <div className=' text-white font-title text-2xl flex justify-left py-2'>REDES SOCIALES</div>
                  <div className=' text-black font-title text-1xl text-right pr-14 '>
                  +51 (970) 531 712
                  </div>
                  <div className=' text-slate-200 '> 
                    <div className=" flex justify-left space-x-10">
                      {navigation.social.map((item) => (
                      <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">{item.name}</span>
                        <item.icon className="h-10 w-10" aria-hidden="true" />
                      </a>
                      ))}
                    </div>
                  </div>
                    
                </div>
              </div>

                    
             
                </div>
              </div> 
                    
            </div>
          
          {/* Cuadro para xl */} 
          {/* Derechos Reservados */}
          <div className="grid grid-cols-1    px-1 py-1   bg-white ">
            <div className='flex justify-center text-1xl'>
              <p className='font-title text-1xl'>© 2024 All rights reserved | ADC Electric e Import SAC Lima-Peru </p>                          
            </div>            
          </div> 
               
      </footer>
    )
  }