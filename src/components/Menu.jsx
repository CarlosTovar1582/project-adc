import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import React,{ Fragment } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,

  PhoneIcon,
  HomeIcon,
  PlayCircleIcon,
  UserIcon,
  BanknotesIcon,  
  FolderIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline'

const products = [
    {
      name: "Conmutadores",
      grupo:1,
      submenu: [{
                  items: "Interruptor de Limite Vertical en miniatura TZ-8",
                },
                {
                  items: "Interruptor de límite sellado",             
                },
                {
                  items: "Interruptor de límite pequeño",
                },
                {
                  items: "Interruptor de límite sellado de aluminio de alta resistencia",
                },
                {
                  items: "Interruptor de límite de servicio pesado",
                },
                {
                  items: "Interruptor de límite sellado de aleacion",
                },
                {
                  items: "Interruptor de límite a prueba de agua",
                },
              ],
      href: '#'          
    },
    {
      name: "Variadores",
      grupo:2,
      submenu: [{
                  items: "Interruptor de límite de seguridad",
                },
                {
                  items: "Interruptor de límite de reinicio Manual",             
                },
                {
                  items: "Interruptor de límite de puerta de seguridad",
                },
               ],
      href: '#'          
    },
    
    ];
export default function Menu() {
  return (
    <div className=''>
        { /* Mostrar Menu Inicio */}
        <Popover.Group className="hidden   lg:flex justify-center  rounded-lg ">       
            <Link to="/Carousel" className="leading-6 text-black text-2xl   font-bold  hover:scale-110 px-2 py-2 hover:text-black hover:bg-gray-200 rounded-2xl">
                Inicio
            </Link>          
            <Link to="/About" className="leading-6 text-2xl   text-black font-bold hover:scale-110 px-2 py-2 hover:text-black hover:bg-gray-200 rounded-2xl">
                Nosotros
            </Link>
            <Popover className="relative">
                <Popover.Button className="flex items-center font-normal leading-6 md:text-2xl   text-white " >              
                <Link to="/CategoryProducts" className="font-bold  leading-6 text-1xl text-black
                w-full justify-center rounded-2xl  px-4 py-2  hover:bg-gray-200  hover:text-black focus:outline-none 
                focus-visible:ring-2 focus-visible:ring-white/75">
                    Productos  
                </Link>   {/* <ChevronDownIcon className="h-10 w-10 text-white font-bold" aria-hidden="true" />       */}                    
                                                                            
                </Popover.Button> 
                <Transition
                as={Fragment}
                enter="transition ease-out duration-300"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-300"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
                >
                <Popover.Panel className="absolute right-0 mt-2 w-44 origin-top-right divide-y divide-gray-100 rounded-3xl bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                    <div className="p-4">
                    {products.map((item) => (
                        <div
                        key={item.name}
                        className="group relative gap-x-1  p-2  text-2xl  hover:bg-blue-400"
                        >
                        <div className="flex-auto"> 
                        {//productsLink.map((pro) => (
                            <Link to={"/Products/"}  className="bg-gradient-to-r from-gray-800 to-orange-200 bg-clip-text text-transparent text-2xl font-bold  group-hover:text-slate-200 ">
                                {item.name}
                            </Link>
                        //))
                        }  
                        {/* aqui codigo transition   */}                                              
                        </div>
                        </div>
                    ))}
                    
                    </div>               
                </Popover.Panel>
                </Transition>
            </Popover>
            <Link to="/News" className="font-bold leading-6 text-2xl  text-black  hover:scale-110 px-2 py-2 hover:text-black hover:bg-gray-200 rounded-2xl">
                Proyectos
            </Link>
            <Link to="/SectionsContact" className="font-bold leading-6 text-2xl  text-black  hover:scale-110 px-2 py-2 hover:text-black hover:bg-gray-200 rounded-2xl">
                Contactos
            </Link>    
        </Popover.Group>
        { /* Mostrar Menu Final*/}
    </div>
  )
}
